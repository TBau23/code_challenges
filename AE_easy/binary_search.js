// given sorted array and target, return index of target in logn time

function binarySearch(array, target) {
    let left = 0;
	let right = array.length - 1;
	
	while(left <= right) {
		let midPoint = Math.floor((left + right) / 2)
		if(array[midPoint] === target) return midPoint
		
		if(target > array[midPoint]) {
			left = midPoint + 1
		} else {
			right = midPoint - 1
		}
	}
	
	return -1
}