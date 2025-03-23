import FormatterUtil from '../utils/FormatterUtil.js';

/**
 * Manages UI elements and interactions
 */
class UIManager {
  /**
   * Create a new UIManager
   * @param {InvestmentCalculator} calculator - Calculator for investment metrics
   * @param {EventEmitter} eventEmitter - For publishing and subscribing to events
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
   * Initialize UI elements
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
   * Create the input form container
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
   * Find suitable location and insert the inputs container
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
   * Create input fields for property data
   * @param {Property} property - Current property data
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
   * Create a single input field
   * @param {string} id - Field ID
   * @param {string} label - Field label
   * @param {number} value - Field value
   * @returns {HTMLElement} Input field container
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
   * Set up event listeners
   */
  setupEventListeners() {
    // Add click handler for the update button
    if (this.elements.updateButton) {
      this.elements.updateButton.addEventListener('click', this.handleUpdateClick);
    }
  }

  /**
   * Subscribe to events from the event emitter
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
   * Handle click on the update button
   */
  handleUpdateClick() {
    // Get values from input fields
    const price = this.formatter.parseMoneyValue(document.getElementById('propfinder-pro-price').value);
    const repairCost = this.formatter.parseMoneyValue(document.getElementById('propfinder-pro-repairCost').value);
    const monthlyIncome = this.formatter.parseMoneyValue(document.getElementById('propfinder-pro-monthlyIncome').value);
    
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
   * Create and inject the investment analysis results
   * @param {Array<string>} analysisDetails - Analysis results to display
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
   * Create a fact item for displaying in the facts list
   * @param {string} factDetails - Text content of the fact
   * @returns {HTMLElement} The fact item element
   */
  createFactItem(factDetails) {
    // Create container
    const factItem = document.createElement('div');
    factItem.className = 'sc-jNJNQp cjVrGl propfinder-pro-result-item';
    
    // Use Zillow's styling for consistency
    factItem.innerHTML = `
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
    
    return factItem;
  }
}

export default UIManager;