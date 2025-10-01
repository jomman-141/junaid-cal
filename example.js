/**
 * Example usage of the calculator module
 */

const calculator = require('./calculator');

console.log('Calculator Examples:\n');

// Addition examples
console.log('Addition:');
console.log(`5 + 3 = ${calculator.add(5, 3)}`);
console.log(`10 + 20 = ${calculator.add(10, 20)}`);

// Subtraction examples
console.log('\nSubtraction:');
console.log(`10 - 4 = ${calculator.subtract(10, 4)}`);
console.log(`5 - 8 = ${calculator.subtract(5, 8)}`);

// Multiplication examples
console.log('\nMultiplication:');
console.log(`3 × 7 = ${calculator.multiply(3, 7)}`);
console.log(`6 × 9 = ${calculator.multiply(6, 9)}`);

// Division examples
console.log('\nDivision:');
console.log(`20 ÷ 4 = ${calculator.divide(20, 4)}`);
console.log(`15 ÷ 3 = ${calculator.divide(15, 3)}`);
console.log(`7 ÷ 2 = ${calculator.divide(7, 2)}`);

// Error handling example
console.log('\nError Handling:');
try {
  calculator.divide(10, 0);
} catch (error) {
  console.log(`Attempting to divide by zero: ${error.message}`);
}
