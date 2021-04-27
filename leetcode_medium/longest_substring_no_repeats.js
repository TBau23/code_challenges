// given a string, find the longest substring without repeating characters 

function longestNonRepetitveSubString(s) {
    // naive approach - assume every index might be the start - O(s^2) time and O(h) space where h is the dictionary size
    if(s.length <= 1) return s.length
    
    let longest = 1;
    
    for(let i = 0; i < s.length; i++) {
        let start = i;
        let charMap = {};
        charMap[s[i]] = i;
        for(let j = i + 1; j < s.length; j++) {
            let currChar = s[j];
            if(currChar in charMap) {
                longest = Math.max(longest, s.slice(start, j).length);
                break
            } else if(j === s.length - 1) {
                longest = Math.max(longest, s.slice(start).length);        
            } else {
                charMap[currChar] = j;
            }
        }
        if(longest >= s.slice(start).length) return longest
        
    }
    return longest
}


// so my initial approach will do repeat work 
// it could find a long substring, cut it off and start a new one where it reverifies a bunch of characters that were part
// of the previous longest substring
// here we should use a sliding window technique instead, which will allow us to cut time down to O(n)


function betterApproach(s) {
    let left = 0;
    let right = 0;
    let max = 0;

    let charMap = {};

    while(right < s.length) {
        if(s[right] in charMap && charMap[s[right]] >= left) {
            // problematic repeat, move left side of sliding window past it
            left = charMap[s[right]] + 1;
        }
        charMap[s[right]] = right;
        right++;

        max = Math.max(max, right - left);
    }

    return max
}

console.log(betterApproach("pwwkew"))
console.log(betterApproach('abbdafg'))