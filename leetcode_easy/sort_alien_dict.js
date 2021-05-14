// given array words and string order (an alien alphabet) return true only if the words are sorted in accordance
// with the alien alphabet

function alienSort(words, order) {

    // create a hashmap so you can reference the new alphabet order in constant time
    const alienDict = {};
    for(let i = 0; i < order.length; i++) {
        alienDict[order[i]] = i;
    }

    // now go through every word and check that it is sorted relative to the word one to it's right
    // if the words are otherwise equal but one is longer, the longer word should be second

    // if the letters dont match, then check the letter against the aliendict
    for(let i = 0; i < words.length - 1; i++) {
        for(let j = 0; j < words[i].length; j++ ) {

            if(j >= words[i + 1].length) return false

            if(words[i][j] !== words[i+1][j]) {
                if(alienDict[words[i][j]] > alienDict[words[i+1][j]]) return false

                break
            }
        }
    }
    return true
        
    
}