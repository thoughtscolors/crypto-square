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


// var string = 's#$%^&plunk';
// var cleanString = string.replace(/[^A-Za-z]+/, "");
// console.log(cleanString);

class Crypto {
  constructor(string) {
    // let cleanArray = [];
    // let cleanString = ''
// This creates a rows key and populates the rows with each string line and turns them into numbers with separate indexes in each array.
    this.cleanString = string.replace(/[^A-Za-z][^0-9]/gi, "").toLowerCase();
    this.clength = Math.ceil(Math.sqrt(this.cleanString.length));
    this.rlength = Math.floor(Math.sqrt(this.cleanString.length));
    console.log(typeof this.cleanString);
    console.log(this.rlength);
    var j = 0;
    var r = [];
    for (var i = 0; i < this.cleanString.length; i) {
      console.log(i);

    r.push(this.cleanString.substr(this.i, this.rlength));
    i += this.rlength;
    console.log(r);
  }
}
}


    // for (var i = 0; i < this.cleanString.length; i++) {
    // this.r = this.cleanString.length / i;
    // for (var j = 0; j < this.cleanString.length; j++)
    // this.c = this.cleanString.length / j;
    // if ((this.c >= this.r) &&
    // ((this.c - this.r) <= 1) &&
    // ((this.cleanString.length === (this.c * this.r)) &&
    // (this.c % 1 === 0) &&
    // (this.r % 1 === 0)))
    // console.log((this.c >= this.r));
    // console.log((this.c - this.r) <= 1);
    // console.log((this.cleanString.length === (this.c * this.r)));
    // console.log((this.c % 1 === 0));
    // console.log((this.r % 1 === 0));
    // console.log(this.c, "cccc end of loop at if statement");
    // console.log(this.r, "rrrr end of loop at if statement");

    // .map(function(arr) {
    //   return arr.map(function(e) {
    //     return arr;
    //   });
    // });


// var splunk = new Crypto('S#$%^&plunk');
// console.log(splunk);
var long = new Crypto("If man was meant to stay on the ground, god would have given us roots.");
console.log(long);

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
