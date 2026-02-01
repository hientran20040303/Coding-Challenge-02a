// Initialize variables
let productName = "Artbook";
let costPerUnit = 15;
let basePrice = 50;
let discountRate = 0.23;
let salesTaxRate = 0.075;
let fixedMonthlyCosts = 800;

// Calculate pricing and profit metrics
let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;

// Print to console
console.log(" - Financial Report - ");
console.log(`Product name: ${productName}`);
console.log(`Discounted price (before tax): $${discountedPrice.toFixed(2)}`);
console.log(`Final price: $${finalPriceWithTax.toFixed(2)}`);
console.log(`Profit per unit: $${profitPerUnit.toFixed(2)}`);
console.log(`Break even units: ${breakEvenUnits}`);
console.log(`Is it profitable? ${isProfitablePerUnit}`);