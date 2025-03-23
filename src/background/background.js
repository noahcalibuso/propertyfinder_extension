/**
 * @fileoverview Background Service Worker for PropFinder Pro.
 * Handles initialization and installation operations for the extension.
 */

'use strict';

/**
 * Default investment assumptions for fresh installation.
 * @const {Object}
 */
const DEFAULT_SETTINGS = {
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

// Initialize default settings when the extension is installed
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    // Store default settings
    chrome.storage.sync.set(DEFAULT_SETTINGS)
      .then(() => {
        console.log('PropFinder Pro: Default settings initialized');
      })
      .catch((error) => {
        console.error('PropFinder Pro: Error initializing settings', error);
      });
  }
});

// Listen for messages from content scripts or popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // For future functionality such as:
  // - Analytics
  // - Synchronization with a backend service
  // - Additional data processing
  
  // Always return true for asynchronous response support
  return true;
});