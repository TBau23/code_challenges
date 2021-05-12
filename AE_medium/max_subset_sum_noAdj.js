// write a function that takes in an array of positive integers and returns the 
// max sum of non adjacent integers

// e.g.  [75, 105, 120, 75, 90, 135] --> 330 // 75 + 120 + 135
// dynamic programming


function maxSubsetSumNoAdj(array) {

    if(!array.length) return 0;
    if(array.length === 1) return array[0];

    const ways = new Array(array.length).fill(0);
    ways[0] = array[0];
    ways[1] = Math.max(array[0], array[1])

    for(let i = 2; i < array.length; i++) {
        ways[i] = Math.max(array[i] + ways[i - 2], ways[i - 1])
    }

    return ways[ways.length - 1]

}

console.log(maxSubsetSumNoAdj([75, 105, 120, 75, 90, 135]))

