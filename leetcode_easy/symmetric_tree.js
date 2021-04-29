// given a binary tree, verify that it is symmetric around its root

class BT {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;

    }
}

function isSymmetric(root) {
    return mirrorCheck(root, root);
}

function mirrorCheck(t1, t2) {
    if(t1 === null && t2 === null) return true;
    if(t1 === null || t2 === null) return false;

    return t1.val === t2.val && mirrorCheck(t1.right, t2.left) && mirrorCheck(t1.left, t2.right)
}