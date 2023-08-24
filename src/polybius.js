// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  
  const template = [
    ["a","b","c","d","e"],
    ["f","g","h","(i/j)","k"],
    ["l","m","n","o","p"],
    ["q","r","s","t","u"],
    ["v","w","x","y","z"," "]
  ];

  function polybius(input, encode = true) {
    // your solution code here
    //encoding
    if(encode){
      //individualize characters from input into an array
      let message = input.split("");
      //format the message to lower case and for i/j
      let formattedMsg = message.map((string)=>{
        let toLowerCase = string.toLowerCase();
        //need to combine i & j
        if(toLowerCase === "i" || toLowerCase === "j"){
          return "(i/j)";
        }
        return toLowerCase;
      })
      //number pairs come from template array, indeces = x/y coordinates
      //store pairs in x/y arrays
      let yRow = [];
      //need to search each element of the template array (or "row", which would be the 'y' value) for the input letter
      let xColumn = formattedMsg.map((letter)=>{
        //loop through the template to see if row contains letter
        for (let i = 0; i < template.length; i++){
          //identify the row by index number as y elemnet
          const row = template[i];
          //search for the letter needed
          if(row.find((ltrInRow)=>ltrInRow === letter)) {
            //has access to idx where the condition returns wihin element which is x coordinate
            yRow.push(i + 1);
            //if true will return the index of which row the letter was in + 1 since idx starts at 0 as the y coordinate
            return row.indexOf(letter) +1;
          }
        }
      });
      //need to combine the xy coordinates - can use reduce to change xColumn arr to new arr of pairs (y coord is first value of pair)
      //space added at idx5 of template[4] (x=6,y=5) to return a space
      results = yRow.reduce((acc, yCoord, idx)=>{
        let pair = `${xColumn[idx]}${yCoord}`;
        if(pair === "65"){
          pair = " ";
        }
        acc.push(pair);
        //return acc which becomes codedPairs array
        return acc
      },[]);
    }

    //decoding
    if(!encode){
      //can use replace method to account for spaces
      let formattedInput = input.replace(" ", 65);
      //needs to check if input is all pairs, a string of even length
      if(formattedInput.length % 2 !== 0) return false;
      //match method to create an array of each separate pair
      let coordinates = formattedInput.match(/..?/g);
      results = coordinates.map((xy)=>{
        let rowIndex = xy.split("")[1] - 1;
        let columnIndex = xy.split("")[0] - 1;
        return template[rowIndex][columnIndex]
      })
    }
    return results.join("");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
