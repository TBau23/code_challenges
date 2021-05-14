function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


function inorder_iterative(root) {
    const result = [];
    const stack = []
    let curr = root;
    while(stack.length || curr !== null) {
        while(curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        result.push(curr.val);
        curr = curr.right;
    }

    return result
}