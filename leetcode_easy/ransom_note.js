// given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine 
// and false otherwise

function ransomNote(ransomNote, magazine) {

    const magCharCount = {};
    const ransomCharCount = {};
    
    for(const char of magazine) {
        if(!magCharCount[char]) {
            magCharCount[char] = 1
        } else {
            magCharCount[char] += 1;
        }
    }
    
    for(const char of ransomNote) {
        if(!ransomCharCount[char]) {
            ransomCharCount[char] = 1
        } else {
            ransomCharCount[char] += 1;
        }
    }
    
    // neither of these hashMaps will ever have more than 26 entries so it is reasonable to say constant space is used
    
    for(const char of Object.keys(ransomCharCount)) {
        
        if(ransomCharCount[char] > magCharCount[char] || !magCharCount[char]) return false
    }
    
    return true
}