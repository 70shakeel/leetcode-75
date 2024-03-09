// function goodNodes(root) {
//     // Helper function to perform DFS
//     function dfs(node, maxSoFar) {
//         if (!node) return 0;

//         // Check if the current node is a good node
//         let count = node.val >= maxSoFar ? 1 : 0;

//         // Update the maximum value seen so far
//         maxSoFar = Math.max(maxSoFar, node.val);

//         // Recursively check the left and right subtrees
//         return count + dfs(node.left, maxSoFar) + dfs(node.right, maxSoFar);
//     }

//     // Start DFS from the root with a minimum value of -Infinity
//     return dfs(root, -Infinity);
// }
function goodNodes(root) {
    // Helper function to perform DFS
    function dfs(node, maxSoFar) {
        if (!node) return 0;

        // Check if the current node is a good node
        let count = node.val >= maxSoFar ? 1 : 0;

        // Update the maximum value seen so far
        maxSoFar = Math.max(maxSoFar, node.val);

        // Recursively check the left and right subtrees
        return count + dfs(node.left, maxSoFar) + dfs(node.right, maxSoFar);
    }

    // Start DFS from the root with a minimum value of -Infinity
    return dfs(root, -Infinity);
}