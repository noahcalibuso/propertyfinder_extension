/**
 * @fileoverview Entry point for the popup UI.
 */

import PopupController from '../controllers/popup-controller.js';

// Initialize popup when DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  const popupController = new PopupController();
  popupController.initialize().catch(error => {
    console.error('Error initializing popup:', error);
  });
});