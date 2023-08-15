// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input="", shift=0, encode = true) {
    // your solution code here
    // need to make msg all lowercase
    let message = input.toLowerCase()
    if(shift === 0 || shift < -25 || shift > 25){
      return false
    }
    //when encoding with shift 3 d = g, -3 d = a
    //when decoding to make a = d need to add 3
    //original shift = -3
    //when decoding shift needs to flip: shift=-shift
    if(encode === false){
      shift = -shift
    }
    //need to give values to letters in alphabet
    //how to handle value increasing or decreasing over/under thresholds
      //modules= "%" if i take the result of shift and modules 26 it will return the remaining value from dividing the number by the number given (26) which is the new index
    console.log(shift);
    let result = "";
    result = message;
    console.log(input)
    console.log(result);
    return result
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
