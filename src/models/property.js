/**
 * @fileoverview Property model representing a real estate property listing.
 */

/**
 * Property model representing a real estate property listing.
 */
class Property {
  /**
   * Create a new Property instance.
   * @param {Object=} data - Property data.
   * @param {number=} data.price - Listing price.
   * @param {number=} data.rentEstimate - Monthly rent estimate.
   * @param {number=} data.repairCost - Estimated repair costs.
   * @param {number=} data.monthlyIncome - Monthly rental income.
   * @param {string=} data.address - Property address.
   * @param {string=} data.url - Property listing URL.
   */
  constructor(data = {}) {
    this.price = data.price || 0;
    this.rentEstimate = data.rentEstimate || 0;
    this.repairCost = data.repairCost || 0;
    this.monthlyIncome = data.monthlyIncome || this.rentEstimate || 0;
    this.address = data.address || '';
    this.url = data.url || '';
  }

  /**
   * Get the adjusted purchase price including repair costs.
   * @return {number} Adjusted price.
   */
  getAdjustedPrice() {
    return this.price + this.repairCost;
  }

  /**
   * Get the annual rental income.
   * @return {number} Annual income.
   */
  getAnnualIncome() {
    return this.monthlyIncome * 12;
  }

  /**
   * Updates property data.
   * @param {Object} data - Updated property data.
   * @param {number=} data.price - Listing price.
   * @param {number=} data.repairCost - Estimated repair costs.
   * @param {number=} data.monthlyIncome - Monthly rental income.
   * @param {number=} data.rentEstimate - Monthly rent estimate.
   * @param {string=} data.address - Property address.
   * @param {string=} data.url - Property listing URL.
   */
  update(data) {
    if (data.price !== undefined) this.price = data.price;
    if (data.repairCost !== undefined) this.repairCost = data.repairCost;
    if (data.monthlyIncome !== undefined) this.monthlyIncome = data.monthlyIncome;
    if (data.rentEstimate !== undefined && !data.monthlyIncome) {
      this.rentEstimate = data.rentEstimate;
      // Only update monthly income with rent estimate if not explicitly set
      if (this.monthlyIncome === 0) {
        this.monthlyIncome = data.rentEstimate;
      }
    }
    if (data.address !== undefined) this.address = data.address;
    if (data.url !== undefined) this.url = data.url;
  }

  /**
   * Converts the property to JSON.
   * @return {Object} JSON representation.
   */
  toJSON() {
    return {
      price: this.price,
      rentEstimate: this.rentEstimate,
      repairCost: this.repairCost,
      monthlyIncome: this.monthlyIncome,
      address: this.address,
      url: this.url
    };
  }

  /**
   * Create a Property from JSON data.
   * @param {Object} json - JSON data.
   * @return {Property} New Property instance.
   */
  static fromJSON(json) {
    return new Property(json);
  }
}

export default Property;