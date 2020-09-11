const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  let answer = []
  let checkNum;

  for (let i = 0; i < arr.length; i++) {

    switch (arr[i]) {
      case '--discard-next': 
        checkNum = i + 1;
        i++;
        break;
        
      case '--discard-prev': 
        if (answer.length && checkNum != i-1) answer.pop();
        break;
        
      case '--double-next': 
        if (i < arr.length - 1) answer.push(arr[i + 1]);
        break;
        
      case '--double-prev': 
        if (answer.length && checkNum !== i-1) answer.push(arr[i - 1]);
        break;
        
      default: answer.push(arr[i]);
        break;
    }
  } 

  return answer;
};
