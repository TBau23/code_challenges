function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }


// max depth is defined as number of nodes
// along the longest path from root node 
// down to binary node

// do dfs and track the depth 

function maxDepthOfBinaryTree(root) {
    if(root == null) {
        return 0;
    } else {
        left = maxDepthOfBinaryTree(root.left);
        right = maxDepthOfBinaryTree(root.right);
        return Math.max(left, right) + 1
    }
}


// Time complexity - we touch every node, so O(n) where n is number of nodes

// Space - just consider the recursive calls 
    // if tree is balanced - then we know height of a binary tree will be ~logN


function iterativeMaxDepth(root) {
    // basically just use the stack to mimic the call stack 

    const stack = [[1, root]];
    let depth = 0;
    while(stack.length !== 0) {
        let curr = stack.pop();
        let currDepth = curr[0];
        let currNode = curr[1];
        if(currNode !== null) {
            depth = Math.max(depth, currDepth);
            stack.push([currDepth + 1, currNode.left]);
            stack.push([currDepth + 1, currNode.right]);
        }
    }
    return depth

}
