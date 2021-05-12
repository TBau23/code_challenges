// given two arrays, determine if the second is a subsequence of the first

function isValidSubsequence(array, sequence) {
    // Write your code here.
      let arrPt = 0;
      let seqPt = 0;
      let count = 0;
      
      while(arrPt < array.length) {
          if(array[arrPt] === sequence[seqPt]) {
              seqPt++
              count++
          }
          arrPt++
      }
      return count === sequence.length
      
  }
  
