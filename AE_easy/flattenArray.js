// given an array that is nested, flatten it to be one dimensional


function flattenArray(input) {
    const result = [];
    return flattener(input, result);
}

function flattener(array, result) {

    for(const item of array) {
        if(Array.isArray(item)) {
            flattener(item, result)
        } else {
            result.push(item)
        }
    }
    return result

}

console.log(flattenArray([1,[3,4],5,[6,[7]], 8, [[[[9]]]]]))