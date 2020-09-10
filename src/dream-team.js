const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false;
  let answer = [];
  for (let i = 0; i < arr.length; i++) {

    if (typeof arr[i] === "string") {
      answer.push(arr[i].trim().slice(0, 1).toUpperCase());
    }
  }

  return answer.sort().join('');

};
