import Property from '../models/Property.js';

/**
 * Service for extracting property data from real estate websites
 */
class PropertyDataExtractor {
  /**
   * Create a new PropertyDataExtractor
   * @param {Object} selectors - DOM selectors for extracting data
   */
  constructor(selectors = {}) {
    // Default selectors for Zillow
    this.selectors = {
      price: 'span[data-testid="price"]',
      rentZestimate: '[data-testid="rental-container"]',
      rentZestimateValue: '[data-testid="rental-value"]',
      rentZestimateText: '.Text-c11n-8-106-0__sc-aiai24-0',
      address: '[data-testid="home-details-chip"]',
      ...selectors
    };
  }

  /**
   * Extract property data from the current page
   * @returns {Property} Extracted property data
   */
  extractProperty() {
    try {
      const price = this.extractPrice();
      const rentEstimate = this.extractRentEstimate();
      const address = this.extractAddress();
      const url = window.location.href;
      
      return new Property({
        price,
        rentEstimate,
        address,
        url
      });
    } catch (error) {
      console.error('Error extracting property data:', error);
      return new Property();
    }
  }

  /**
   * Extract property price
   * @returns {number} The property price
   */
  extractPrice() {
    const priceElement = document.querySelector(this.selectors.price);
    if (!priceElement) return 0;
    
    return this.parseMoneyValue(priceElement.textContent);
  }

  /**
   * Extract rent estimate using multiple strategies
   * @returns {number} The monthly rent estimate
   */
  extractRentEstimate() {
    let rentEstimate = 0;
    
    // Strategy 1: Look for rental container with specific data attribute
    try {
      const rentContainer = document.querySelector(this.selectors.rentZestimate);
      if (rentContainer) {
        const rentValue = rentContainer.querySelector(this.selectors.rentZestimateValue);
        if (rentValue) {
          rentEstimate = this.parseMoneyValue(rentValue.textContent);
          if (rentEstimate > 0) return rentEstimate;
        }
      }
    } catch (e) {
      console.warn('Error in rent estimate extraction strategy 1:', e);
    }
    
    // Strategy 2: Look for "Rent Zestimate" text and adjacent value
    try {
      const rentElements = Array.from(document.querySelectorAll(this.selectors.rentZestimateText));
      
      for (let i = 0; i < rentElements.length; i++) {
        if (rentElements[i].textContent === 'Rent Zestimate®' && i + 1 < rentElements.length) {
          // The next element should contain the rent value
          const rentText = rentElements[i + 1].textContent;
          const rentValue = this.parseMoneyValue(rentText);
          if (rentValue > 0) return rentValue;
        }
      }
    } catch (e) {
      console.warn('Error in rent estimate extraction strategy 2:', e);
    }
    
    // Strategy 3: General regex search for rent pattern in the page
    try {
      const rentPattern = /Rent(?:\s+)?(?:Zestimate|Estimate)(?:®)?(?:\s+)?(?:is)?(?:\s+)?\$([0-9,]+)/i;
      const pageText = document.body.innerText;
      const match = pageText.match(rentPattern);
      
      if (match && match[1]) {
        rentEstimate = this.parseMoneyValue('$' + match[1]);
        if (rentEstimate > 0) return rentEstimate;
      }
    } catch (e) {
      console.warn('Error in rent estimate extraction strategy 3:', e);
    }
    
    return rentEstimate;
  }
  
  /**
   * Extract property address
   * @returns {string} The property address
   */
  extractAddress() {
    try {
      const addressElement = document.querySelector(this.selectors.address);
      return addressElement ? addressElement.textContent.trim() : '';
    } catch (e) {
      console.warn('Error extracting address:', e);
      return '';
    }
  }

  /**
   * Parse a money value from text
   * @param {string} text - Text containing a money value
   * @returns {number} Parsed numeric value
   */
  parseMoneyValue(text) {
    if (!text) return 0;
    
    // Try to extract using regex for money pattern
    const moneyPattern = /\$([0-9,.]+)/;
    const match = text.match(moneyPattern);
    
    if (match && match[1]) {
      // Remove commas and convert to number
      return parseFloat(match[1].replace(/,/g, '')) || 0;
    }
    
    // Fallback: just try to remove $ and commas from the whole string
    return parseFloat(text.replace(/[$,]/g, '')) || 0;
  }
}

export default PropertyDataExtractor;