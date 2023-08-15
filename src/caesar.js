// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input="", shift=0, encode = true) {
    // your solution code here
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
    console.log(shift);
    let result = "";
    result = input;
    console.log(result);
    return result
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
