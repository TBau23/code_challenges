// given a bst and a target number, find the target and return the subtree that has the target as a root

class BT {
    constructor(val) {
        this.val= val;
        this.left = null;
        this.right = null;

    }
}

function searchBST(tree, target ) {
    if(tree === null || tree.val === target) {
        return tree;
    }
    if(tree.val > target) {
        return searchBST(tree.left, target)
    } else {
        return searchBST(tree.right, target)
    }
}