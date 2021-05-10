// find the longest common subsequence

function longestCommonSubsequence(text1, text2) {
    const matrix = [];
    for(let i = 0; i < text1.length + 1; i++) {
        matrix.push([]);
        for(let j = 0; j < text2.length + 1; j++) {
            matrix[i].push(0)
        }
    }
    
    
    for(let i = 0; i <= text1.length; i++) {
        for(let j = 0; j <= text2.length; j++) {
            if(i === 0 || j === 0) continue
            if(text1[i - 1] === text2[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1] + 1
            } else {
                matrix[i][j] = Math.max(matrix[i][j - 1], matrix[i - 1][j])
            }
        }
    }
    
    return matrix[text1.length][text2.length]
}