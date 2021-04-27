// given a string return the index of the first unique character
// if no unique characters exists, return - 1;

// so right off the bat you know it can be O(n) at best, because the only way to know if a char is unique is to go through whole thing


function firstUniqueChar(s) {

    const charMap = {};

    for(let i = 0; i < s.length; i++) {
        if(s[i] in charMap) {
            charMap[s[i]] += 1
        } else {
            charMap[s[i]] = 1;
        }
    }

    let result = -1
    for(let i = 0; i < s.length; i++) {
        if(charMap[s[i]] === 1) {
            result = i;
            break;
        }
    }
    return result
}

console.log(firstUniqueChar("loveleetcode"))
console.log(firstUniqueChar("aabb"))