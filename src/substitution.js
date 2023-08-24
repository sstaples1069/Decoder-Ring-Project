// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input="", alphabet="", encode = true) {
    //initial validation: "The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false"
    if(!alphabet || alphabet.length !== 26) return false;
    //set the global variables in arrays
    const theAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    //handles capital letters: "Capital letters can be ignored"
    const message = input.toLowerCase().split("");
    const substitutionAlphabet = alphabet.toLowerCase().split("");
    //need to make sure substitution alphabet has 26 unique characters
    const onlyUniqueChars = substitutionAlphabet.filter(
      (item, index, self) => self.indexOf(item) === index
    );
    if (onlyUniqueChars.length !== alphabet.length) return false;
    //create separate encode and decode functions
    const encodeMsg = () => {
      //create array var to store characters
      let result = [];
      //need to either encode a letter or keep a space
      const encode = (char) => {
        const charIndex = theAlphabet.indexOf(char);
        const encodedChar = substitutionAlphabet[charIndex];
        result.push(encodedChar);
      };
      message.forEach((char) => {
        // preserves space or encodes character
        char === " " ? result.push(" ") : encode(char);
      });
      return result.join("");
    };
    const decodeMsg = () => {
      let result = [];
      const decode = (char) => {
        const charIndex = substitutionAlphabet.indexOf(char);
        const decodedChar = theAlphabet[charIndex];
        result.push(decodedChar);
      };
      message.forEach((char) => {
        // preserves space or decodes character
        char === " " ? result.push(" ") : decode(char);
      });
      return result.join("");
    };
    // encode or decode.
    return encode ? encodeMsg() : decodeMsg();
  }
  
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
