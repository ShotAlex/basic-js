const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(ciphering) {
    if (ciphering === false) this.mode = true
    this.encrypt = this.encrypt.bind(this)
    this.decrypt = this.decrypt.bind(this)
  }

  encrypt = (message, key) => this.cipher(message, key, 'encrypt')
  decrypt = (message, key) => this.cipher(message, key, 'decrypt')


  cipher(message, key, whatMethod) {
    if (message === undefined || key === undefined) throw new Error()
    message = message.toUpperCase()
    key = key.toUpperCase()
    let counter = 0

    const answer = message.split('').map( ( char, idx) => {
      if (char.charCodeAt(0) < 65 || char.charCodeAt(0) > 90) return char.charCodeAt(0)
      if (whatMethod === 'decrypt') return (char.charCodeAt(0) - key.charCodeAt( counter++ % key.length ) + 26) % 26 + 65
      return (char.charCodeAt(0) + key.charCodeAt(counter++ % key.length)) % 26 + 65
    });
    
    if( this.mode) answer.reverse()
    return String.fromCharCode( ...answer )
  }
}

module.exports = VigenereCipheringMachine;
