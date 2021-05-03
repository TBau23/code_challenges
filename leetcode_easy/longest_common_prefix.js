// given an array of strings, find the longest common prefix that they all share


// O()
function longestCommonPrefix(strs) {

    strs.sort((a,b) => a.length - b.length);
    const result = [];
    let match = true;
    for(let i = 0; i < strs[0].length; i++) {
        let currLetter = strs[0][i];
        for(let j = 1; j < strs.length; j++) {
            if(strs[j][i] === currLetter) continue;
            match = false
        }
        if(match === true) {
            result.push(currLetter);
            continue;
        }
        
        break
        
    }
    
    return result.join('')
}