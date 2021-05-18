// return true if tree is height balanced
// binary tree in which the left and right subtrees of every node differ in height by no more than 1.

class BT {
    constructor(val) {
        this.val = val;
        this.left = undefined;
        this.right = undefined;
    }
}

function balancedBT(root) {
    if(!root) return 0

    let left = balancedBT(root.left)
    let right = balancedBT(root.right);

    return Math.abs(left - right) <= 1
}