const transpose = function (matrix) {
    // Replace this code with your solution
    let transposedMatrix = []; 
    const numRows = matrix.length;
    const numCols = matrix[0].length; //Assumes equal length for all rows
  
    //rows x col becomes col x rows in transposed matrix
    //on first pass col is fixed at zero and iterates through rows until end.
    //take matrix row col for transposed col row
    for (let col = 0; col < numCols; col++) {
      transposedMatrix[col] = [];
      for (let row = 0; row < numRows; row++) {
        transposedMatrix[col][row] = matrix[row][col];
      }
    }
    return transposedMatrix;
  }

const makeWord = function(array) {
    return array.map(line => line.join(""));
};

const reversed = function(array) { //doesnt work
    array.forEach(element => {
        element.reverse();
    });
    return array;
};

const wordSearch = (letters, word) => { 
    const horizontalJoin = makeWord(letters);
    const verticalJoin = makeWord(transpose(letters));

    //console.log('rev', reversed(letters));

    //const horizontalJoinReversed = makeWord(reversed(letters));
    //const verticalJoinReversed = makeWord(transpose(reversed(letters)));

    //console.log("horizrev", horizontalJoinReversed);
    //console.log('vert rev', verticalJoinReversed);

    const combinedArrays = horizontalJoin.concat(verticalJoin);//.concat(horizontalJoinReversed).concat(verticalJoinReversed);
    //console.log(combinedArrays);

    for (const line of combinedArrays) {
        if (line.includes(word)) {
            return true;
        }
    }
    return false;
};



module.exports = wordSearch

