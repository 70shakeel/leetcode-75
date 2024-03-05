// Reverse Linked List
// Solved
// Easy
// Topics
// Companies
// Given the head of a singly linked list, reverse the list, and return the reversed list.



//     Example 1:


// Input: head = [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]
// Example 2:


// Input: head = [1, 2]
// Output: [2, 1]
// Example 3:

// Input: head = []
// Output: []
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

const reverseList = (head) => {
    let prev = null;
    let current = head;

    while (current !== null) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }

    return prev;
};

// Helper function to convert an array to a linked list
const arrayToLinkedList = (arr) => {
    let head = new ListNode();
    let current = head;

    for (let i = 0; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head.next;
};

// Helper function to convert a linked list to an array
const linkedListToArray = (head) => {
    let arr = [];
    let current = head;

    while (current !== null) {
        arr.push(current.val);
        current = current.next;
    }

    return arr;
};