// given an array [5, 2, [7, -1], 3, [6, [-13, 8], 4]] --> 12
// multiply all numbers in array by their depth, otherwise add them


function productSum(array, depth = 1) {
    let sum = 0;
    for(const item of array) {
        if(Array.isArray(item)) {
            sum += productSum(item, depth + 1)
        } else {
            sum += item
        }
    }
    return sum * depth
}



function redo(array, depth = 1) {

    let sum = 0;

    for(let num of array) {
        if(Array.isArray(num)) {
            redo(num, depth + 1)
        } else {
            sum += num
        }
    }

    return sum * depth
}