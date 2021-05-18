// given a binary tree, return true if the tree has a root-to-leaf path such that adding up all the values along the path 
// equals the target sum

function pathSum(root, targetSum) {
    if(!root) return false
    if(!root.left && !root.right) {
        if(targetSum - root.val === 0) return true
        return false
    }

    let left_ans = pathSum(root.left, targetSum - root.val)
    return left_ans || pathSum(root.right, targetSum - root.val)
}