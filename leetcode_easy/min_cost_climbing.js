// given an array of costs, where cost[i] = the cost of the ith step.
// return minimum cost to reach top step
// after you pay the cost of a given step you can move 1 or 2 steps 
// you can start from zeroeth or 1st step 

function min_cost_stairs(costs) {
    const priceSums = new Array(costs.length).fill(0);
    
    priceSums[0] = costs[0];
    priceSums[1] = costs[1];
    
    for(let i = 2; i < priceSums.length; i++) {
        priceSums[i] = costs[i] + Math.min(priceSums[i - 1], priceSums[i - 2]);
    }
    
    
    return Math.min(priceSums[priceSums.length - 1], priceSums[priceSums.length - 2]);
}

console.log(min_cost_stairs([1,100,1,1,1,100,1,1,100,1]))