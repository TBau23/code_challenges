// top down recursion can be though of like a preorder traversal
// outline of typical top down recursive function
// 1. return specific value for null node
// 2. update answer if needed
// 3. left_ans = top_down(root.left, left_params)
// 4. right_ans = top_down(root.right, right_params)
// 5. return answer if needed

function maxDepth(root) {

    // O(n) time || O(h) space - which on a balanced tree is O(logN)
    let answer = 0;
    if(!root) return 0
    
    
    function maxDepthFinder(root, depth) {
        if(root === null) return 
    
        if(!root.left && !root.right) {
            answer = Math.max(answer, depth)
        }
        
        maxDepthFinder(root.left, depth + 1);
        maxDepthFinder(root.right, depth + 1)
    }
    
    maxDepthFinder(root,1)
    return answer
}

// bottom up - we first call function for all children nodes 
// similar to postorder traversal
// typical bottom up structure
    // return specific value for null node
    // left_ans = bottom_up(root.left)
    // right_ans = bottom_up(root.right)
    // return answers