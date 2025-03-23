/**
 * @fileoverview Service for managing extension storage.
 */

import InvestmentAssumptions from '../models/investment-assumptions.js';
import Property from '../models/property.js';

/**
 * Service for managing extension storage.
 */
class StorageService {
    /**
   * Create a new StorageService.
   */
  constructor() {
    this.storageApi = chrome.storage.sync;
    }
    /**
   * Save investment assumptions to storage.
   * @param {InvestmentAssumptions} assumptions - The assumptions to save.
   * @return {Promise} Promise resolving when save is complete.
   */
  saveAssumptions(assumptions) {
    return this.storageApi.set(assumptions.toJSON());
    }
    /**
   * Load investment assumptions from storage.
   * @return {Promise<InvestmentAssumptions>} Promise resolving to loaded assumptions.
   */
  async loadAssumptions() {
    try {
      const defaults = InvestmentAssumptions.defaults;
      const data = await this.storageApi.get(defaults);
      return new InvestmentAssumptions(data);
        } catch (error) {
      console.error('Error loading assumptions:', error);
      return new InvestmentAssumptions();
        }
    }
    /**
   * Save property data to storage.
   * @param {Property} property - The property to save.
   * @param {string=} key - Storage key for the property.
   * @return {Promise} Promise resolving when save is complete.
   */
  saveProperty(property, key = 'currentProperty') {
    return this.storageApi.set({
            [key
            ]: property.toJSON()
        });
    }
    /**
   * Load property data from storage.
   * @param {string=} key - Storage key for the property.
   * @return {Promise<?Property>} Promise resolving to loaded property.
   */
  async loadProperty(key = 'currentProperty') {
    try {
      const data = await this.storageApi.get(key);
      if (data[key
            ]) {
        return Property.fromJSON(data[key
                ]);
            }
      return null;
        } catch (error) {
      console.error(`Error loading property with key ${key
            }:`, error);
      return null;
        }
    }
    /**
   * Save data to storage with custom key.
   * @param {string} key - Storage key.
   * @param {*} value - Data to store.
   * @return {Promise} Promise resolving when save is complete.
   */
  save(key, value) {
    return this.storageApi.set({
            [key
            ]: value
        });
    }
    /**
   * Load data from storage with custom key.
   * @param {string} key - Storage key.
   * @param {*=} defaultValue - Default value if key doesn't exist.
   * @return {Promise<*>} Promise resolving to loaded data.
   */
  async load(key, defaultValue = null) {
    try {
      const data = await this.storageApi.get(key);
      return data[key
            ] !== undefined ? data[key
            ] : defaultValue;
        } catch (error) {
      console.error(`Error loading key ${key
            }:`, error);
      return defaultValue;
        }
    }
    /**
   * Remove data from storage.
   * @param {string|Array<string>} keys - Key(s) to remove.
   * @return {Promise} Promise resolving when removal is complete.
   */
  remove(keys) {
    return this.storageApi.remove(keys);
    }
    /**
   * Clear all storage data.
   * @return {Promise} Promise resolving when clear is complete.
   */
  clear() {
    return this.storageApi.clear();
    }
}

export default StorageService;