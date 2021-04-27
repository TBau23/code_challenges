// Given a signed 32-bit integer x, return x with its digits reversed. 
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.


function reverseInt(x) {
    let xList = x.toString().split('');
    let result

    if(xList[0] === '-') {
        
        let negNum = parseInt(xList.slice(1).reverse().join('')) * -1;
        
        result = negNum
    } else {
        result = parseInt(xList.reverse().join(''));
    }
    
    if (Math.abs(result) > 2147483648){
        return 0;
    }
    return result
}


console.log(reverseInt(-143))

console.log(reverseInt(2000))
console.log(reverseInt(202))