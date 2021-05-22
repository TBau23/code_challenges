// given integer n, return nth number in the fibonacci sequence

// for this question, the first num is 0 and second is 1 


// recursive solution
// O(2^n) time || O(n) space
function getNthFibonacci(n) {
    if(n == 1) return 0
	if(n == 2) return 1
	
	return getNthFib(n - 1) + getNthFib(n - 2)
}

// obvious conclusion from first solution is how much repeat work there is 
// here we use a cache to store the numbers and save a ton of work
// O(n) time || O(n) space

function improvedFib(n, cache = {1:0,2:1}) {

    if(n in cache) return cache[n];

    cache[n] = improvedFib(n - 1, cache) + improvedFib(n - 2, cache)
    return cache[n]
}



// final realization is that for any given function call you only actually need the previous 2 numbers
// this is an iterative solution that has a sort of dp flavor

// O(n) time || O(1) space
function iterativeFib(n) {

    const last2 = [0, 1]
    if(n == 1) return last2[0];
    if(n == 2) return last2[1];
    
    for(let i = 2; i < n; i++) {
        let new1 = last2[0] + last2[1];
        last2[0] = last2[1];
        last2[1] = new1;
    }

    return last2[1];
}