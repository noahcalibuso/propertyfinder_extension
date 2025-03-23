/**
 * Utility for formatting and parsing values
 */
class FormatterUtil {
  /**
   * Create a new FormatterUtil
   */
  constructor() {
    // Create reusable formatters
    this.currencyFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    
    this.percentFormatter = new Intl.NumberFormat('en-US', {
      style: 'percent',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    });
    
    this.numberFormatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 1
    });
  }

  /**
   * Format a value as currency
   * @param {number} value - Value to format
   * @returns {string} Formatted currency string
   */
  formatCurrency(value) {
    // Handle invalid values
    const numValue = this.ensureNumber(value);
    return this.currencyFormatter.format(numValue);
  }

  /**
   * Format a value as percentage
   * @param {number} value - Value to format (0-100)
   * @returns {string} Formatted percentage string
   */
  formatPercent(value) {
    // Handle invalid values
    const numValue = this.ensureNumber(value);
    
    // Convert from percentage (0-100) to decimal (0-1)
    const decimalValue = numValue / 100;
    
    return this.percentFormatter.format(decimalValue);
  }

  /**
   * Format a value as a decimal number
   * @param {number} value - Value to format
   * @param {number} decimals - Number of decimal places
   * @returns {string} Formatted number string
   */
  formatNumber(value, decimals = 1) {
    // Handle invalid values
    const numValue = this.ensureNumber(value);
    
    if (decimals !== this.numberFormatter.resolvedOptions().maximumFractionDigits) {
      // Create a new formatter with the specified decimals
      const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: decimals
      });
      
      return formatter.format(numValue);
    }
    
    return this.numberFormatter.format(numValue);
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
    const match = String(text).match(moneyPattern);
    
    if (match && match[1]) {
      // Remove commas and convert to number
      return parseFloat(match[1].replace(/,/g, '')) || 0;
    }
    
    // Fallback: just try to remove $ and commas from the whole string
    return parseFloat(String(text).replace(/[$,]/g, '')) || 0;
  }

  /**
   * Ensure value is a valid number
   * @param {*} value - Value to check
   * @returns {number} Valid number or 0
   */
  ensureNumber(value) {
    const num = parseFloat(value);
    return !isNaN(num) ? num : 0;
  }
}

export default FormatterUtil;