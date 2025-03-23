/**
 * @fileoverview Setup file for Jest tests.
 * This creates mock Chrome API objects and other global browser objects.
 */

// Mock Chrome API
global.chrome = {
  storage: {
    sync: {
      get: jest.fn(),
      set: jest.fn().mockImplementation(() => Promise.resolve()),
      remove: jest.fn().mockImplementation(() => Promise.resolve()),
      clear: jest.fn().mockImplementation(() => Promise.resolve()),
    },
    local: {
      get: jest.fn(),
      set: jest.fn().mockImplementation(() => Promise.resolve()),
      remove: jest.fn().mockImplementation(() => Promise.resolve()),
      clear: jest.fn().mockImplementation(() => Promise.resolve()),
    }
  },
  runtime: {
    sendMessage: jest.fn(),
    onMessage: {
      addListener: jest.fn(),
      removeListener: jest.fn()
    },
    getURL: jest.fn().mockImplementation((path) => `chrome-extension://fake-extension-id/${path}`),
    onInstalled: {
      addListener: jest.fn()
    }
  },
  tabs: {
    query: jest.fn(),
    sendMessage: jest.fn()
  }
};

// Helper to reset all mocks between tests
beforeEach(() => {
  jest.clearAllMocks();
  
  // Mock successful storage operations by default
  chrome.storage.sync.get.mockImplementation((keys, callback) => {
    const result = (typeof keys === 'string') 
      ? { [keys]: 'mock-value' } 
      : Object.keys(keys).reduce((acc, key) => {
          acc[key] = keys[key]; // Return default values
          return acc;
        }, {});
    
    if (callback) {
      callback(result);
      return;
    }
    return Promise.resolve(result);
  });
});