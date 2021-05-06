


function iterPathSumII(root, targetSum) {
    if(root === null) return false;
    
    const result = [];
    const stack = [[root, targetSum - root.val, [root.val]]];
    
    while(stack.length) {
        let curr = stack.pop();
        currNode = curr[0];
        currSum = curr[1];
        path = curr[2];
        if(!currNode.left && !currNode.right && currSum === 0) {
            result.push(path);
        }
        if(currNode.left) stack.push([currNode.left, currSum - currNode.left.val, [...path, currNode.left.val]]);
        if(currNode.right) stack.push([currNode.right, currSum - currNode.right.val, [...path, currNode.right.val]]);
    }
    
    return result
}


function pathSummII(root, targetSum) {
    const result = [];
    if(root === null) return result
    pathSumHelper(root, targetSum, [root.val], result)
    return result
}

function pathSumHelper(root, targetSum, path, result) {
    if(root === null) return
    
    targetSum -= root.val;
    
    
    if(!root.left && !root.right && targetSum === 0) {
        result.push(path);
        return
    }
    if(root.left) pathSumHelper(root.left, targetSum, [...path, root.left.val], result);
    if(root.right) pathSumHelper(root.right, targetSum, [...path, root.right.val], result)
    
    
}