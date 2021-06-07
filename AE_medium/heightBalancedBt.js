function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }

// given a Binary Tree, check if it is height balanced, meaning the subtrees of every node have a height difference of no more than 1
// you automatically know 

function TreeInfo(isBalanced, height) {
    this.height = height;
    this.isBalanced = isBalanced;
}

function heightBalancedBT(tree) {
    const treeInfo = getTreeInfo(tree);
    return tree.isBalanced
}

function getTreeInfo(tree) {
    if(!tree) return new TreeInfo(true, -1);

    const leftTree = getTreeInfo(tree.left);
    const rightTree = getTreeInfo(tree.right);

    const isBalanced = leftTree.isBalanced && rightTree.isBalanced && Math.abs(leftTree.height - rightTree.height) < 2;
    const height = Math.max(leftTree.height, rightTree.height) + 1

    return new TreeInfo(isBalanced, height);
}