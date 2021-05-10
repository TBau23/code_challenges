// non empty array of distinct integers and integer representing target sum
// if any numbers from array hit the sum, return them in array

function memoTwoSum(array, targetSum) {

    // O(n) time || O(n) space
    const hash = {};
	for (let i = 0; i < array.length; i++) {
		const testResult = targetSum - array[i];
		if( testResult in hash) {
			return [testResult, array[i]]
		} else {
			hash[array[i]] = true;
		}
	}
	return [];
}


// O(nlogn) time || O(1) space
function logTwoSum(array, targetSum) {
    array.sort((a,b) => a - b)
	
	let left = 0;
	let right = array.length - 1;
	while(left < right) {
		if(array[left] + array[right] === targetSum) return [array[left], array[right]];
		if(array[left] + array[right] > targetSum) {
			right--
			continue
		}
		if(array[left] + array[right] < targetSum) {
			left++
		}
	}
	
	return []
}