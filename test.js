/**
 * Simple test suite for calculator functions
 */

const calculator = require('./calculator');

let testsPassed = 0;
let testsFailed = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`✓ ${testName}`);
    testsPassed++;
  } else {
    console.log(`✗ ${testName}`);
    testsFailed++;
  }
}

function assertThrows(fn, testName) {
  try {
    fn();
    console.log(`✗ ${testName} (expected error but none was thrown)`);
    testsFailed++;
  } catch (error) {
    console.log(`✓ ${testName}`);
    testsPassed++;
  }
}

console.log('Running calculator tests...\n');

// Test addition
assert(calculator.add(2, 3) === 5, 'add(2, 3) should return 5');
assert(calculator.add(-1, 1) === 0, 'add(-1, 1) should return 0');
assert(calculator.add(0, 0) === 0, 'add(0, 0) should return 0');
assert(calculator.add(10.5, 5.5) === 16, 'add(10.5, 5.5) should return 16');

// Test subtraction
assert(calculator.subtract(5, 3) === 2, 'subtract(5, 3) should return 2');
assert(calculator.subtract(0, 5) === -5, 'subtract(0, 5) should return -5');
assert(calculator.subtract(10, 10) === 0, 'subtract(10, 10) should return 0');
assert(calculator.subtract(7.5, 2.5) === 5, 'subtract(7.5, 2.5) should return 5');

// Test multiplication
assert(calculator.multiply(3, 4) === 12, 'multiply(3, 4) should return 12');
assert(calculator.multiply(-2, 5) === -10, 'multiply(-2, 5) should return -10');
assert(calculator.multiply(0, 100) === 0, 'multiply(0, 100) should return 0');
assert(calculator.multiply(2.5, 4) === 10, 'multiply(2.5, 4) should return 10');

// Test division
assert(calculator.divide(10, 2) === 5, 'divide(10, 2) should return 5');
assert(calculator.divide(9, 3) === 3, 'divide(9, 3) should return 3');
assert(calculator.divide(5, 2) === 2.5, 'divide(5, 2) should return 2.5');
assert(calculator.divide(-10, 5) === -2, 'divide(-10, 5) should return -2');

// Test division by zero
assertThrows(() => calculator.divide(5, 0), 'divide(5, 0) should throw an error');

// Print summary
console.log(`\n${testsPassed} tests passed, ${testsFailed} tests failed`);

if (testsFailed > 0) {
  process.exit(1);
}
