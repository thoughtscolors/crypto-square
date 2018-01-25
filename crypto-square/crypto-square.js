// hey its Carl :)

// PSEUDO
// input: string with other symbols possible
// output: square of 8 columns 7 rows encoded
//
// reg ex keep only letters 54 char length string
// string to lower case
//
// loop over 54 characters
// every 8 characters new newlines
// if less than 54 in length, distribute spaces at end of lines evenly to keep block shape
// When looping, use similar function to simpleCipher encode to encode letters

class Crypto {
  constructor(str) {
// This creates a rows key and populates the rows with each string line and turns them into numbers with separate indexes in each array.
    cleanString = str.replace("[^A-Za-z]+", "").split().map(function(arr) {
      return arr.map(function(e) {
        return arr;
      });
    });
  }
}
var squareCrypto = new Crypto('s#$%^&plunk')
console.log(squareCrypto);

    // This makes a columns key and fills it with empty arrays at each index from the length each row
    // this.cols = new Array(this.rows[0].length).fill().map(function() {
    // return [];
  // });
  // This populates the column arrays with the numbers from the rows
    // for (var i = 0; i < this.rows.length; i++) {
      // for (var j = 0; j < this.rows[i].length; j++) {
        // this.cols[j].push(this.rows[i][j]);
      // }
    // }
  // }
// }
//Testing
