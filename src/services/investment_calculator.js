/**
 * Service for calculating real estate investment metrics
 */
class InvestmentCalculator {
  /**
   * Calculate all investment metrics for a property
   * @param {Property} property - The property to analyze
   * @param {InvestmentAssumptions} assumptions - Investment assumptions
   * @returns {Object} Calculated investment metrics
   */
  calculateMetrics(property, assumptions) {
    // Property data
    const price = property.price;
    const repairCost = property.repairCost;
    const monthlyIncome = property.monthlyIncome;
    const adjustedPrice = property.getAdjustedPrice();
    const annualIncome = property.getAnnualIncome();
    
    // Calculate annual expenses
    const expenses = this.calculateExpenses(property, assumptions);
    const totalAnnualExpenses = expenses.total;
    
    // Calculate NOI and cap rate
    const netOperatingIncome = annualIncome - totalAnnualExpenses;
    const capRate = price > 0 ? (netOperatingIncome / price) * 100 : 0;
    
    // Calculate cash needed
    const downPayment = adjustedPrice * (assumptions.downPayment / 100);
    const closingCosts = price * (assumptions.closingCosts / 100);
    const totalCashNeeded = downPayment + closingCosts + repairCost;
    
    // Calculate mortgage payment
    const loanAmount = price - downPayment;
    const mortgagePayment = this.calculateMortgagePayment(
      loanAmount, 
      assumptions.interestRate, 
      assumptions.loanTerm
    );
    
    // Calculate cash flow
    const annualMortgagePayment = mortgagePayment * 12;
    const annualCashFlow = netOperatingIncome - annualMortgagePayment;
    const monthlyCashFlow = annualCashFlow / 12;
    
    // Calculate returns
    const cashOnCash = totalCashNeeded > 0 ? (annualCashFlow / totalCashNeeded) * 100 : 0;
    const grossRentMultiplier = annualIncome > 0 ? price / annualIncome : 0;
    
    // Return all metrics
    return {
      // Financial metrics
      netOperatingIncome,
      capRate,
      cashOnCash,
      grossRentMultiplier,
      
      // Cash flow metrics
      annualCashFlow,
      monthlyCashFlow,
      
      // Expense breakdown
      expenses,
      totalAnnualExpenses,
      
      // Investment breakdown
      downPayment,
      closingCosts,
      totalCashNeeded,
      
      // Loan metrics
      loanAmount,
      mortgagePayment,
      annualMortgagePayment
    };
  }
  
  /**
   * Calculate property expenses
   * @param {Property} property - The property
   * @param {InvestmentAssumptions} assumptions - Investment assumptions
   * @returns {Object} Expense breakdown
   */
  calculateExpenses(property, assumptions) {
    const price = property.price;
    const annualIncome = property.getAnnualIncome();
    
    // Calculate individual expenses
    const propertyTaxes = price * (assumptions.propertyTaxRate / 100);
    const insurance = price * (assumptions.insuranceRate / 100);
    const maintenance = annualIncome * (assumptions.maintenanceRate / 100);
    const propertyManagement = annualIncome * (assumptions.propertyManagementRate / 100);
    const vacancy = annualIncome * (assumptions.vacancyRate / 100);
    
    // Calculate total expenses
    const total = propertyTaxes + insurance + maintenance + propertyManagement + vacancy;
    
    // Return expense breakdown
    return {
      propertyTaxes,
      insurance,
      maintenance,
      propertyManagement,
      vacancy,
      total
    };
  }
  
  /**
   * Calculate monthly mortgage payment
   * @param {number} loanAmount - Principal loan amount
   * @param {number} interestRate - Annual interest rate (percentage)
   * @param {number} loanTerm - Loan term in years
   * @returns {number} Monthly mortgage payment
   */
  calculateMortgagePayment(loanAmount, interestRate, loanTerm) {
    // Return 0 if any input is invalid
    if (!loanAmount || !interestRate || !loanTerm) return 0;
    
    // Convert annual interest rate to monthly decimal
    const monthlyInterest = (interestRate / 100) / 12;
    
    // Calculate number of payments
    const numPayments = loanTerm * 12;
    
    // Return 0 if monthly interest is 0 to avoid division by zero
    if (monthlyInterest === 0) return loanAmount / numPayments;
    
    // Calculate monthly payment using formula: P = L[c(1 + c)^n]/[(1 + c)^n - 1]
    // where P = payment, L = loan amount, c = monthly interest rate, n = number of payments
    const payment = loanAmount * 
                   (monthlyInterest * Math.pow(1 + monthlyInterest, numPayments)) / 
                   (Math.pow(1 + monthlyInterest, numPayments) - 1);
    
    return payment;
  }
  
  /**
   * Format metrics to display strings
   * @param {Object} metrics - Calculated metrics
   * @returns {Array} Array of formatted analysis strings
   */
  formatResults(metrics) {
    // Currency formatter
    const formatCurrency = (value) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(value);
    };
    
    // Percentage formatter
    const formatPercent = (value) => {
      return value.toFixed(1) + '%';
    };
    
    // Ratio formatter
    const formatRatio = (value) => {
      return value.toFixed(1);
    };
    
    // Format all metrics for display
    return [
      `Cash Needed: ${formatCurrency(metrics.totalCashNeeded)}`,
      `Mortgage Payment: ${formatCurrency(metrics.mortgagePayment)}`,
      `Monthly Cash Flow: ${formatCurrency(metrics.monthlyCashFlow)}`,
      `NOI: ${formatCurrency(metrics.netOperatingIncome)}`,
      `Total Expenses: ${formatCurrency(metrics.totalAnnualExpenses)}/yr`,
      `Annual Cash Flow: ${formatCurrency(metrics.annualCashFlow)}`,
      `GRM: ${formatRatio(metrics.grossRentMultiplier)}`,
      `Cap Rate: ${formatPercent(metrics.capRate)}`,
      `Cash on Cash Return: ${formatPercent(metrics.cashOnCash)}`
    ];
  }
  
  /**
   * Calculate and format investment analysis results
   * @param {Property} property - The property to analyze
   * @param {InvestmentAssumptions} assumptions - Investment assumptions
   * @returns {Array} Formatted investment analysis results
   */
  analyze(property, assumptions) {
    const metrics = this.calculateMetrics(property, assumptions);
    return this.formatResults(metrics);
  }
}

export default InvestmentCalculator;