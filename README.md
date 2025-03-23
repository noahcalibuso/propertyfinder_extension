# PropFinder Pro

A Chrome extension that analyzes Zillow property listings for real estate investment potential, with an object-oriented architecture for better maintainability and extensibility.

## Features

- Automatically extracts property listing price from Zillow
- Pulls Rent Zestimate (if available) for realistic income estimation
- Calculates key investment metrics with visual icons:
  - Monthly cash flow
  - Cash on cash return
  - Cap rate
  - Net Operating Income (NOI)
  - Gross Rent Multiplier (GRM)
  - Total cash needed for investment
- Customizable investment assumptions
- Real-time updates as you adjust parameters
- Visually integrated with Zillow's interface
- Responsive and intuitive UI

## Installation

### From Chrome Web Store
(Coming soon)

### Manual Installation
1. Clone this repository
2. Install dependencies: `npm install`
3. Build the extension: `npm run build`
4. Open Chrome and navigate to `chrome://extensions/`
5. Enable "Developer mode" in the top-right corner
6. Click "Load unpacked" and select the `dist` directory from the project

## Usage

1. Browse to any property listing on Zillow.com
2. The extension will automatically calculate investment metrics based on the listing price
3. Adjust the inputs for more accurate analysis:
   - Listing price (pre-filled from the page)
   - Repair cost (if needed)
   - Monthly rental income (pre-filled from Rent Zestimate if available)
4. Click "Update Analysis" to see real-time results
5. Click the extension icon to adjust default assumptions:
   - Mortgage terms (interest rate, loan term, down payment)
   - Operating expenses (property tax, insurance, maintenance, etc.)

## Configuration

Click the PropFinder Pro icon in your browser toolbar to access settings:

### Mortgage Assumptions
- Interest Rate: Annual interest rate for mortgage calculations
- Loan Term: Length of mortgage in years
- Down Payment: Percentage of purchase price as down payment
- Closing Costs: Percentage of purchase price for closing costs

### Operating Expense Assumptions
- Property Tax Rate: Annual property tax as percentage of property value
- Insurance Rate: Annual insurance cost as percentage of property value
- Maintenance: Annual maintenance cost as percentage of rental income
- Property Management: Fee as percentage of rental income
- Vacancy Rate: Expected vacancy as percentage of potential annual income

## Development

### Project Structure
```
propfinder-pro/
├── dist/                       # Compiled files (generated by webpack)
├── src/
│   ├── background/
│   │   └── background.js       # Background service worker
│   ├── controllers/
│   │   ├── app-controller.js   # Main application controller
│   │   └── popup-controller.js # Popup UI controller
│   ├── models/
│   │   ├── investment-assumptions.js  # Investment settings model
│   │   └── property.js         # Property data model
│   ├── popup/
│   │   └── popup.js            # Popup entry point
│   ├── services/
│   │   ├── investment-calculator.js   # Investment calculation service
│   │   ├── property-data-extractor.js # Data extraction service
│   │   └── storage-service.js  # Chrome storage service wrapper
│   ├── ui/
│   │   └── ui-manager.js       # UI element manager
│   ├── utils/
│   │   ├── event-emitter.js    # Custom event emitter
│   │   └── formatter-util.js   # Value formatting utilities
│   └── content.js              # Content script entry point
├── tests/
│   ├── models/
│   │   └── property.test.js    # Unit tests for Property model
│   └── setup.js                # Test environment setup
├── babel.config.js             # Babel transpilation config
├── jest.config.js              # Jest testing config
├── manifest.json               # Extension manifest
├── package.json                # npm package file
├── popup.html                  # Popup HTML
├── popup.css                   # Popup styles
└── webpack.config.js           # Webpack configuration
```

### Key Architecture Components
- OOP design with clear separation of concerns
- ES modules for better code organization
- Event-driven communication between components
- Chrome extension APIs wrapped in service classes
- Defensive coding with error handling throughout

### Building and Testing
- `npm run build` - Build the extension
- `npm run build:prod` - Build for production (minified)
- `npm run watch` - Development mode with auto-rebuild
- `npm run test` - Run unit tests

### Adding Support for More Sites
The architecture is designed to be extensible:
1. Create a new data extractor in the `services` directory
2. Update the `AppController` to use the appropriate extractor based on the current site
3. Implement site-specific UI adapters as needed

## License

[MIT License]

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.