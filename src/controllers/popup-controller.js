/**
 * @fileoverview Controller for the extension popup.
 */

import InvestmentAssumptions from '../models/investment-assumptions.js';
import StorageService from '../services/storage-service.js';

/**
 * Controller for the extension popup.
 */
class PopupController {
  /**
   * Create a new PopupController.
   */
  constructor() {
    this.storage = new StorageService();
    this.assumptions = null;
    this.statusElement = null;
    this.saveButton = null;
    
    // Bind methods to maintain context
    this.handleSave = this.handleSave.bind(this);
    this.showStatus = this.showStatus.bind(this);
  }

  /**
   * Initialize the popup.
   * @return {Promise<void>}
   */
  async initialize() {
    // Load current assumptions
    this.assumptions = await this.storage.loadAssumptions();
    
    // Set up UI elements
    this.setupUI();
    
    // Populate form with current values
    this.populateForm();
    
    // Set up event listeners
    this.setupEventListeners();
  }

  /**
   * Set up UI element references.
   */
  setupUI() {
    this.saveButton = document.getElementById('save');
    this.statusElement = document.getElementById('status');
  }

  /**
   * Populate form fields with current assumption values.
   */
  populateForm() {
    // Populate mortgage assumption fields
    document.getElementById('interestRate').value = this.assumptions.interestRate;
    document.getElementById('loanTerm').value = this.assumptions.loanTerm;
    document.getElementById('downPayment').value = this.assumptions.downPayment;
    document.getElementById('closingCosts').value = this.assumptions.closingCosts;
    
    // Populate operating expense assumption fields
    document.getElementById('propertyTaxRate').value = this.assumptions.propertyTaxRate;
    document.getElementById('insuranceRate').value = this.assumptions.insuranceRate;
    document.getElementById('maintenanceRate').value = this.assumptions.maintenanceRate;
    document.getElementById('propertyManagementRate').value = 
        this.assumptions.propertyManagementRate;
    document.getElementById('vacancyRate').value = this.assumptions.vacancyRate;
  }

  /**
   * Set up event listeners.
   */
  setupEventListeners() {
    // Add save button click handler
    if (this.saveButton) {
      this.saveButton.addEventListener('click', this.handleSave);
    }

    // Add input validation handlers
    const numberInputs = document.querySelectorAll('input[type="number"]');
    numberInputs.forEach(input => {
      input.addEventListener('input', this.validateNumberInput);
    });
  }

  /**
   * Validate number input to ensure it's within min/max bounds.
   * @param {Event} event - The input event.
   */
  validateNumberInput(event) {
    const input = event.target;
    const value = parseFloat(input.value);
    const min = parseFloat(input.min) || 0;
    const max = parseFloat(input.max) || Infinity;
    
    if (value < min) {
      input.value = min;
    } else if (value > max) {
      input.value = max;
    }
  }

  /**
   * Handle save button click.
   */
  async handleSave() {
    try {
      // Get values from form
      const options = {
        // Mortgage assumptions
        interestRate: parseFloat(document.getElementById('interestRate').value),
        loanTerm: parseInt(document.getElementById('loanTerm').value, 10),
        downPayment: parseFloat(document.getElementById('downPayment').value),
        closingCosts: parseFloat(document.getElementById('closingCosts').value),
        
        // Operating expense assumptions
        propertyTaxRate: parseFloat(document.getElementById('propertyTaxRate').value),
        insuranceRate: parseFloat(document.getElementById('insuranceRate').value),
        maintenanceRate: parseFloat(document.getElementById('maintenanceRate').value),
        propertyManagementRate: 
            parseFloat(document.getElementById('propertyManagementRate').value),
        vacancyRate: parseFloat(document.getElementById('vacancyRate').value),
      };
      
      // Update assumptions with new values
      this.assumptions.update(options);
      
      // Save to storage
      await this.storage.saveAssumptions(this.assumptions);
      
      // Show success message
      this.showStatus('Settings saved!', 'success');
      
      // Notify content script to update analysis
      this.notifyTabsOfUpdate(options);
    } catch (error) {
      console.error('Error saving settings:', error);
      this.showStatus('Error saving settings', 'error');
    }
  }

  /**
   * Show status message to the user.
   * @param {string} message - The message to display.
   * @param {string} type - The type of message ('success' or 'error').
   */
  showStatus(message, type) {
    if (!this.statusElement) return;
    
    this.statusElement.textContent = message;
    this.statusElement.className = 'status ' + type;
    this.statusElement.style.display = 'block';
    
    // Hide the message after a delay
    setTimeout(() => {
      this.statusElement.style.display = 'none';
    }, 2000);
  }

  /**
   * Notify active tabs about settings update.
   * @param {Object} options - The updated settings.
   */
  notifyTabsOfUpdate(options) {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      const currentTab = tabs[0];
      if (currentTab && currentTab.url && currentTab.url.includes('zillow.com')) {
        chrome.tabs.sendMessage(currentTab.id, {
          action: 'settingsUpdated',
          options: options
        });
      }
    });
  }
}

// Initialize popup when DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  const popupController = new PopupController();
  popupController.initialize().catch(error => {
    console.error('Error initializing popup:', error);
  });
});

export default PopupController;