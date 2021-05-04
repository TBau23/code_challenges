// given list of strings, group the anagrams together in subarrays

function groupAnagrams(strs) {
    const result = [];
    const groups = {};
    
    for(let i = 0; i < strs.length; i++) {
        let sorted = (strs[i].split('').sort().join(''));
        if(!groups[sorted]) {
            groups[sorted] = [strs[i]];
        } else {
            groups[sorted].push(strs[i])
        }
    }
    
    for(const anagrams of Object.values(groups)) {
        result.push(anagrams);
    }
    
    return result
    
}