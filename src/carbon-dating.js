const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let answer = parseFloat(sampleActivity);
  if (answer <= 0 || answer > 15) return false;
  if (answer !== answer) return false;
  if ((typeof sampleActivity) !== 'string') return false;

  return Math.ceil((Math.log(MODERN_ACTIVITY / answer)) / (0.693 / HALF_LIFE_PERIOD));

};
