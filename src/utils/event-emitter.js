/**
 * @fileoverview Basic implementation of an event emitter for pub/sub pattern.
 */

/**
 * Basic implementation of an event emitter for pub/sub pattern.
 */
class EventEmitter {
  /**
   * Create a new EventEmitter.
   */
  constructor() {
    // Initialize event listeners map
    this.events = new Map();
  }

  /**
   * Subscribe to an event.
   * @param {string} event - Event name.
   * @param {Function} listener - Event callback function.
   * @return {Function} Unsubscribe function.
   */
  on(event, listener) {
    // If this event doesn't exist yet, create it with an empty array of listeners
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    
    // Add the listener to the event's array
    this.events.get(event).push(listener);
    
    // Return a function to remove this listener
    return () => this.off(event, listener);
  }

  /**
   * Subscribe to an event once.
   * @param {string} event - Event name.
   * @param {Function} listener - Event callback function.
   * @return {Function} Unsubscribe function.
   */
  once(event, listener) {
    // Create a wrapper function that removes itself after first execution
    const onceWrapper = (...args) => {
      // Remove this wrapper
      this.off(event, onceWrapper);
      // Call original listener
      listener.apply(this, args);
    };
    
    // Store reference to original for removal
    onceWrapper.originalListener = listener;
    
    // Register the wrapped listener
    return this.on(event, onceWrapper);
  }

  /**
   * Unsubscribe from an event.
   * @param {string} event - Event name.
   * @param {Function} listenerToRemove - Listener function to remove.
   * @return {EventEmitter} this, for chaining.
   */
  off(event, listenerToRemove) {
    // If no event exists, return early
    if (!this.events.has(event)) {
      return this;
    }
    
    // Get current listeners
    const listeners = this.events.get(event);
    
    // Filter out the listener to remove
    const filteredListeners = listeners.filter(listener => {
      return listener !== listenerToRemove && 
             listener.originalListener !== listenerToRemove;
    });
    
    // If we have remaining listeners, update the array
    if (filteredListeners.length > 0) {
      this.events.set(event, filteredListeners);
    } else {
      // Otherwise delete the event entirely
      this.events.delete(event);
    }
    
    return this;
  }

  /**
   * Emit an event.
   * @param {string} event - Event name.
   * @param {...*} args - Arguments to pass to listeners.
   * @return {boolean} True if the event had listeners, false otherwise.
   */
  emit(event, ...args) {
    // If no event exists, return false
    if (!this.events.has(event)) {
      return false;
    }
    
    // Get and call all listeners
    const listeners = this.events.get(event);
    listeners.forEach(listener => {
      try {
        listener.apply(this, args);
      } catch (error) {
        console.error(`Error in ${event} event listener:`, error);
      }
    });
    
    return true;
  }

  /**
   * Remove all listeners.
   * @param {string=} event - Optional event name, if not provided all events are cleared.
   * @return {EventEmitter} this, for chaining.
   */
  removeAllListeners(event) {
    if (event) {
      // Remove specific event
      this.events.delete(event);
    } else {
      // Remove all events
      this.events.clear();
    }
    
    return this;
  }

  /**
   * Get all listeners for an event.
   * @param {string} event - Event name.
   * @return {Array<Function>} Array of listeners.
   */
  listeners(event) {
    return this.events.has(event) ? [...this.events.get(event)] : [];
  }

  /**
   * Get listener count for an event.
   * @param {string} event - Event name.
   * @return {number} Number of listeners.
   */
  listenerCount(event) {
    return this.events.has(event) ? this.events.get(event).length : 0;
  }

  /**
   * Get all event names.
   * @return {Array<string>} Array of event names.
   */
  eventNames() {
    return Array.from(this.events.keys());
  }
}

export default EventEmitter;