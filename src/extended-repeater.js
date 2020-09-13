const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {
  let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options
  
  let result = ''
  let mixStr = ''

  separator = typeof separator === 'string' ? separator : '+'
  additionSeparator = (typeof additionSeparator === 'string' || typeof addition === 'number') ? String(additionSeparator) : ''
  addition = (typeof addition !== 'undefined' && typeof addition !== null) ? String(addition) : ""
  additionRepeatTimes = typeof additionRepeatTimes === 'number' ? additionRepeatTimes : 1


  for (let i = 0; i < additionRepeatTimes - 1; i++) { 
    mixStr += addition + additionSeparator
  }

  mixStr += addition

  for(let i = 0; i < repeatTimes - 1; i++) {
    result += str + mixStr + separator
  }

  return result += str + mixStr
};

  