class BT {
    constructor(val) {
        this.val= val;
        this.left = null;
        this.right = null;

    }
}

// O(n) time || O(h) space - which is O(n) in the worst case, O(logn) if tree is balanced
function pathSum(root, targetSum) {
    // going all the way down the tree you want to decrement the sum by value of curr node and see if you hit zero at 
    // a leaf node - which is the only time this should ever return true
    if(root === null) return false

    targetSum -= root.val;
    if(!root.left && !root.right) {
        return targetSum === 0;
    }

    return pathSum(root.left, targetSum) || pathSum(root.right, pathSum)
}

// iterative solution
function iterPathSum(root, targetSum) {

    if(root === null) return false;

    const stack = [[root, targetSum - root.val]];

    while(stack.length) {
        let current = stack.pop();
        currNode = curr[0];
        currSum = curr[1];
        if(!currNode.left && !currNode.right && currSum === 0) return true;
        if(currNode.left) stack.push([currNode.left, currSum - currNode.left.val]);
        if(currNode.right) stack.push([currNode.right, currSum - currNode.right.val]);
    }

    return false;
}


