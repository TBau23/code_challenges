// function that takes in binary tree and returns list of its branch sums ordered from leftmost to rightmost

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

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