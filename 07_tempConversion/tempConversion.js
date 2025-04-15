const convertToCelsius = function(farTemp) {
  let celTemp = ((farTemp - 32) * (5/9));
  celTemp = Math.round(celTemp * 10) / 10;
  return celTemp;
};

const convertToFahrenheit = function(celTemp) {
  let farTemp = (celTemp * (9/5) + 32);
  farTemp = Math.round(farTemp * 10) / 10;
  return farTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
