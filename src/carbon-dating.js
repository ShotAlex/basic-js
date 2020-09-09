const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15; //of 15 dpm/g
const HALF_LIFE_PERIOD = 5730; // The half-life for this reaction is 5700 ± 30 yr.


module.exports = function dateSample(sampleActivity) {
  if ((typeof sampleActivity) !== 'string') return false;
  if (+sampleActivity < 1) return false;
  let answer = Math.round(+sampleActivity)

  let chisl = Math.log(MODERN_ACTIVITY / sampleActivity);
  let znam = HALF_LIFE_PERIOD;

  
  answer = chisl / znam;
  return answer;
};
