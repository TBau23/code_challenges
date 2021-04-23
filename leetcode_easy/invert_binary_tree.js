function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function invertTree(root) {
    let result = root;
    invertHelper(root);
    return result;
}

function invertHelper(node) {
    if(node !== null) {
        let temp = node.left;
        node.left = node.right;
        node.right = temp;
        invertHelper(node.left);
        invertHelper(node.right);
    }
}


const node2 = new TreeNode(2, null, null)
const node3 = new TreeNode(7, null, null )
const node1 = new TreeNode(4, node2, node3);

console.log(invertTree(node1))