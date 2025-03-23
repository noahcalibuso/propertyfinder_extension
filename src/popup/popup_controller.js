import InvestmentAssumptions from '../models/InvestmentAssumptions.js';
import StorageService from '../services/StorageService.js';

/**
 * Controller for the extension popup
 */
class PopupController {
  /**
   * Create a new PopupController
   */
  constructor() {
    this.storage = new StorageService();
    this.assumptions = null;
    this.statusElement = null;
    this.saveButton = null;
    
    // Bind methods to maintain context
    this.handleSave = this.handleSave.bind(this);
  }

  /**
   * Initialize the popup
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
   * Set up UI element references
   */
  setupUI() {
    this.saveButton = document.getElementById('save');
    this.statusElement = document.getElementById('status');
  }

  /**
   * Populate form fields with current assumption values
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
    document.getElementById('propertyManagementRate').value = this.assumptions.propertyManagementRate;
    document.getElementById('vacancyRate').value = this.assumptions.vacancyRate;
  }

  /**
   * Set up event listeners
   */
  setupEventListeners() {
    // Add save button click handler
    if (this.saveButton) {
      this.saveButton.addEventListener('click', this.handleSave);
    }
  }

  /**
   * Handle save button click
   */
  async handleSave() {
    try {
      // Get values from form
      const options = {