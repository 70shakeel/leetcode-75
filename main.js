// Path Sum III
// Medium
// Topics
// Companies
// Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.

// The path does not need to start or end at the root or a leaf, but it must go downwards(i.e., traveling only from parent nodes to child nodes).



//     Example 1:


// Input: root = [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1], targetSum = 8
// Output: 3
// Explanation: The paths that sum to 8 are shown.
//     Example 2:

// Input: root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], targetSum = 22
// Output: 3
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const pathSum = (root, targetSum) => {
    if (!root) return 0;

    const dfs = (node, target) => {
        if (!node) return 0;

        let count = 0;
        if (node.val === target) {
            count++;
        }

        count += dfs(node.left, target - node.val);
        count += dfs(node.right, target - node.val);

        return count;
    };

    return dfs(root, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum);
};