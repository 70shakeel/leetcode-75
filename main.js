// Delete Node in a BST
// Medium
// Topics
// Companies
// Given a root node reference of a BST and a key, delete the node with the given key in the BST.Return the root node reference(possibly updated) of the BST.

//     Basically, the deletion can be divided into two stages:

// Search for a node to remove.
// If the node is found, delete the node.


//     Example 1:


// Input: root = [5, 3, 6, 2, 4, null, 7], key = 3
// Output: [5, 4, 6, 2, null, null, 7]
// Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
// One valid answer is[5, 4, 6, 2, null, null, 7], shown in the above BST.
// Please notice that another valid answer is[5, 2, 6, null, 4, null, 7] and it's also accepted.

// Example 2:

// Input: root = [5, 3, 6, 2, 4, null, 7], key = 0
// Output: [5, 3, 6, 2, 4, null, 7]
// Explanation: The tree does not contain a node with value = 0.
// Example 3:

// Input: root = [], key = 0
// Output: []
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const deleteNode = (root, key) => {
    if (!root) return null;

    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        if (!root.left) return root.right;
        if (!root.right) return root.left;

        let minNode = findMin(root.right);
        root.val = minNode.val;
        root.right = deleteNode(root.right, minNode.val);
    }

    return root;
};

const findMin = (node) => {
    while (node.left) {
        node = node.left;
    }
    return node;
};
