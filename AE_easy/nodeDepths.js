// distance betweena  node in a binary tree and the tree's root is called the node's depth
// write a function that takes in a binary tree and returns the sum of its depths

class BT {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


// o(n) time || O(h) space

function nodeDepths(root, depth = 0) {
    if(!root) return 0

    return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
    // note how this return statement is structured
    // when coming up with recursive algos that have single value solution i struggle to structure the returns
    // here you have a top level call that requires gathering info from deeper in tree to return at all

}


