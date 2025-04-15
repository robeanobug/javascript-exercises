const add = function(a, b) {
	return (a + b)
};

const subtract = function(a, b) {
	return (a - b)
};

const sum = function(a) {
	let total = 0;
  for (let i = 0; i < a.length; i++) {
    total += a[i];
  }
  return total;
};

const multiply = function(a) {
  let product = 1;
  for (let i = 0; i < a.length; i ++) {
    product = product * a[i];
  }
  return product;
};

const power = function(a, b) {
	return (a ** b);
};

const factorial = function(a) {
  if (a === 0 || a === 1) {
    return 1;
  }
  return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};