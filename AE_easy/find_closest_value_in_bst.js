// given a Binary Search tree and a target value, return the closest value in the tree to the target

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;

    }
}

// average O(logn) time && O(logn) space solution - worst case for both is O(n) in case of unbalanced binary tree

function findClosestInBst(tree, target) {
    return helper(tree, target, tree.value);
}

function helper(current, target, closest) {
    if(tree === null) {
        return closest
    }
    if(Math.abs(closest - target) > Math.abs(current.value - target)) {
        closest = current.value;
    }
    if(target < current.value) {
        return helper(current.left, target, closest);
    } else if(target > current.value) {
        return helper(current.right, target, closest)
    } else {
        return closest;
    }
}