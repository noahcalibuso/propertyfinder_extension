/**
 * @fileoverview Main controller for the PropFinder Pro extension.
 */

import EventEmitter from '../utils/event-emitter.js';
import PropertyDataExtractor from '../services/property-data-extractor.js';
import InvestmentCalculator from '../services/investment-calculator.js';
import StorageService from '../services/storage-service.js';
import UIManager from '../ui/ui-manager.js';

/**
 * Main controller for the PropFinder Pro extension.
 */
class AppController {
  /**
   * Create a new AppController.
   */
  constructor() {
    // Initialize event emitter
    this.events = new EventEmitter();
    
    // Initialize services
    this.propertyExtractor = new PropertyDataExtractor();
    this.calculator = new InvestmentCalculator();
    this.storage = new StorageService();
    
    // Initialize UI manager
    this.ui = new UIManager(this.calculator, this.events);
    
    // Current state
    this.currentProperty = null;
    this.assumptions = null;
    
    // Bind methods to maintain context
    this.handlePropertyInput = this.handlePropertyInput.bind(this);
    this.handleSettingsUpdate = this.handleSettingsUpdate.bind(this);
  }

  /**
   * Initialize the app.
   * @return {Promise<void>}
   */
  async initialize() {
    // Load investment assumptions from storage
    this.assumptions = await this.storage.loadAssumptions();
    
    // Extract property data from the page
    this.currentProperty = this.propertyExtractor.extractProperty();
    
    // Set up event listeners
    this.setupEventListeners();
    
    // Initialize UI
    this.ui.initialize();
    
    // Update UI with initial property data
    this.events.emit('propertyUpdated', this.currentProperty);
    
    // Calculate and display initial analysis
    this.updateAnalysis();
  }

  /**
   * Set up event listeners.
   */
  setupEventListeners() {
    // Listen for property input updates from UI
    this.events.on('propertyInputUpdated', this.handlePropertyInput);
    
    // Listen for settings updates from popup
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.action === 'settingsUpdated') {
        this.handleSettingsUpdate(message.options, sendResponse);
        return true; // Keep the message channel open for async response
      }
    });
    
    // Listen for URL changes
    this.observeUrlChanges();
  }

  /**
   * Handle property input updates from UI.
   * @param {Object} propertyData - Updated property data.
   */
  handlePropertyInput(propertyData) {
    // Update the current property
    this.currentProperty.update(propertyData);
    
    // Recalculate and display analysis
    this.updateAnalysis();
    
    // Save updated property to storage
    this.storage.saveProperty(this.currentProperty);
  }

  /**
   * Handle settings updates from popup.
   * @param {Object} options - Updated investment assumptions.
   * @param {Function=} sendResponse - Function to send response to popup.
   */
  handleSettingsUpdate(options, sendResponse) {
    try {
      // Update assumptions
      this.assumptions.update(options);
      
      // Recalculate and display analysis
      this.updateAnalysis();
      
      // Respond that update was successful
      if (sendResponse) {
        sendResponse({ success: true });
      }
    } catch (error) {
      console.error('Error updating settings:', error);
      if (sendResponse) {
        sendResponse({ success: false, error: error.message });
      }
    }
  }

  /**
   * Update the investment analysis.
   */
  updateAnalysis() {
    // Calculate metrics
    const analysisResults = this.calculator.analyze(this.currentProperty, this.assumptions);
    
    // Emit event with analysis results
    this.events.emit('analysisUpdated', analysisResults);
  }

  /**
   * Observe URL changes for single-page app navigation.
   */
  observeUrlChanges() {
    let currentUrl = window.location.href;
    
    // Check for URL changes periodically
    setInterval(() => {
      if (currentUrl !== window.location.href) {
        currentUrl = window.location.href;
        
        // Check if we're on a property details page
        if (this.isPropertyPage(currentUrl) && !this.isPropertyImagePage(currentUrl)) {
          // Wait for page to load
          setTimeout(() => {
            // Extract new property data
            this.currentProperty = this.propertyExtractor.extractProperty();
            
            // Update UI with new property data
            this.events.emit('propertyUpdated', this.currentProperty);
            
            // Recalculate and display analysis
            this.updateAnalysis();
          }, 1500);
        }
      }
    }, 500);
    
    // Also listen for History API changes
    window.addEventListener('popstate', () => {
      // Check if we're on a property details page
      if (this.isPropertyPage(currentUrl) && !this.isPropertyImagePage(currentUrl)) {
        // Wait for page to load
        setTimeout(() => {
          // Extract new property data
          this.currentProperty = this.propertyExtractor.extractProperty();
          
          // Update UI with new property data
          this.events.emit('propertyUpdated', this.currentProperty);
          
          // Recalculate and display analysis
          this.updateAnalysis();
        }, 1500);
      }
    });
  }

  /**
   * Check if the current URL is a property details page.
   * @param {string} url - URL to check.
   * @return {boolean} True if it's a property details page.
   */
  isPropertyPage(url) {
    return url.includes('zillow.com/homedetails');
  }

  /**
   * Check if the current URL is a property details image page.
   * @param {string} url - URL to check.
   * @return {boolean} True if it's a property details image page.
   */
  isPropertyImagePage(url) {
    return url.includes('?mmlb=g,*');
  }
}

export default AppController;