// Delete the Middle Node of a Linked List
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given the head of a linked list.Delete the middle node, and return the head of the modified linked list.

// The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0 - based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

// For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.


//     Example 1:


// Input: head = [1, 3, 4, 7, 1, 2, 6]
// Output: [1, 3, 4, 1, 2, 6]
// Explanation:
// The above figure represents the given linked list.The indices of the nodes are written below.
// Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
// We return the new list after removing this node.
//     Example 2:


// Input: head = [1, 2, 3, 4]
// Output: [1, 2, 4]
// Explanation:
// The above figure represents the given linked list.
// For n = 4, node 2 with value 3 is the middle node, which is marked in red.
//     Example 3:


// Input: head = [2, 1]
// Output: [2]
// Explanation:
// The above figure represents the given linked list.
// For n = 2, node 1 with value 1 is the middle node, which is marked in red.
//     Node 0 with value 2 is the only node remaining after removing node 1.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

const deleteMiddle = (head) => {
    if (!head || !head.next) {
        return null; // No middle node to delete
    }

    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }

    const middleIndex = Math.floor(length / 2);
    if (middleIndex === 0) {
        return head.next; // Head is the middle node
    }

    let prev = null;
    current = head;
    for (let i = 0; i < middleIndex; i++) {
        prev = current;
        current = current.next;
    }

    prev.next = current.next;

    return head;
};

// Helper function to create a linked list from an array
const createLinkedListFromArray = (arr) => {
    let head = null;
    let tail = null;
    for (let i = 0; i < arr.length; i++) {
        const node = new ListNode(arr[i]);
        if (!head) {
            head = node;
            tail = node;
        } else {
            tail.next = node;
            tail = node;
        }
    }
    return head;
};

// Helper function to convert a linked list to an array
const convertLinkedListToArray = (head) => {
    const arr = [];
    let current = head;
    while (current) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
};