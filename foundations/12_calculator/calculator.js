const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	let result = 0;

  for (var number of array)
  {
    result += number;
  }

  return result;
};

const multiply = function(array) {
  let result = 1;

  for (var number of array)
  {
    result *= number;
  }

  return result;
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
  let result = 1;

  while (a > 0)
  {
    result *= a--;
  }

  return result;
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
