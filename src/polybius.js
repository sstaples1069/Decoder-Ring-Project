// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const template = [
    ["a","b","c","d","e"],
    ["f","g","h","i/j","k"],
    ["l","m","n","o","p"],
    ["q","r","s","t","u"],
    ["v","w","x","y","z"," "]
  ];

  function polybius(input, encode = true) {
    // your solution code here
    //encoding
    if(encode){

    }
    //decoding
    if(!encode){

    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
