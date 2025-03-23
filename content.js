/**
 * PropFinder Pro - Zillow Investment Analyzer
 * 
 * This content script analyzes Zillow property listings for investment potential
 * by calculating key metrics such as cap rate, cash flow, and ROI.
 */

// Use strict mode to catch common coding mistakes and "unsafe" actions
'use strict';

// Global state management using an IIFE to avoid polluting global scope
const PropFinderPro = (() => {
  // Private state for the extension
  let propertyState = {
    price: 0,
    repairCost: 0,
    monthlyIncome: 0
  };

  // Default investment assumptions
  const DEFAULT_OPTIONS = {
    // Mortgage assumptions
    interestRate: 7.5,
    loanTerm: 30,
    downPayment: 20,
    closingCosts: 3,
    
    // Operating expense assumptions
    propertyTaxRate: 1.2,
    insuranceRate: 0.5,
    maintenanceRate: 1,
    propertyManagementRate: 10,
    vacancyRate: 5
  };

  /**
   * Extracts property listing price from the current Zillow page
   * @returns {Object} An object containing the extracted property price
   */
  function extractListingInfo() {
    // Extract price using the exact data-testid attribute
    const priceElement = document.querySelector('span[data-testid="price"]');
    let price = 0;
    
    if (priceElement) {
      // Remove the $ and commas, convert to number
      price = parseFloat(priceElement.textContent.replace(/[$,]/g, ''));
    }
    
    return {
      price: price
    };
  }

  /**
   * Creates a new input field component for the analysis form
   * @param {string} label - Label text for the input field
   * @param {number} value - Initial value for the input field
   * @param {string} type - HTML input type (default: 'number')
   * @returns {HTMLElement} The created input field element
   */
  function newInputField(label, value, type = 'number') {
    const inputField = document.createElement('div');
    inputField.className = 'zillow-investment-analysis-input-field';
    inputField.style.display = 'flex';
    inputField.style.flexDirection = 'row';
    inputField.style.alignItems = 'center';
    inputField.style.margin = '0 5px';
    inputField.style.width = 'calc(33% - 10px)'; 
    inputField.style.padding = '0px 5px'; 
    inputField.style.flex = '1';
    
    // Format as USD
    const formatterUSD = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });

    // Make sure value is a valid number
    const numValue = typeof value === 'number' && !isNaN(value) ? value : 0;
    const formattedValue = formatterUSD.format(numValue);

    inputField.innerHTML = `
      <label style="font-size: 14px; margin-right: 8px; width: 50%; text-align: left;">${label}:</label>
      <input 
        value="${formattedValue}" 
        style="width: 50%; padding: 4px 8px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px; text-align: right;"
      >
    `;
    
    return inputField;
  }

  /**
   * Creates a new fact item to display in the Zillow facts list
   * @param {string} factDetails - Text content of the fact item
   * @returns {HTMLElement} The created fact item element
   */
  function newFactItem(factDetails) {
    // Create a new list item with the same structure as Zillow's
    const newFactItem = document.createElement('div');
    newFactItem.className = 'sc-jNJNQp cjVrGl';
    newFactItem.id = 'zillow-investment-analysis-item';

    // Create the HTML content for our new item
    newFactItem.innerHTML = `
      <div class="sc-hlLBRy jXcrbC">
        <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" role="img" class="Icon-c11n-8-106-0__sc-13llmml-0 iBJybQ">
          <g stroke="none">
            <path d="M29 17h-2v-2a1 1 0 00-1-1h-6a1 1 0 00-1 1v2h-2v-7a1 1 0 00-1-1H9a1 1 0 00-1 1v7H6V3a1 1 0 00-1-1H3a1 1 0 00-1 1v26a1 1 0 001 1h26a1 1 0 001-1V18a1 1 0 00-1-1zM21 16h-4v-1h4zm-12-5h5v12H9zm19 17H4V4h1v13a1 1 0 001 1h3a1 1 0 001-1v-1h6a1 1 0 001-1v-2h2a1 1 0 001-1v-1h3a1 1 0 001-1v-1h1z"></path>
            <path d="M6 7h2v2H6zM6 11h2v2H6z"></path>
          </g>
        </svg>
      </div>
      <span class="Text-c11n-8-106-0__sc-aiai24-0 sc-bTTELM ivqQFt jhRedY">${factDetails}</span>
    `;

    return newFactItem;
  }

  /**
   * Calculates real estate investment metrics based on property data and assumptions
   * @param {Object} propertyState - Property-specific values (price, repair, income)
   * @param {Object} options - Investment assumption values
   * @returns {Array} Array of analysis details strings to display
   */
  function calculateAnalysis(propertyState, options) {
    // Use property-specific values from propertyState
    const monthlyIncome = propertyState.monthlyIncome;
    const repairCost = propertyState.repairCost;
    const price = propertyState.price;

    const adjustedPrice = price + repairCost;

    // Annual income calculations
    const annualIncome = monthlyIncome * 12;
    
    // Annual expense calculations
    const annualPropertyTaxes = price * options.propertyTaxRate / 100;
    const annualInsurance = price * options.insuranceRate / 100;
    const annualMaintenance = annualIncome * options.maintenanceRate / 100;
    const annualPropertyManagement = annualIncome * options.propertyManagementRate / 100;
    const annualVacancy = annualIncome * options.vacancyRate / 100;
    
    const totalAnnualExpenses = annualPropertyTaxes + annualInsurance + 
                               annualMaintenance + annualPropertyManagement + annualVacancy;
    
    // Investment calculations
    const netOperatingIncome = annualIncome - totalAnnualExpenses;
    const capRate = netOperatingIncome / price * 100;
   
    const downPayment = adjustedPrice * (options.downPayment / 100);
    const closingCosts = (price * (options.closingCosts / 100 || 0.03)); // Default 3% if not specified
    const totalCashNeeded = downPayment + closingCosts + repairCost; // Include repair cost in total cash needed
    
    // Mortgage calculations
    const loanAmount = price - downPayment;
    const numOfPayments = options.loanTerm * 12;
    const monthlyInterest = (options.interestRate * 0.01) / 12;
    
    // Calculate mortgage payment (P&I) using the standard formula
    const mortgagePayment = loanAmount * monthlyInterest * 
                           (Math.pow(1 + monthlyInterest, numOfPayments)) / 
                           (Math.pow(1 + monthlyInterest, numOfPayments) - 1);

    const annualMortgagePayment = mortgagePayment * 12;
    const annualCashFlow = netOperatingIncome - annualMortgagePayment;
    const monthlyCashFlow = annualCashFlow / 12;
    
    // Return calculations
    const cashOnCash = (annualCashFlow / totalCashNeeded) * 100;
    
    // Format results to display
    const analysisDetails = [
      `Cash Needed: $${totalCashNeeded.toFixed()}`,
      `Mortgage Payment: $${mortgagePayment.toFixed()}`,
      `Monthly Cash Flow: $${monthlyCashFlow.toFixed()}`,
      `NOI: $${netOperatingIncome.toFixed()}`,
      `Total Expenses: $${totalAnnualExpenses.toFixed()}/yr`,
      `Annual Cash Flow: $${annualCashFlow.toFixed()}`,
      `GRM: ${(price / annualIncome).toFixed()}`,
      `Cap Rate: ${capRate.toFixed()}%`,
      `Cash on Cash Return: ${cashOnCash.toFixed()}%`,
    ];

    return analysisDetails;
  }

  /**
   * Creates and injects input fields for user to update analysis values
   * @param {Object} propertyState - Property-specific values
   * @param {Object} options - Investment assumption values
   */
  function injectInputFields(propertyState, options) {
    // Remove any existing input fields we've added
    const existingFields = document.getElementById('zillow-investment-analysis-inputs');
    if (existingFields) {
      existingFields.remove();
    }
    
    // Create a container for the input fields
    const inputContainer = document.createElement('div');
    inputContainer.id = 'zillow-investment-analysis-inputs';
    inputContainer.style.padding = '10px';
    inputContainer.style.marginBottom = '10px';
    inputContainer.style.backgroundColor = '#f8f9fa';
    inputContainer.style.borderRadius = '4px';
    inputContainer.style.width = '100%';
    
    // Add a title for the input section
    const title = document.createElement('h3');
    title.textContent = 'Investment Analysis Inputs';
    title.style.fontSize = '16px';
    title.style.marginBottom = '10px';
    title.style.marginTop = '0px';
    inputContainer.appendChild(title);
    
    // Create a row container for inputs
    const inputRow = document.createElement('div');
    inputRow.style.display = 'flex';
    inputRow.style.flexDirection = 'row';
    inputRow.style.justifyContent = 'space-between';
    inputRow.style.width = '100%';
    
    // Create the input fields with values from propertyState
    const priceField = newInputField('Price', propertyState.price);
    const repairField = newInputField('Repair Cost', propertyState.repairCost);
    const incomeField = newInputField('Monthly Income', propertyState.monthlyIncome);
    
    // Add the fields to the row container
    inputRow.appendChild(priceField);
    inputRow.appendChild(repairField);
    inputRow.appendChild(incomeField);
    
    // Add the row to the main container
    inputContainer.appendChild(inputRow);
    
    // Add a button to update the analysis
    const updateButton = document.createElement('button');
    updateButton.textContent = 'Update Analysis';
    updateButton.style.marginTop = '10px';
    updateButton.style.padding = '5px 10px';
    updateButton.style.backgroundColor = '#0066cc';
    updateButton.style.color = 'white';
    updateButton.style.border = 'none';
    updateButton.style.borderRadius = '4px';
    updateButton.style.cursor = 'pointer';
    updateButton.style.width = '100%';
    updateButton.style.fontWeight = 'bold';
    inputContainer.appendChild(updateButton);
    
    // Find where to insert the input fields
    const factsList = document.querySelector('.sc-kImNAt');
    if (!factsList) {
      console.log("Could not find facts list for input fields");
      return;
    }
    
    // Insert the input container before the facts list
    factsList.parentNode.insertBefore(inputContainer, factsList);
    
    // Add event listener to the update button
    updateButton.addEventListener('click', function() {
      // Get current price from the page as a fallback
      const currentListingInfo = extractListingInfo();
      
      // Get values from input fields
      const priceValue = parseFloat(priceField.querySelector('input').value.replace(/[^\d.-]/g, '')) || currentListingInfo.price;
      const repairValue = parseFloat(repairField.querySelector('input').value.replace(/[^\d.-]/g, '')) || 0;
      const incomeValue = parseFloat(incomeField.querySelector('input').value.replace(/[^\d.-]/g, '')) || 0;
      
      // Update property state
      propertyState.price = priceValue;
      propertyState.repairCost = repairValue;
      propertyState.monthlyIncome = incomeValue;
      
      // Update the analysis with the new values
      const analysisDetails = calculateAnalysis(propertyState, options);
      injectInvestmentAnalysis(analysisDetails);
    });
  }

  /**
   * Injects analysis details into the Zillow page
   * @param {Array} analysisDetails - Array of analysis strings to display
   */
  function injectInvestmentAnalysis(analysisDetails) {
    // Remove ALL existing analysis items we've added
    const existingItems = document.querySelectorAll('[id="zillow-investment-analysis-item"]');
    existingItems.forEach(item => item.remove());
    
    // Find the "At a glance facts" list
    const factsList = document.querySelector('.sc-kImNAt');
    
    if (!factsList) {
      console.log("Could not find facts list");
      return;
    }

    // Add each analysis detail as a new fact item
    for (let factDetail of analysisDetails) {
      factsList.appendChild(newFactItem(factDetail));
    }
  }

  /**
   * Updates the property analysis with current data and settings
   */
  function updateAnalysis() {
    try {
      // Extract listing information
      const listingInfo = extractListingInfo();
      
      // Initialize property state with listing info and default values
      // Use rent zestimate if available, otherwise use a default value
      const defaultIncome = listingInfo.rentEstimate > 0 ? listingInfo.rentEstimate : 500;
      
      propertyState = {
        price: listingInfo.price,
        repairCost: 0,
        monthlyIncome: defaultIncome 
      };
      
      // Get saved options from Chrome storage
      chrome.storage.sync.get(DEFAULT_OPTIONS, function(options) {
        if (chrome.runtime.lastError) {
          console.error("Chrome runtime error:", chrome.runtime.lastError);
          // Use defaults if there's an error
          injectInputFields(propertyState, DEFAULT_OPTIONS);
          const analysisDetails = calculateAnalysis(propertyState, DEFAULT_OPTIONS);
          injectInvestmentAnalysis(analysisDetails);
          return;
        }

        // Inject input fields for updating the analysis
        injectInputFields(propertyState, options);
        const analysisDetails = calculateAnalysis(propertyState, options);
        injectInvestmentAnalysis(analysisDetails);
      });
    } catch (e) {
      console.error("Error updating analysis:", e);
      // Fallback to use defaults if Chrome API fails
      injectInputFields(propertyState, DEFAULT_OPTIONS);
      const analysisDetails = calculateAnalysis(propertyState, DEFAULT_OPTIONS);
      injectInvestmentAnalysis(analysisDetails);
    }
  }
  
  /**
   * Main initialization function to run the extension
   */
  function init() {
    // Keep track of URL to detect page changes
    let currentUrl = window.location.href;
    
    /**
     * Check if we're on a Zillow property details page and initialize if so
     */
    function initOnPropertyPage() {
      if (window.location.href.includes('zillow.com/homedetails')) {
        // Wait a bit for the page to fully load
        setTimeout(updateAnalysis, 1500);
      }
    }
    
    /**
     * Detect URL changes (for SPA navigation)
     */
    function checkForUrlChanges() {
      if (currentUrl !== window.location.href) {
        currentUrl = window.location.href;
        // Run initialization when URL changes
        initOnPropertyPage();
      }
    }
    
    // Initialize extension
    window.addEventListener('load', initOnPropertyPage);
    
    // Poll for URL changes (for SPA navigation)
    setInterval(checkForUrlChanges, 500);
    
    // Listen for History API changes (used by many SPAs)
    window.addEventListener('popstate', initOnPropertyPage);
    
    // Listen for messages from the popup
    chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
      try {
        if (message.action === 'settingsUpdated') {
          // Update the analysis with the new settings, preserving property-specific values
          const analysisDetails = calculateAnalysis(propertyState, message.options);
          injectInvestmentAnalysis(analysisDetails);
          sendResponse({success: true});
        }
      } catch (e) {
        console.error("Error handling message:", e);
        sendResponse({success: false, error: e.message});
      }
      return true; // Keep the message channel open for the async response
    });
  }
  
  // Public API for the module
  return {
    init: init,
    // Expose these for testing or external access if needed
    calculateAnalysis: calculateAnalysis,
    updateAnalysis: updateAnalysis
  };
})();

// Initialize the extension
PropFinderPro.init();