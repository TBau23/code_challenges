

class BT {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function minDepth(root) {
    if(!root) return 0;
    
    if(!root.left && !root.right) {
        return 1
    }
    
    let minD = Infinity
    
    if(root.left) {
        minD = Math.min(minDepth(root.left), minD)
    }
    
    if(root.right) {
        minD = Math.min(minDepth(root.right), minD)
    }
    
    return minD + 1
}