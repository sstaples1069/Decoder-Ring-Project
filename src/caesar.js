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
    // need to make msg all lowercase
    let message = input.toLowerCase();
    //need to give values to letters in alphabet
    //create array so indexes can be referenced
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphArray = Array.from(alphabet)
    const msgArray = Array.from(message)
    //when encoding with shift 3 d = g, -3 d = a
    //when decoding to make a = d need to add 3
    //original shift = -3
    //when decoding shift needs to flip: shift=-shift
    if(encode === false){
      shift = -shift
    }
    let result = [];
    //need to use index value of the letter in the alphArray that matches the letter from the msgArray
    //if the element in msgArray = " ", need to return " "
    //then add shift to create new index value and return that letter from alphArray

    //for each element in msgArray - find in alphArray and return index
    msgArray.forEach((letter)=>{
      if(letter === " "){
        result.push(" ")
      }
      alphArray.find((ltr)=>{
        if(ltr===letter){
          //here is where i need to add shift logic
          const index = alphArray.indexOf(ltr)
          let newIdx = index + shift
          //how to handle value increasing or decreasing over/under thresholds
            //modules= "%" if i take the result of shift and modules 25 it will return the remaining value from dividing the number by the number given (25) which is the new index
          if(newIdx > 25 ) {
            newIdx = newIdx % 26
          }
          if(newIdx < 0){
            newIdx = -newIdx % 26
          }
          console.log(newIdx)
          result.push(ltr)
        }
      })
    })

    console.log(result);
    finalMsg = result.join("");
    console.log(finalMsg)
    return finalMsg
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
