// given two strings return the minimum number of delete operations required to make them
// the same string

// this is pretty impossible to figure out without knowing how to solve 
// for longest common subsequence


function minDistance(word1, word2) {
    // equation is length of w1 + length of w2 - (2 * length of longest common subsequence)
    // in case of total mismatch, the answer will just be the combined lengths
    // * 2 makes sense since each mismatch requires 2 operations
    
    const matrix = [];
    for(let i = 0; i < word1.length + 1; i++) {
        matrix.push([])
        for(let j = 0; j < word2.length + 1; j++) {
            matrix[i].push(0)
        }
    }
    console.log(matrix)
    
    for(let i = 0; i <= word1.length; i++) {
        for(let j = 0; j <= word2.length; j++) {
            console.log()
            if(i === 0 || j === 0) continue
            if(word1[i - 1] === word2[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1] + 1;
            } else {
                matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1])
            }
        }
    }
    
    
    return word1.length + word2.length - (2 * matrix[word1.length][word2.length])
}