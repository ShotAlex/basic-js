const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  if (arr.length < 1) console.log("arr 0: ", 0)
  let answer = 0;
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == "^^" ) ++answer;

    }
  }
  return answer;
};
