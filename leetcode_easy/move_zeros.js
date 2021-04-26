// given an array of integers, move all zeros to end while maintaining the order of the other integers, must do this in place


function moveZeros(arr) {
    let lastNonZeroIdx = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0) {
            arr[lastNonZeroIdx] = arr[i]; // move first non zero number to the front 
            lastNonZeroIdx++; // and then mark the place where you'll either put the next non zero or start filling in zeroes
        }
    }
    for(let i = lastNonZeroIdx; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr
}

console.log(moveZeros([1, 0, 3, 0, 12]))
console.log(moveZeros[0, 0, 1])