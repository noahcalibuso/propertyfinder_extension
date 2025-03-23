/**
 * @fileoverview Tests for the Property model.
 */

import Property from '../../src/models/property.js';

describe('Property model', () => {
  let property;
  
  beforeEach(() => {
    // Create a new property instance before each test
    property = new Property({
      price: 300000,
      rentEstimate: 2000,
      repairCost: 5000,
      address: '123 Main St',
      url: 'https://www.zillow.com/homedetails/123-main-st',
    });
  });
  
  test('should create a Property with default values', () => {
    const emptyProperty = new Property();
    expect(emptyProperty.price).toBe(0);
    expect(emptyProperty.rentEstimate).toBe(0);
    expect(emptyProperty.repairCost).toBe(0);
    expect(emptyProperty.monthlyIncome).toBe(0);
    expect(emptyProperty.address).toBe('');
    expect(emptyProperty.url).toBe('');
  });
  
  test('should create a Property with provided values', () => {
    expect(property.price).toBe(300000);
    expect(property.rentEstimate).toBe(2000);
    expect(property.repairCost).toBe(5000);
    expect(property.monthlyIncome).toBe(2000); // Should default to rentEstimate
    expect(property.address).toBe('123 Main St');
    expect(property.url).toBe('https://www.zillow.com/homedetails/123-main-st');
  });
  
  test('getAdjustedPrice() should return price plus repair costs', () => {
    expect(property.getAdjustedPrice()).toBe(305000);
  });
  
  test('getAnnualIncome() should return monthly income multiplied by 12', () => {
    expect(property.getAnnualIncome()).toBe(24000);
  });
  
  test('update() should update the property data', () => {
    property.update({
      price: 310000,
      repairCost: 7000,
      monthlyIncome: 2100,
    });
    
    expect(property.price).toBe(310000);
    expect(property.repairCost).toBe(7000);
    expect(property.monthlyIncome).toBe(2100);
    expect(property.getAdjustedPrice()).toBe(317000);
    expect(property.getAnnualIncome()).toBe(25200);
  });
  
  test('update() should only update specified fields', () => {
    const originalAddress = property.address;
    const originalUrl = property.url;
    
    property.update({
      price: 320000,
    });
    
    expect(property.price).toBe(320000);
    expect(property.address).toBe(originalAddress); // Should remain unchanged
    expect(property.url).toBe(originalUrl); // Should remain unchanged
  });
  
  test('toJSON() should return a JSON representation', () => {
    const json = property.toJSON();
    
    expect(json).toEqual({
      price: 300000,
      rentEstimate: 2000,
      repairCost: 5000,
      monthlyIncome: 2000,
      address: '123 Main St',
      url: 'https://www.zillow.com/homedetails/123-main-st',
    });
  });
  
  test('fromJSON() should create a Property from JSON', () => {
    const json = {
      price: 350000,
      rentEstimate: 2200,
      repairCost: 10000,
      monthlyIncome: 2300,
      address: '456 Oak Ave',
      url: 'https://www.zillow.com/homedetails/456-oak-ave',
    };
    
    const newProperty = Property.fromJSON(json);
    
    expect(newProperty).toBeInstanceOf(Property);
    expect(newProperty.price).toBe(350000);
    expect(newProperty.rentEstimate).toBe(2200);
    expect(newProperty.repairCost).toBe(10000);
    expect(newProperty.monthlyIncome).toBe(2300);
    expect(newProperty.address).toBe('456 Oak Ave');
    expect(newProperty.url).toBe('https://www.zillow.com/homedetails/456-oak-ave');
  });
});