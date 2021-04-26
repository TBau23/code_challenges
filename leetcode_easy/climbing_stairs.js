// given n stairs, you can take 1 or 2 steps at each spot to reach the top. Return how many ways there are to reach the top exactly

// e.g. n = 3 -> 1 + 1 + 1, 2 + 1, 1 + 2 are the only options, so there are 3 ways
// this is a dynamic programming problem, but also just follows the pattern of fibonacci 

function climbStairs(n, memo = { 0: 1, 1 : 1}) {
    if(!(n in memo)) {
        memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo)
    }
    return memo[n]
}

console.log(climbStairs(4))


function dpStairs(n) {
    if(n <= 1) return 1;
    const ways = new Array(n + 1).fill(0);
    ways[0] = 1;
    ways[1] = 1;
    
    for(let i = 2; i <= n; i++ ) {
        ways[i] = ways[i - 1] + ways[i - 2];
    }

    return ways[n]
    
}


console.log(dpStairs(5))