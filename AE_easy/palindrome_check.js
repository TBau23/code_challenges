// write a function that takes in a non empty string and returns boolean regarding palindromeness

function palindromeCheck(s) {
    if(s.length === 1) return true

    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        if(s[left] !== s[right]) return false

        left++
        right--
    }

    return true
}