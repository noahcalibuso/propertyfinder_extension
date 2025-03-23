/**
 * PropFinder Pro - Content Script
 * 
 * Main entry point for the Zillow property analysis extension
 */

import AppController from './controllers/AppController.js';

/**
 * Initialize the application when the page is loaded
 */
function initializeApp() {
  // Check if we're on a Zillow property page
  if (window.location.href.includes('zillow.com/homedetails')) {
    // Create and initialize the app controller
    const app = new AppController();
    
    // Give the page time to fully load
    setTimeout(() => {
      app.initialize();
    }, 1500);
  }
}

// Run the app when the page is fully loaded
window.addEventListener('load', initializeApp);