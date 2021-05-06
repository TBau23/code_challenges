// given a target amount and an array of integers representing different coin denominations, return the minimum number of
// coins that can be used to hit that amount

function minNumberOfCoinsForChange(target, denoms) {

    const changeMade = new Array(target +  1).fill(Infinity);
    changeMade[0] = 0;

    for(let i = 0; i < denoms.length; i++) {
        for(let j = denoms[i]; j < changeMade.length; j++) {
            
            changeMade[j] = Math.min(changeMade[j], changeMade[j - denoms[i]] + 1 );
        }
    }
    console.log(changeMade)
    return changeMade[changeMade.length - 1] !== Infinity ? changeMade[changeMade.length - 1] : -1
}

console.log(minNumberOfCoinsForChange(11, [1,2,5]))
