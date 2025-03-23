/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!**************************************!*\
  !*** ./src/background/background.js ***!
  \**************************************/
/**
 * @fileoverview Background Service Worker for PropFinder Pro.
 * Handles initialization and installation operations for the extension.
 */



/**
 * Default investment assumptions for fresh installation.
 * @const {Object}
 */
var DEFAULT_SETTINGS = {
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
chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason === 'install') {
    // Store default settings
    chrome.storage.sync.set(DEFAULT_SETTINGS).then(function () {
      console.log('PropFinder Pro: Default settings initialized');
    })["catch"](function (error) {
      console.error('PropFinder Pro: Error initializing settings', error);
    });
  }
});

// Listen for messages from content scripts or popup
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // For future functionality such as:
  // - Analytics
  // - Synchronization with a backend service
  // - Additional data processing

  // Always return true for asynchronous response support
  return true;
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsZ0JBQWdCLEdBQUc7RUFDdkI7RUFDQUMsWUFBWSxFQUFFLEdBQUc7RUFDakJDLFFBQVEsRUFBRSxFQUFFO0VBQ1pDLFdBQVcsRUFBRSxFQUFFO0VBQ2ZDLFlBQVksRUFBRSxDQUFDO0VBRWY7RUFDQUMsZUFBZSxFQUFFLEdBQUc7RUFDcEJDLGFBQWEsRUFBRSxHQUFHO0VBQ2xCQyxlQUFlLEVBQUUsQ0FBQztFQUNsQkMsc0JBQXNCLEVBQUUsRUFBRTtFQUMxQkMsV0FBVyxFQUFFO0FBQ2YsQ0FBQzs7QUFFRDtBQUNBQyxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsV0FBVyxDQUFDQyxXQUFXLENBQUMsVUFBQ0MsT0FBTyxFQUFLO0VBQ2xELElBQUlBLE9BQU8sQ0FBQ0MsTUFBTSxLQUFLLFNBQVMsRUFBRTtJQUNoQztJQUNBTCxNQUFNLENBQUNNLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUNsQixnQkFBZ0IsQ0FBQyxDQUN0Q21CLElBQUksQ0FBQyxZQUFNO01BQ1ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDhDQUE4QyxDQUFDO0lBQzdELENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQ0MsS0FBSyxFQUFLO01BQ2hCRixPQUFPLENBQUNFLEtBQUssQ0FBQyw2Q0FBNkMsRUFBRUEsS0FBSyxDQUFDO0lBQ3JFLENBQUMsQ0FBQztFQUNOO0FBQ0YsQ0FBQyxDQUFDOztBQUVGO0FBQ0FaLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDWSxTQUFTLENBQUNWLFdBQVcsQ0FBQyxVQUFDVyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsWUFBWSxFQUFLO0VBQ3RFO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0EsT0FBTyxJQUFJO0FBQ2IsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9wZmluZGVyLXByby8uL3NyYy9iYWNrZ3JvdW5kL2JhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBmaWxlb3ZlcnZpZXcgQmFja2dyb3VuZCBTZXJ2aWNlIFdvcmtlciBmb3IgUHJvcEZpbmRlciBQcm8uXHJcbiAqIEhhbmRsZXMgaW5pdGlhbGl6YXRpb24gYW5kIGluc3RhbGxhdGlvbiBvcGVyYXRpb25zIGZvciB0aGUgZXh0ZW5zaW9uLlxyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKlxyXG4gKiBEZWZhdWx0IGludmVzdG1lbnQgYXNzdW1wdGlvbnMgZm9yIGZyZXNoIGluc3RhbGxhdGlvbi5cclxuICogQGNvbnN0IHtPYmplY3R9XHJcbiAqL1xyXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTID0ge1xyXG4gIC8vIE1vcnRnYWdlIGFzc3VtcHRpb25zXHJcbiAgaW50ZXJlc3RSYXRlOiA3LjUsXHJcbiAgbG9hblRlcm06IDMwLFxyXG4gIGRvd25QYXltZW50OiAyMCxcclxuICBjbG9zaW5nQ29zdHM6IDMsXHJcbiAgXHJcbiAgLy8gT3BlcmF0aW5nIGV4cGVuc2UgYXNzdW1wdGlvbnNcclxuICBwcm9wZXJ0eVRheFJhdGU6IDEuMixcclxuICBpbnN1cmFuY2VSYXRlOiAwLjUsXHJcbiAgbWFpbnRlbmFuY2VSYXRlOiAxLFxyXG4gIHByb3BlcnR5TWFuYWdlbWVudFJhdGU6IDEwLFxyXG4gIHZhY2FuY3lSYXRlOiA1XHJcbn07XHJcblxyXG4vLyBJbml0aWFsaXplIGRlZmF1bHQgc2V0dGluZ3Mgd2hlbiB0aGUgZXh0ZW5zaW9uIGlzIGluc3RhbGxlZFxyXG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcigoZGV0YWlscykgPT4ge1xyXG4gIGlmIChkZXRhaWxzLnJlYXNvbiA9PT0gJ2luc3RhbGwnKSB7XHJcbiAgICAvLyBTdG9yZSBkZWZhdWx0IHNldHRpbmdzXHJcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldChERUZBVUxUX1NFVFRJTkdTKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Byb3BGaW5kZXIgUHJvOiBEZWZhdWx0IHNldHRpbmdzIGluaXRpYWxpemVkJyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdQcm9wRmluZGVyIFBybzogRXJyb3IgaW5pdGlhbGl6aW5nIHNldHRpbmdzJywgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gTGlzdGVuIGZvciBtZXNzYWdlcyBmcm9tIGNvbnRlbnQgc2NyaXB0cyBvciBwb3B1cFxyXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XHJcbiAgLy8gRm9yIGZ1dHVyZSBmdW5jdGlvbmFsaXR5IHN1Y2ggYXM6XHJcbiAgLy8gLSBBbmFseXRpY3NcclxuICAvLyAtIFN5bmNocm9uaXphdGlvbiB3aXRoIGEgYmFja2VuZCBzZXJ2aWNlXHJcbiAgLy8gLSBBZGRpdGlvbmFsIGRhdGEgcHJvY2Vzc2luZ1xyXG4gIFxyXG4gIC8vIEFsd2F5cyByZXR1cm4gdHJ1ZSBmb3IgYXN5bmNocm9ub3VzIHJlc3BvbnNlIHN1cHBvcnRcclxuICByZXR1cm4gdHJ1ZTtcclxufSk7Il0sIm5hbWVzIjpbIkRFRkFVTFRfU0VUVElOR1MiLCJpbnRlcmVzdFJhdGUiLCJsb2FuVGVybSIsImRvd25QYXltZW50IiwiY2xvc2luZ0Nvc3RzIiwicHJvcGVydHlUYXhSYXRlIiwiaW5zdXJhbmNlUmF0ZSIsIm1haW50ZW5hbmNlUmF0ZSIsInByb3BlcnR5TWFuYWdlbWVudFJhdGUiLCJ2YWNhbmN5UmF0ZSIsImNocm9tZSIsInJ1bnRpbWUiLCJvbkluc3RhbGxlZCIsImFkZExpc3RlbmVyIiwiZGV0YWlscyIsInJlYXNvbiIsInN0b3JhZ2UiLCJzeW5jIiwic2V0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm9uTWVzc2FnZSIsIm1lc3NhZ2UiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiXSwic291cmNlUm9vdCI6IiJ9