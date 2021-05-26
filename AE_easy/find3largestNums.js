// write a function that takes in an array
// and without sorting the input, returns an array of the three largest integers

function find3large(array) {
    const result = [];
	
	while(result.length < 3) {
		let largest = -Infinity
		let largestIdx = null
		for(let i = 0; i < array.length; i++) {
			
			if(array[i] > largest) {
				largest = array[i]
				largestIdx = i
				
			} 
		}
		
		result.unshift(largest);
		array[largestIdx] = -Infinity
	}
	
	return result
}