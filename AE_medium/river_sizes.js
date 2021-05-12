// given a matrix of 0's and 1's, where adjacent 1's indicate a river, return an array with the size of each river


const matrix = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
]

function riverSizes(matrix) {

    // need to loop through whole matrix
    // turn 1's into 0's as you find them, but for each one you have to depth first search on it and all of it's neighbors
    // tracking the size for each additional 1 

    const rivers = [];

    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[row].length; col++) {
            if(matrix[row][col] === 0) continue;
            dfs(row, col, matrix, rivers);
        }
    }

    return rivers
}

function dfs(row, col, matrix, rivers) {

    let riverSize = 0;
    const nodeStack = [[row, col]];
    while(nodeStack.length) {

        const currNode = nodeStack.pop();
        
        row = currNode[0];
        col = currNode[1];
        if(matrix[row][col] === 0) continue;
        matrix[row][col] = 0;
        riverSize++

        const newNeighbors = getNewNeighbors(matrix, row, col);
        
        for(const neighbor of newNeighbors) {
            nodeStack.push(neighbor);
        }
    }

    rivers.push(riverSize);

}

function getNewNeighbors(matrix, row, col) {
    const newNeighbors = [];
    if(row > 0 && matrix[row - 1][col] !== 0) newNeighbors.push([row - 1, col]) // UP
    if(row < matrix.length - 1 && matrix[row + 1][col] !== 0) newNeighbors.push([row + 1, col]) // DOWN
    if(col > 0 && matrix[row][col - 1] !== 0) newNeighbors.push([row, col - 1]) // LEFT
    if(col < matrix[row].length - 1 && matrix[row][col + 1] !== 0) newNeighbors.push([row, col + 1]);
    

    return newNeighbors

}

console.log(riverSizes(matrix))