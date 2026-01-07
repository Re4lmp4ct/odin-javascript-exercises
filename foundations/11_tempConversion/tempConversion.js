const CELSIUS_TO_FAHRENHEIT_MULTIPLIER = 9.0 / 5.0;
const FAHRENHEIT_TO_CELSIUS_MULTIPLIER = 5.0 / 9.0;
const CONVERSION_CONSTANT = 32.0;

const roundToOneDecimalPlace = function(value) {
  return Math.round(value * 10) / 10;
};

const convertToCelsius = function(fahrenheit) {
  return roundToOneDecimalPlace((fahrenheit - CONVERSION_CONSTANT) * FAHRENHEIT_TO_CELSIUS_MULTIPLIER);
};

const convertToFahrenheit = function(celsius) {
  return roundToOneDecimalPlace(celsius * CELSIUS_TO_FAHRENHEIT_MULTIPLIER + CONVERSION_CONSTANT);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
