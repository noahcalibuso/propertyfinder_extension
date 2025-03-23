/**
 * @fileoverview Model representing investment assumption settings.
 */

/**
 * Model representing investment assumption settings.
 */
class InvestmentAssumptions {
  /**
   * Default values for investment assumptions.
   * @return {Object} Default settings.
   */
  static get defaults() {
    return {
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
  }

  /**
   * Create a new InvestmentAssumptions instance.
   * @param {Object=} options - Investment assumption settings.
   */
  constructor(options = {}) {
    const defaults = InvestmentAssumptions.defaults;
    
    // Mortgage assumptions
    this.interestRate = options.interestRate ?? defaults.interestRate;
    this.loanTerm = options.loanTerm ?? defaults.loanTerm;
    this.downPayment = options.downPayment ?? defaults.downPayment;
    this.closingCosts = options.closingCosts ?? defaults.closingCosts;
    
    // Operating expense assumptions
    this.propertyTaxRate = options.propertyTaxRate ?? defaults.propertyTaxRate;
    this.insuranceRate = options.insuranceRate ?? defaults.insuranceRate;
    this.maintenanceRate = options.maintenanceRate ?? defaults.maintenanceRate;
    this.propertyManagementRate = 
        options.propertyManagementRate ?? defaults.propertyManagementRate;
    this.vacancyRate = options.vacancyRate ?? defaults.vacancyRate;
    
    // Validate all values
    this.validate();
  }

  /**
   * Validate all assumption values and set to defaults if invalid.
   */
  validate() {
    const defaults = InvestmentAssumptions.defaults;
    
    // Helper function to validate numeric values
    const validateNumber = (value, defaultValue, min = 0, max = Number.MAX_VALUE) => {
      const num = parseFloat(value);
      return !isNaN(num) && num >= min && num <= max ? num : defaultValue;
    };
    
    // Validate all properties
    this.interestRate = validateNumber(this.interestRate, defaults.interestRate, 0, 30);
    this.loanTerm = validateNumber(this.loanTerm, defaults.loanTerm, 1, 50);
    this.downPayment = validateNumber(this.downPayment, defaults.downPayment, 0, 100);
    this.closingCosts = validateNumber(this.closingCosts, defaults.closingCosts, 0, 20);
    
    this.propertyTaxRate = 
        validateNumber(this.propertyTaxRate, defaults.propertyTaxRate, 0, 10);
    this.insuranceRate = 
        validateNumber(this.insuranceRate, defaults.insuranceRate, 0, 5);
    this.maintenanceRate = 
        validateNumber(this.maintenanceRate, defaults.maintenanceRate, 0, 15);
    this.propertyManagementRate = 
        validateNumber(this.propertyManagementRate, defaults.propertyManagementRate, 0, 20);
    this.vacancyRate = 
        validateNumber(this.vacancyRate, defaults.vacancyRate, 0, 50);
  }

  /**
   * Update assumptions with new values.
   * @param {Object} options - New assumption values.
   */
  update(options) {
    if (options.interestRate !== undefined) this.interestRate = options.interestRate;
    if (options.loanTerm !== undefined) this.loanTerm = options.loanTerm;
    if (options.downPayment !== undefined) this.downPayment = options.downPayment;
    if (options.closingCosts !== undefined) this.closingCosts = options.closingCosts;
    
    if (options.propertyTaxRate !== undefined) this.propertyTaxRate = options.propertyTaxRate;
    if (options.insuranceRate !== undefined) this.insuranceRate = options.insuranceRate;
    if (options.maintenanceRate !== undefined) this.maintenanceRate = options.maintenanceRate;
    if (options.propertyManagementRate !== undefined) {
      this.propertyManagementRate = options.propertyManagementRate;
    }
    if (options.vacancyRate !== undefined) this.vacancyRate = options.vacancyRate;
    
    // Validate after updating
    this.validate();
  }

  /**
   * Convert to JSON object.
   * @return {Object} JSON representation.
   */
  toJSON() {
    return {
      interestRate: this.interestRate,
      loanTerm: this.loanTerm,
      downPayment: this.downPayment,
      closingCosts: this.closingCosts,
      
      propertyTaxRate: this.propertyTaxRate,
      insuranceRate: this.insuranceRate,
      maintenanceRate: this.maintenanceRate,
      propertyManagementRate: this.propertyManagementRate,
      vacancyRate: this.vacancyRate
    };
  }

  /**
   * Create InvestmentAssumptions from JSON.
   * @param {Object} json - JSON data.
   * @return {InvestmentAssumptions} New InvestmentAssumptions instance.
   */
  static fromJSON(json) {
    return new InvestmentAssumptions(json);
  }
}

export default InvestmentAssumptions;