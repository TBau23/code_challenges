class BT {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;

    }
}

function mergeBT(root1, root2) {
    if(root1 === null) return root2;
    if(root2 === null) return root1;

    root1.val += root2.val;
    root1.left = mergeBT(root1.left, root2.left)
    root1.right = mergeBT(root1.right, root2.right)

    return root1
}