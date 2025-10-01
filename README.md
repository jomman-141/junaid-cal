# junaid-cal

A simple calculator library with all basic arithmetic functions.

## Features

- Addition
- Subtraction
- Multiplication
- Division (with zero-division protection)

## Usage

```javascript
const calculator = require('./calculator');

// Addition
console.log(calculator.add(5, 3));        // 8

// Subtraction
console.log(calculator.subtract(10, 4));  // 6

// Multiplication
console.log(calculator.multiply(3, 7));   // 21

// Division
console.log(calculator.divide(20, 4));    // 5
```

## Testing

Run the test suite:

```bash
npm test
```

## API

### `add(a, b)`
Returns the sum of two numbers.

### `subtract(a, b)`
Returns the difference of two numbers.

### `multiply(a, b)`
Returns the product of two numbers.

### `divide(a, b)`
Returns the quotient of two numbers. Throws an error if dividing by zero.
