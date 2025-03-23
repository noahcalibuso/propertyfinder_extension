/**
 * @fileoverview Simple build script for development without webpack.
 * This can be used for quick testing before setting up the full webpack build.
 */

const fs = require('fs');
const path = require('path');

// Ensure the dist directory exists
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Create a bundle for content.js that doesn't use ES modules
const contentBundle = `
// PropFinder Pro - Content Script (Bundled)
// This is a temporary bundle for testing - use webpack for production

// Main function that runs when the page loads
function initializeApp() {
  // Check if we're on a Zillow property page
  if (window.location.href.includes('zillow.com/homedetails')) {
    console.log('PropFinder Pro: Property page detected');
    
    // Simple property analysis (as placeholder until full module system is set up)
    setTimeout(() => {
      try {
        // Extract price
        const priceElement = document.querySelector('span[data-testid="price"]');
        const price = priceElement ? parseMoneyValue(priceElement.textContent) : 0;
        
        // Extract rent estimate
        let rentEstimate = 0;
        const rentElements = Array.from(document.querySelectorAll('.Text-c11n-8-106-0__sc-aiai24-0'));
        for (let i = 0; i < rentElements.length; i++) {
          if (rentElements[i].textContent === 'Rent Zestimate®' && i + 1 < rentElements.length) {
            const rentText = rentElements[i + 1].textContent;
            rentEstimate = parseMoneyValue(rentText);
          }
        }
        
        // Simple analysis
        if (price > 0) {
          // Create container
          const container = document.createElement('div');
          container.id = 'propfinder-pro-container';
          container.style.padding = '12px';
          container.style.marginBottom = '12px';
          container.style.backgroundColor = '#f8f9fa';
          container.style.borderRadius = '4px';
          container.style.width = '100%';
          container.style.fontFamily = 'Arial, sans-serif';
          
          // Simple metrics calculation
          const monthlyIncome = rentEstimate || 2000; // Default if no rent estimate
          const capRate = ((monthlyIncome * 12) / price) * 100;
          
          // Add content
          container.innerHTML = \`
            <h3 style="margin: 0 0 10px; font-size: 16px; color: #0066cc;">
              PropFinder Pro Analysis (Development Mode)
            </h3>
            <p>Property Price: \${formatCurrency(price)}</p>
            <p>Estimated Monthly Rent: \${formatCurrency(monthlyIncome)}</p>
            <p>Estimated Cap Rate: \${capRate.toFixed(2)}%</p>
            <p><em>Note: This is a simplified analysis. Complete functionality coming soon.</em></p>
          \`;
          
          // Find a good place to insert on page
          const factsList = document.querySelector('.sc-kImNAt');
          if (factsList) {
            factsList.parentNode.insertBefore(container, factsList);
          } else {
            // Try another location
            const factsContainer = document.querySelector('[data-testid="facts-container"]');
            if (factsContainer) {
              factsContainer.insertBefore(container, factsContainer.firstChild);
            } else {
              // Last resort
              document.body.appendChild(container);
            }
          }
        }
      } catch (error) {
        console.error('PropFinder Pro initialization error:', error);
      }
    }, 1500);
  }
}

// Helper function to parse money values
function parseMoneyValue(text) {
  if (!text) return 0;
  
  const moneyPattern = /\\$([0-9,.]+)/;
  const match = text.match(moneyPattern);
  
  if (match && match[1]) {
    return parseFloat(match[1].replace(/,/g, '')) || 0;
  }
  
  return parseFloat(text.replace(/[$,]/g, '')) || 0;
}

// Helper function to format currency
function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
}

// Run the app when the page is fully loaded
window.addEventListener('load', initializeApp);
`;

// Write the content bundle to the dist directory
fs.writeFileSync(path.join('dist', 'content.js'), contentBundle);

// Copy manifest.json to dist
fs.copyFileSync('manifest.json', path.join('dist', 'manifest.json'));

// Copy images folder if it exists
if (fs.existsSync('images')) {
  if (!fs.existsSync(path.join('dist', 'images'))) {
    fs.mkdirSync(path.join('dist', 'images'));
  }
  
  // Copy all png files
  const imageFiles = fs.readdirSync('images').filter(file => file.endsWith('.png'));
  for (const file of imageFiles) {
    fs.copyFileSync(path.join('images', file), path.join('dist', 'images', file));
  }
}

console.log('Basic build completed. Load the extension from the dist/ directory.');