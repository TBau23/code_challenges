// function that takes in binary tree and returns list of its branch sums ordered from leftmost to rightmost

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// O(n) time || O(n) space

// space complexity here is affected by two things - the list of sums and the recursive stack
// recursive stack of balanced BT never exceeds O(logn) 
// number of sums is just number of leaf nodes - this is bounded by O(n) 
// in a balanced tree, leaf nodes is always roughly half of n which just works out to n space
// so you take greater of the 2 

function branchSums(root) {
    const result = [];
    sumsHelper(root, root.value, result)
    return result
}

function sumsHelper(currNode, currSum, result) {
    if(!currNode.left && !currNode.right) {
		result.push(currSum)
		return
	}
	
	if(currNode.left) {
		sumsHelper(currNode.left, currSum + currNode.left.value, result)
	}
	
	if(currNode.right) {
		sumsHelper(currNode.right, currSum + currNode.right.value, result)
	}
}