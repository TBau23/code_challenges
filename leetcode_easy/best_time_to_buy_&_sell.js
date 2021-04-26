// given array of prices return the maximum profit you can achieve buying on one of the days and selling on another


function maximizeProfit(prices) {
    let min = Infinity;
    let maxProfit = 0;

    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < min) {
            min = prices[i];
        } else if(prices[i] - min > maxProfit) {
            maxProfit = prices[i] - min
        }
    }
    return maxProfit
}


