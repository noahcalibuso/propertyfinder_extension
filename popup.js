// Tab switching functionality
document.addEventListener('DOMContentLoaded', function() {
  // Set up tab switching
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  
  // Load saved options
  restoreOptions();
  
  // Set up event listeners
  document.getElementById('save').addEventListener('click', saveOptions);
});

// Saves options to chrome.storage
function saveOptions() {
  // Get values from form
  const options = {
    // Mortgage assumptions
    interestRate: parseFloat(document.getElementById('interestRate').value),
    loanTerm: parseInt(document.getElementById('loanTerm').value),
    downPayment: parseFloat(document.getElementById('downPayment').value),
    closingCosts: parseFloat(document.getElementById('closingCosts').value),
    
    // Operating expense assumptions
    propertyTaxRate: parseFloat(document.getElementById('propertyTaxRate').value),
    insuranceRate: parseFloat(document.getElementById('insuranceRate').value),
    maintenanceRate: parseFloat(document.getElementById('maintenanceRate').value),
    propertyManagementRate: parseFloat(document.getElementById('propertyManagementRate').value),
    vacancyRate: parseFloat(document.getElementById('vacancyRate').value),
    
  };
  
  // Save options
  chrome.storage.sync.set(options, function() {
    // Update status to let user know options were saved
    const status = document.getElementById('status');
    status.textContent = 'Settings saved!';
    status.className = 'status success';
    status.style.display = 'block';
    
    // Send message to content script to update the analysis
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      const currentTab = tabs[0];
      if (currentTab.url.includes('zillow.com')) {
        chrome.tabs.sendMessage(currentTab.id, {
          action: 'settingsUpdated',
          options: options
        });
      }
    });
    
    setTimeout(function() {
      status.style.display = 'none';
    }, 2000);
  });
}

// Restores options from chrome.storage
function restoreOptions() {
  // Default values
  const defaults = {
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
  
  // Get stored options or use defaults
  chrome.storage.sync.get(defaults, function(items) {
    // Set values in the form
    document.getElementById('interestRate').value = items.interestRate;
    document.getElementById('loanTerm').value = items.loanTerm;
    document.getElementById('downPayment').value = items.downPayment;
    document.getElementById('closingCosts').value = items.closingCosts;
    
    document.getElementById('propertyTaxRate').value = items.propertyTaxRate;
    document.getElementById('insuranceRate').value = items.insuranceRate;
    document.getElementById('maintenanceRate').value = items.maintenanceRate;
    document.getElementById('propertyManagementRate').value = items.propertyManagementRate;
    document.getElementById('vacancyRate').value = items.vacancyRate;
  });
}

