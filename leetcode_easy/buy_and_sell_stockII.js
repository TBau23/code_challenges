// given an array of integers, maximize the profit you can make by buying and selling stock on different days
// unlike the first version of this question , you can make multiple transactions
// you cant buy and sell on the same day and you cant buy again before selling.
// whenever you buy, you have to realize profits before you can sell


function maximizeProfitII(prices) {
    // the key is that you just want to sell at any peak (where the numbers on either side are lesser ) or if you're at last index on upslope
    // and you want to buy on any upslope
    let bought = null;
    let maxProfit = 0;

    for(let i = 0; i < prices.length; i++) {
        if(prices[i + 1] > prices[i] && bought == null ) { // upslope
            bought = prices[i];
            continue;
        }
        else if((prices[i] > prices[i+1] || i === prices.length - 1) && bought !== null) {
            maxProfit += prices[i] - bought;
            bought = null;
            continue;
        }
    }
    return maxProfit
}

console.log(maximizeProfitII([7,1,5,3,6,4]))