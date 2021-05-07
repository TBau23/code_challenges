//given array of coin denominations & a target sum, return how many ways you can build that sum using an infinite number of the given coins


function waysToMakeChange(target, coins) {

    const changeMade = new Array(target + 1).fill(0);
    changeMade[0] = 1;

    for(let i = 0; i < coins.length; i++) {
        for(let j = coins[i]; j < changeMade.length; j++){
            changeMade[j] += changeMade[j - coins[i]];
        }
    }

    return changeMade[changeMade.length - 1] !== 0 ? changeMade[changeMade.length - 1] : 0

}