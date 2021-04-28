// given an array of integers, return an array where each index stores the product of all of the other numbers excluding
// the index
// [ 1 , 2, 3, 4] => [24, 12, 8, 6]

function prodNoSelf(arr) {
    // this can be done in O(n) time
    // the result index at any given point should contain the product of all of the numbers to the left and all nums to right of that index
    // we can construct two arrays , one for the product of everything to the left of given index and one for everything to right
    const leftProds = new Array(arr.length).fill(0);
    leftProds[0] = 1;
    for(let i = 1; i < leftProds.length; i++) {
        leftProds[i] = leftProds[i - 1] * arr[i - 1];
    }

    const rightProds = new Array(arr.length).fill(0);
    rightProds[rightProds.length - 1] = 1;
    for(let i = rightProds.length - 2; i >= 0; i--) {
        rightProds[i] = rightProds[i + 1] * arr[i + 1];
    }

    for(let i = 0; i < arr.length; i++) {
        arr[i] = leftProds[i] * rightProds[i]
    }

    return arr
}

console.log(prodNoSelf([-1,1,0,-3,3]))
console.log(prodNoSelf([1 ,2,3,4]))