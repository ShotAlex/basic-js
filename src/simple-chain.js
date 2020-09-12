const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : [],
  
  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(`( ${String(value)} )`);
    return this;
  },

  removeLink(position) {
    if( position < 1 || position > this.chain.length - 1) {
      this.chain = [];
      throw new Error();
    }
    this.chain = this.chain.filter((item, i) => i !== position - 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let answer = this.chain.join('~~');
    this.chain = [];
    return answer;
  }
};

module.exports = chainMaker;
