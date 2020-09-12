const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth( arr ) {
    return Array.isArray(arr) 
      ? 1 + Math.max(...arr.map( el => {
        let count = this.calculateDepth(el);
        return !isFinite(count) ? 1 : count;
      })) 
      : 0;
  }

};