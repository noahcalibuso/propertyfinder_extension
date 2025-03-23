# PropFinder Pro

A Chrome extension that analyzes Zillow property listings for real estate investment potential.

## Features

- Automatically extracts property listing price from Zillow
- Pulls Rent Zestimate (if available) for realistic income estimation
- Calculates key investment metrics:
  - Monthly cash flow
  - Cash on cash return
  - Cap rate
  - Net Operating Income (NOI)
  - Gross Rent Multiplier (GRM)
  - Total cash needed for investment
- Customizable investment assumptions
- Real-time updates as you adjust parameters

## Installation

### From Chrome Web Store
(Coming soon)

### Manual Installation
1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top-right corner
4. Click "Load unpacked" and select the extension directory

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
- `manifest.json`: Extension configuration
- `content.js`: Main script that runs on Zillow pages
- `popup.html/js/css`: Settings UI and logic

### Building from Source
1. Make any desired code changes
2. Load the extension in developer mode as described in Installation
3. Test on Zillow.com property listing pages

## License

[LICENSE]

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.