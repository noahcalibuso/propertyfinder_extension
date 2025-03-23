/**
 * @fileoverview Manages UI elements and interactions.
 */

import FormatterUtil from '../utils/formatter-util.js';

/**
 * Manages UI elements and interactions.
 */
class UIManager {
  /**
   * Create a new UIManager.
   * @param {InvestmentCalculator} calculator - Calculator for investment metrics.
   * @param {EventEmitter} eventEmitter - For publishing and subscribing to events.
   */
  constructor(calculator, eventEmitter) {
    this.calculator = calculator;
    this.events = eventEmitter;
    this.formatter = new FormatterUtil();
    this.elements = {};
    
    // Bind event handlers to maintain context
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
  }

  /**
   * Initialize UI elements.
   */
  initialize() {
    // Find or create the inputs container
    this.createInputsContainer();
    
    // Set up event listeners
    this.setupEventListeners();
    
    // Subscribe to relevant events
    this.subscribeToEvents();
  }

  /**
   * Create the input form container.
   */
  createInputsContainer() {
    // Remove any existing inputs container
    const existingContainer = document.getElementById('propfinder-pro-inputs');
    if (existingContainer) {
      existingContainer.remove();
    }
    
    // Create container
    const container = document.createElement('div');
    container.id = 'propfinder-pro-inputs';
    container.className = 'propfinder-pro-container';
    
    // Add container styles
    container.style.padding = '12px';
    container.style.marginBottom = '12px';
    container.style.backgroundColor = '#f8f9fa';
    container.style.borderRadius = '4px';
    container.style.width = '100%';
    container.style.fontFamily = 'Arial, sans-serif';
    
    // Create header
    const header = document.createElement('div');
    header.className = 'propfinder-pro-header';
    header.innerHTML = `
      <h3 style="margin: 0 0 10px; font-size: 16px; color: #0066cc;">
        PropFinder Pro Analysis
      </h3>
    `;
    container.appendChild(header);
    
    // Create inputs form
    const form = document.createElement('div');
    form.className = 'propfinder-pro-form';
    form.style.display = 'flex';
    form.style.flexWrap = 'wrap';
    form.style.gap = '8px';
    
    // Add form to container
    container.appendChild(form);
    
    // Create update button
    const button = document.createElement('button');
    button.id = 'propfinder-pro-update';
    button.textContent = 'Update Analysis';
    button.style.marginTop = '10px';
    button.style.padding = '8px 16px';
    button.style.backgroundColor = '#0066cc';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '4px';
    button.style.cursor = 'pointer';
    button.style.fontWeight = 'bold';
    button.style.width = '100%';
    container.appendChild(button);
    
    // Store references to created elements
    this.elements.container = container;
    this.elements.form = form;
    this.elements.updateButton = button;
    
    // Try to find the best location to insert the container
    this.insertInputsContainer();
  }

  /**
   * Find suitable location and insert the inputs container.
   */
  insertInputsContainer() {
    // Try to find a good location on Zillow page
    const factsList = document.querySelector('.sc-kImNAt');
    
    if (factsList) {
      // Insert before facts list
      factsList.parentNode.insertBefore(this.elements.container, factsList);
      return;
    }
    
    // Secondary location: Any "facts" container
    const factsContainer = document.querySelector('[data-testid="facts-container"]');
    if (factsContainer) {
      // Insert at the beginning of facts container
      factsContainer.insertBefore(this.elements.container, factsContainer.firstChild);
      return;
    }
    
    // Fallback: Try to insert after the price section
    const priceSection = document.querySelector('[data-testid="price"]');
    if (priceSection) {
      // Look for parent elements
      let parent = priceSection.parentNode;
      for (let i = 0; i < 4; i++) {
        if (parent && parent.parentNode) {
          parent = parent.parentNode;
        }
      }
      
      if (parent) {
        // Insert after the price section parent
        if (parent.nextSibling) {
          parent.parentNode.insertBefore(this.elements.container, parent.nextSibling);
        } else {
          parent.parentNode.appendChild(this.elements.container);
        }
        return;
      }
    }
    
    // Last resort: Append to body
    console.warn('Could not find optimal location for PropFinder Pro container, adding to body');
    document.body.appendChild(this.elements.container);
  }

  /**
   * Create input fields for property data.
   * @param {Property} property - Current property data.
   */
  createInputFields(property) {
    // Clear existing fields
    this.elements.form.innerHTML = '';
    
    // Create input fields
    const fields = [
      { id: 'price', label: 'Price', value: property.price },
      { id: 'repairCost', label: 'Repair Cost', value: property.repairCost },
      { id: 'monthlyIncome', label: 'Monthly Rent', value: property.monthlyIncome }
    ];
    
    // Add each field to the form
    fields.forEach(field => {
      const fieldContainer = this.createInputField(field.id, field.label, field.value);
      this.elements.form.appendChild(fieldContainer);
    });
  }

  /**
   * Create a single input field.
   * @param {string} id - Field ID.
   * @param {string} label - Field label.
   * @param {number} value - Field value.
   * @return {HTMLElement} Input field container.
   */
  createInputField(id, label, value) {
    const container = document.createElement('div');
    container.className = 'propfinder-pro-input-field';
    container.style.flex = '1';
    container.style.minWidth = '150px';
    
    // Format value as currency
    const formattedValue = this.formatter.formatCurrency(value);
    
    // Create field HTML
    container.innerHTML = `
      <label style="display: block; font-size: 12px; margin-bottom: 4px; color: #555;">
        ${label}:
      </label>
      <input
        id="propfinder-pro-${id}"
        type="text"
        value="${formattedValue}"
        style="width: 100%; padding: 6px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px; text-align: right; box-sizing: border-box;"
      >
    `;
    
    return container;
  }

  /**
   * Set up event listeners.
   */
  setupEventListeners() {
    // Add click handler for the update button
    if (this.elements.updateButton) {
      this.elements.updateButton.addEventListener('click', this.handleUpdateClick);
    }
  }

  /**
   * Subscribe to events from the event emitter.
   */
  subscribeToEvents() {
    // Subscribe to property update events
    this.events.on('propertyUpdated', property => {
      this.createInputFields(property);
    });
    
    // Subscribe to analysis results events
    this.events.on('analysisUpdated', analysisDetails => {
      this.updateAnalysisResults(analysisDetails);
    });
  }

  /**
   * Handle click on the update button.
   */
  handleUpdateClick() {
    // Get values from input fields
    const price = this.formatter.parseMoneyValue(
        document.getElementById('propfinder-pro-price').value);
    const repairCost = this.formatter.parseMoneyValue(
        document.getElementById('propfinder-pro-repairCost').value);
    const monthlyIncome = this.formatter.parseMoneyValue(
        document.getElementById('propfinder-pro-monthlyIncome').value);
    
    // Create property update data
    const propertyData = {
      price,
      repairCost,
      monthlyIncome
    };
    
    // Emit event with the updated property data
    this.events.emit('propertyInputUpdated', propertyData);
  }

  /**
   * Create and inject the investment analysis results.
   * @param {Array<string>} analysisDetails - Analysis results to display.
   */
  updateAnalysisResults(analysisDetails) {
    // Remove existing analysis items
    const existingItems = document.querySelectorAll('.propfinder-pro-result-item');
    existingItems.forEach(item => item.remove());
    
    // Find the facts list
    const factsList = document.querySelector('.sc-kImNAt');
    if (!factsList) {
      console.warn('Could not find facts list for analysis results');
      return;
    }
    
    // Add each analysis detail as a fact item
    analysisDetails.forEach(detail => {
      const factItem = this.createFactItem(detail);
      factsList.appendChild(factItem);
    });
  }

  /**
   * Get the appropriate icon SVG for a specific metric.
   * @param {string} factDetails - Text content of the fact to determine icon.
   * @return {string} SVG markup for the appropriate icon.
   */
  getIconForFact(factDetails) {
    // Default icon as fallback
    let iconSvg = `
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" role="img" class="Icon-c11n-8-106-0__sc-13llmml-0 iBJybQ">
        <g stroke="none">
          <path d="M29 17h-2v-2a1 1 0 00-1-1h-6a1 1 0 00-1 1v2h-2v-7a1 1 0 00-1-1H9a1 1 0 00-1 1v7H6V3a1 1 0 00-1-1H3a1 1 0 00-1 1v26a1 1 0 001 1h26a1 1 0 001-1V18a1 1 0 00-1-1zM21 16h-4v-1h4zm-12-5h5v12H9zm19 17H4V4h1v13a1 1 0 001 1h3a1 1 0 001-1v-1h6a1 1 0 001-1v-2h2a1 1 0 001-1v-1h3a1 1 0 001-1v-1h1z"></path>
          <path d="M6 7h2v2H6zM6 11h2v2H6z"></path>
        </g>
      </svg>
    `;

    // Match fact content to determine which icon to use
    if (factDetails.includes('Cash Needed')) {
      // Money bag icon
      iconSvg = `
        <?xml version="1.0" encoding="UTF-8"?>
        <svg width="1000px" height="1000px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="m11.726 17.102c-0.099-0.2175-0.304-0.3762-0.5521-0.4044-0.2101-0.024-0.4158-0.069-0.6114-0.1339-0.0877-0.0295-0.17-0.0617-0.2462-0.0962l0.1266-0.3451c0.0894 0.0399 0.1815 0.0764 0.2758 0.1094l0.0039 0.0014 4e-3 0.0013c0.3026 0.1 0.6004 0.1507 0.8849 0.1507 0.2857 0 0.4928-0.0383 0.6519-0.1204l0.0095-0.0049 0.0093-0.0054c0.241-0.1383 0.3793-0.376 0.3793-0.6523 0-0.3066-0.1654-0.5611-0.4539-0.6986-0.1451-0.0706-0.3512-0.138-0.6481-0.2118-0.3045-0.077-0.5603-0.1587-0.7587-0.2424-0.145-0.0656-0.2708-0.1703-0.3842-0.32-0.0976-0.1336-0.147-0.3345-0.147-0.5974 0-0.3172 0.0893-0.579 0.2731-0.8004 0.1636-0.194 0.3959-0.3258 0.7077-0.3997 0.2313-0.0548 0.4117-0.2199 0.4928-0.4331 0.0917 0.2161 0.2868 0.3768 0.5296 0.4155 0.2028 0.0323 0.389 0.0838 0.5564 0.1535l-0.1165 0.3382c-0.3161-0.1269-0.6272-0.191-0.9281-0.191-0.9993 0-1.0499 0.6894-1.0499 0.8276 0 0.2996 0.1618 0.5508 0.4439 0.6893l0.0079 0.0039 8e-3 0.0036c0.1425 0.0636 0.3447 0.1249 0.6365 0.1929 0.3017 0.0682 0.5533 0.1463 0.751 0.2329l0.0041 0.0018 0.0041 0.0017c0.1468 0.0611 0.2727 0.1631 0.3849 0.3119l0.0018 0.0023 0.0018 0.0024c0.0981 0.1268 0.1479 0.3229 0.1479 0.5829 0 0.3001-0.0869 0.5541-0.2657 0.7766-0.1551 0.193-0.3716 0.3266-0.6621 0.4084-0.2243 0.0632-0.3983 0.2347-0.4728 0.4488z" fill="#000"/>
        <path d="m11.978 18h-0.4815c-0.1077 0-0.195-0.0895-0.195-0.2v-0.4015c0-0.1056-0.0801-0.1924-0.1825-0.2041-0.2438-0.0277-0.4796-0.0794-0.7075-0.155-0.2214-0.0746-0.41321-0.163-0.57543-0.2655-0.07455-0.0471-0.10167-0.1427-0.07085-0.2267l0.33028-0.9006c0.0445-0.1212 0.188-0.1676 0.2985-0.1049 0.1492 0.0845 0.3096 0.1568 0.481 0.2168 0.2555 0.0844 0.5007 0.1266 0.7355 0.1266 0.2019 0 0.3462-0.0223 0.4327-0.067 0.0865-0.0497 0.1298-0.1217 0.1298-0.216 0-0.1092-0.0577-0.1911-0.1731-0.2457-0.1112-0.0546-0.2967-0.1142-0.5562-0.1787-0.3338-0.0844-0.6119-0.1738-0.8344-0.2681-0.2225-0.0993-0.4162-0.2582-0.581-0.4766-0.16484-0.2234-0.24724-0.5238-0.24724-0.9011 0-0.4369 0.1298-0.8117 0.38934-1.1245 0.234-0.2774 0.557-0.465 0.9692-0.5627 0.0928-0.022 0.1619-0.1046 0.1619-0.2022v-0.4425c0-0.1105 0.0873-0.2 0.195-0.2h0.4815c0.1077 0 0.195 0.0895 0.195 0.2v0.4172c0 0.1022 0.0752 0.1873 0.1736 0.203 0.3611 0.0575 0.6784 0.1664 0.9518 0.3267 0.0776 0.0455 0.1084 0.1423 0.0786 0.2287l-0.3091 0.8969c-0.0409 0.1189-0.1774 0.1692-0.2872 0.1124-0.3482-0.18-0.6805-0.27-0.9971-0.27-0.375 0-0.5625 0.1092-0.5625 0.3276 0 0.1043 0.0557 0.1837 0.1669 0.2384 0.1113 0.0496 0.2946 0.1042 0.5501 0.1638 0.3296 0.0745 0.6078 0.1613 0.8344 0.2606 0.2266 0.0943 0.4223 0.2507 0.5872 0.4692 0.1689 0.2184 0.2534 0.5163 0.2534 0.8936 0 0.417-0.1257 0.7819-0.3771 1.0947-0.2189 0.2726-0.522 0.4634-0.9091 0.5725-0.089 0.0251-0.1539 0.1059-0.1539 0.2005v0.4642c0 0.1105-0.0873 0.2-0.195 0.2z" fill="#000"/>
        <path d="m9.5924 5h4.2218c1.0813 0 0.4875 1.664 0.0497 2.679l-0.4982 1.164-0.0673 0.157c0.4719-0.02349 0.9386 0.11054 1.3299 0.382 1.4639 1.3738 2.652 3.0278 3.4974 4.869 0.3294 0.6808 0.4601 1.4448 0.3763 2.2-0.1006 1.9249-1.6063 3.4588-3.4837 3.549h-6.63c-1.8779-0.0875-3.3858-1.6198-3.4886-3.545-0.08381-0.7552 0.04688-1.5192 0.37635-2.2 0.84639-1.843 2.0361-3.4985 3.5022-4.873 0.39137-0.27146 0.85799-0.40549 1.3299-0.382l-0.078-0.181-0.48747-1.14c-0.43583-1.015-1.0325-2.679 0.04972-2.679z" clip-rule="evenodd" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
        <path d="m13.298 9.75c0.4142 0 0.75-0.33579 0.75-0.75s-0.3358-0.75-0.75-0.75v1.5zm-3.1902-1.5c-0.41419 0-0.74998 0.33579-0.74998 0.75s0.33579 0.75 0.74998 0.75v-1.5zm5.8695 0.39988c0.3589-0.20676 0.4823-0.66533 0.2755-1.0242s-0.6653-0.48227-1.0242-0.27551l0.7487 1.2998zm-2.612 0.19312 0.1447 0.73591 0.0022-4.3e-4 -0.1469-0.73548zm-3.3355-0.024 0.1553-0.73379-0.0068-0.00138-0.1485 0.73517zm-1.8641-1.4754c-0.36254-0.20035-0.81885-0.06888-1.0192 0.29365-0.20036 0.36254-0.06889 0.81885 0.29365 1.0192l0.72555-1.3129zm5.1323 0.90643h-3.1902v1.5h3.1902v-1.5zm1.9306-0.89988c-0.627 0.36116-1.3056 0.61671-2.0102 0.7574l0.2938 1.471c0.8653-0.1728 1.6976-0.48645 2.4651-0.9286l-0.7487-1.2998zm-2.008 0.75697c-1.0034 0.19732-2.0348 0.1899-3.0355-0.02184l-0.31054 1.4675c1.1983 0.25356 2.4337 0.26246 3.6354 0.02616l-0.2894-1.4718zm-3.0423-0.02326c-0.70273-0.14187-1.3812-0.39128-2.0126-0.74026l-0.72555 1.3129c0.76481 0.42267 1.5877 0.72541 2.4412 0.89774l0.29691-1.4703z" fill="#000"/>
        </svg>

      `;
    } else if (factDetails.includes('Mortgage Payment')) {
      // House with dollar sign
      iconSvg = `
        <?xml version="1.0" encoding="UTF-8"?>
        <svg width="600px" height="600px" fill="#000000" version="1.1" viewBox="0 0 122.39 122.39" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
		    <path d="m86.51 72.041v39.673h-17.153v-40.245h-29.671v40.244h-17.819v-56.587l29.649-20.388c0.128-5.292 1.379-10.31 3.54-14.817l-0.438-0.308-3.064 2.106-24.043 16.46v-8.379h-13.481v17.606l-14.03 9.605 6.051 8.836 5.106-3.496v59.318h86.042l0.02-50.793c-2.963 0.781-6.07 1.199-9.273 1.199-0.483 3e-3 -0.96-0.015-1.436-0.034z"/>
		    <path d="m89.271 0.716c-18.287 0-33.113 14.826-33.113 33.114 0 18.289 14.826 33.114 33.113 33.114 18.289 0 33.114-14.826 33.114-33.115 1e-3 -18.287-14.824-33.113-33.114-33.113zm4.075 55.422v7.368h-8.408v-6.79c-4.054-0.326-8.107-1.534-10.604-3.2l-0.834-0.555 2.633-9.162 1.521 0.898c3.078 1.814 6.762 2.857 10.104 2.857 3.626 0 5.971-1.611 5.971-4.103 0-1.705-0.807-3.576-6.646-5.707-6.362-2.303-12.874-5.73-12.874-13.675 0-6.397 4.239-11.249 11.146-12.879v-7.035h8.407v6.506c3.265 0.245 6.088 1.003 8.796 2.359l1.023 0.512-2.637 8.979-1.828-0.838c-1.639-0.766-4.389-2.047-8.452-2.047-3.259 0-5.205 1.298-5.205 3.478 0 1.897 1.825 3.238 7.516 5.514 8.451 3.17 12.073 7.383 12.073 14.073-2e-3 6.676-4.556 11.852-11.702 13.447z"/>
        </svg>
      `;
    } else if (factDetails.includes('Monthly Cash Flow')) {
      // Cash flow icon
      iconSvg = `
        <?xml version="1.0" encoding="UTF-8"?>
        <svg width="800px" height="800px" fill="#000000" version="1.1" viewBox="0 0 122.55 122.55" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
        <polygon points="25.454 55.023 6.446 55.023 6.446 83.555 25.454 73.139"/>
        <polygon points="6.446 109.33 25.454 109.33 25.454 92.715 6.446 103.13"/>
        <polygon points="56.575 35.756 37.567 35.756 37.567 66.5 56.575 56.084"/>
        <polygon points="37.567 109.33 56.575 109.33 56.575 75.661 37.567 86.079"/>
        <polygon points="69.602 109.33 88.608 109.33 88.608 58.105 69.602 68.522"/>
        <polygon points="88.608 13.217 69.602 13.217 69.602 48.945 88.608 38.528"/>
        <polygon points="96.338 22.941 102.73 35.22 0 91.946 0 101.75 106.7 42.837 113.37 54.326 122.55 29.562"/>
        </svg>
      `;
    } else if (factDetails.includes('NOI')) {
      // Net icon
      iconSvg = `
        <?xml version="1.0" encoding="UTF-8"?>
        <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="m11.948 1.25h0.104c0.8985-3e-5 1.6477-5e-5 2.2425 0.07991 0.6278 0.08441 1.1946 0.27008 1.65 0.72555 0.4555 0.45547 0.6412 1.0223 0.7256 1.6501 0.0591 0.4396 0.0745 0.96357 0.0785 1.5698 0.6485 0.02081 1.2266 0.05873 1.7404 0.12781 1.1724 0.15762 2.1214 0.48974 2.8698 1.2381 0.7483 0.74837 1.0804 1.6973 1.2381 2.8697 0.1531 1.1392 0.1531 2.5948 0.1531 4.4326v0.1128c0 1.8378 0 3.2934-0.1531 4.4326-0.1577 1.1724-0.4898 2.1214-1.2381 2.8698-0.7484 0.7483-1.6974 1.0804-2.8698 1.2381-1.1392 0.1531-2.5948 0.1531-4.4326 0.1531h-4.1128c-1.8378 0-3.2934 0-4.4326-0.1531-1.1724-0.1577-2.1214-0.4898-2.8697-1.2381-0.74836-0.7484-1.0805-1.6974-1.2381-2.8698-0.15317-1.1392-0.15316-2.5948-0.15314-4.4326v-0.1128c-2e-5 -1.8378-3e-5 -3.2934 0.15314-4.4326 0.15762-1.1724 0.48974-2.1214 1.2381-2.8697 0.74837-0.74836 1.6973-1.0805 2.8697-1.2381 0.51377-0.06908 1.0919-0.107 1.7404-0.12781 4e-3 -0.60624 0.01941-1.1302 0.07851-1.5698 0.08441-0.62779 0.27008-1.1946 0.72555-1.6501s1.0223-0.64114 1.6501-0.72555c0.59478-0.07996 1.344-0.07994 2.2425-0.07991zm-3.1962 4.0018c0.37813-0.00179 0.77514-0.00178 1.1918-0.00178h4.1128c0.4167 0 0.8137-1e-5 1.1918 0.00178-0.0042-0.57032-0.0182-1.0005-0.0647-1.3464-0.0621-0.46146-0.1693-0.65895-0.2996-0.78927s-0.3278-0.23754-0.7893-0.29958c-0.483-0.06494-1.1306-0.06654-2.0946-0.06654s-1.6116 0.0016-2.0946 0.06654c-0.46146 0.06204-0.65896 0.16926-0.78927 0.29958-0.13032 0.13032-0.23754 0.32781-0.29958 0.78927-0.0465 0.34586-0.06053 0.77607-0.06474 1.3464zm-3.041 1.638c-1.0061 0.13527-1.5857 0.38894-2.009 0.81215-0.42321 0.4232-0.67688 1.0028-0.81214 2.0089-0.13817 1.0276-0.13976 2.3824-0.13976 4.2892s0.00159 3.2615 0.13976 4.2892c0.13526 1.006 0.38893 1.5857 0.81214 2.0089s1.0029 0.6769 2.009 0.8121c1.0277 0.1382 2.3823 0.1398 4.2892 0.1398h4c1.9068 0 3.2615-0.0016 4.2892-0.1398 1.006-0.1352 1.5857-0.3889 2.0089-0.8121s0.6769-1.0029 0.8121-2.0089c0.1382-1.0277 0.1398-2.3824 0.1398-4.2892s-0.0016-3.2615-0.1398-4.2892c-0.1352-1.0061-0.3889-1.5857-0.8121-2.0089-0.4232-0.42321-1.0029-0.67688-2.0089-0.81215-1.0277-0.13816-2.3824-0.13976-4.2892-0.13976h-4c-1.9068 0-3.2615 0.0016-4.2892 0.13976zm6.2892 2.3602c0.4142 0 0.75 0.33579 0.75 0.75v0.0102c1.0888 0.2743 2 1.1328 2 2.3231 0 0.4142-0.3358 0.75-0.75 0.75s-0.75-0.3358-0.75-0.75c0-0.384-0.4258-0.9166-1.25-0.9166s-1.25 0.5326-1.25 0.9166c0 0.3841 0.4258 0.9167 1.25 0.9167 1.3849 0 2.75 0.9598 2.75 2.4167 0 1.1903-0.9112 2.0488-2 2.3231v0.0102c0 0.4142-0.3358 0.75-0.75 0.75s-0.75-0.3358-0.75-0.75v-0.0102c-1.0888-0.2743-2-1.1328-2-2.3231 0-0.4142 0.33579-0.75 0.75-0.75 0.4142 0 0.75 0.3358 0.75 0.75 0 0.384 0.4258 0.9166 1.25 0.9166s1.25-0.5326 1.25-0.9166c0-0.3841-0.4258-0.9167-1.25-0.9167-1.3849 0-2.75-0.9597-2.75-2.4167 0-1.1903 0.9112-2.0488 2-2.3231v-0.0102c0-0.41421 0.3358-0.75 0.75-0.75z" clip-rule="evenodd" fill="#000" fill-rule="evenodd"/>
        </svg>
      `;
    } else if (factDetails.includes('Total Expenses')) {
      // Expense icon
      iconSvg = `
        <?xml version="1.0" encoding="UTF-8"?>
        <svg class="icon line-color" fill="#000000" stroke="#000000" data-name="Line Color" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M5,13H7.5A1.5,1.5,0,0,0,9,11.5H9A1.5,1.5,0,0,0,7.5,10h-1A1.5,1.5,0,0,1,5,8.5H5A1.5,1.5,0,0,1,6.5,7H9" stroke="#000"/>
        <path d="M7,7V6m0,8V13m5,2h3m-2-4h2" stroke="#000" data-name="secondary"/>
        <path d="M5,18v3l2.33-1,2.33,1L12,20l2.34,1,2.33-1L19,21V4a1,1,0,0,0-1-1H11" stroke="#000000000"/>
        </g>
        </svg>
      `;
    } else if (factDetails.includes('Annual Cash Flow')) {
      // Calendar icon
      iconSvg = `
        <?xml version="1.0" encoding="UTF-8"?>
        <svg width="200px" height="200px" fill="#000000" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">   
        <path d="M15.673,399.151V90.906H122.04V18.808H73.454v56.425H0v339.592h316.082v-15.673H15.673z M89.128,34.482h17.24v40.751 h-17.24V34.482z"/>     
        <path d="m360.17 75.233v-56.425h-48.587v56.425h-166.04v15.673h272.41v47.02h-378.78v15.674h394.45v-78.367h-73.459zm-15.673 0h-17.24v-40.751h17.24v40.751z"/>     
        <path d="m433.63 321.16v-144.05h-15.673v144.04c-43.872 3.975-78.367 40.942-78.367 85.832 0 47.533 38.672 86.204 86.204 86.204s86.203-38.67 86.203-86.203c0-44.89-34.495-81.858-78.367-85.832zm-7.837 156.36c-38.891 0-70.531-31.64-70.531-70.531s31.639-70.531 70.531-70.531 70.531 31.64 70.531 70.531c0 38.892-31.64 70.531-70.531 70.531z"/>     
        <polygon points="433.63 399.15 433.63 359.97 417.96 359.97 417.96 414.82 472.82 414.82 472.82 399.15"/>     
        <path d="m156.73 179.72v47.02h47.02v-47.02h-47.02zm31.347 31.347h-15.673v-15.673h15.673v15.673z"/>     
        <path d="m229.88 179.72v47.02h47.02v-47.02h-47.02zm31.347 31.347h-15.673v-15.673h15.673v15.673z"/>     
        <path d="m303.02 179.72v47.02h47.02v-47.02h-47.02zm31.347 31.347h-15.673v-15.673h15.673v15.673z"/>     
        <path d="m83.59 252.86v47.02h47.02v-47.02h-47.02zm31.347 31.347h-15.674v-15.673h15.673v15.673z"/>     
        <path d="m156.73 252.86v47.02h47.02v-47.02h-47.02zm31.347 31.347h-15.673v-15.673h15.673v15.673z"/>     
        <path d="m229.88 252.86v47.02h47.02v-47.02h-47.02zm31.347 31.347h-15.673v-15.673h15.673v15.673z"/>     
        <path d="m303.02 252.86v47.02h47.02v-47.02h-47.02zm31.347 31.347h-15.673v-15.673h15.673v15.673z"/>     
        <path d="m83.59 326.01v47.02h47.02v-47.02h-47.02zm31.347 31.347h-15.674v-15.673h15.673v15.673z"/>     
        <path d="m156.73 326.01v47.02h47.02v-47.02h-47.02zm31.347 31.347h-15.673v-15.673h15.673v15.673z"/>     
        <path d="m229.88 326.01v47.02h47.02v-47.02h-47.02zm31.347 31.347h-15.673v-15.673h15.673v15.673z"/>   </svg>
      `;
    } else if (factDetails.includes('GRM')) {
      // Calculator icon
      iconSvg = `
        <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" role="img" class="Icon-c11n-8-106-0__sc-13llmml-0 iBJybQ">
          <g stroke="none">
            <path d="M24 4H8a2 2 0 00-2 2v20a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 22H8V6h16v20z"></path>
            <path d="M10 9h12v3H10zM10 14h3v3h-3zM14.5 14h3v3h-3zM19 14h3v3h-3zM10 18h3v3h-3zM14.5 18h3v3h-3zM19 18h3v3h-3zM19 22h3v3h-3z"></path>
          </g>
        </svg>
      `;
    } else if (factDetails.includes('Cap Rate')) {
      // Percentage icon
      iconSvg = `
        <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" role="img" class="Icon-c11n-8-106-0__sc-13llmml-0 iBJybQ">
          <g stroke="none">
            <path d="M13 8.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM11 8.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0zM28 23.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM26 23.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0zM8.76 25.67l15.68-18.4-1.52-1.3-15.68 18.4z"></path>
          </g>
        </svg>
      `;
    } else if (factDetails.includes('Cash on Cash Return')) {
      // Return arrow icon
      iconSvg = `
        <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.7,7.3c-0.4-0.4-1-0.4-1.4,0L14,13.6L9.7,9.3C9.5,9.1,9.3,9,9,9C8.7,9,8.5,9.1,8.3,9.3l-6,6C2.1,15.5,2,15.7,2,16c0,0.6,0.4,1,1,1c0.3,0,0.5-0.1,0.7-0.3L9,11.4l4.3,4.3c0.1,0.1,0.2,0.2,0.3,0.2C13.7,16,13.9,16,14,16c0.2,0,0.5-0.1,0.6-0.3c0,0,0,0,0.1,0c0,0,0,0,0,0s0,0,0,0l7-7C22.1,8.3,22.1,7.7,21.7,7.3z"></path></g></svg>
      `;
    }

    return iconSvg;
  }

  /**
   * Create a fact item for displaying in the facts list.
   * @param {string} factDetails - Text content of the fact.
   * @return {HTMLElement} The fact item element.
   */
  createFactItem(factDetails) {
    // Create container
    const factItem = document.createElement('div');
    factItem.className = 'sc-jNJNQp cjVrGl propfinder-pro-result-item';
    
    // Get the appropriate icon based on the fact content
    const iconSvg = this.getIconForFact(factDetails);
    
    // Use Zillow's styling for consistency
    factItem.innerHTML = `
      <div class="sc-hlLBRy jXcrbC">
        ${iconSvg}
      </div>
      <span class="Text-c11n-8-106-0__sc-aiai24-0 sc-bTTELM ivqQFt jhRedY">${factDetails}</span>
    `;
    
    return factItem;
  }
}

export default UIManager;