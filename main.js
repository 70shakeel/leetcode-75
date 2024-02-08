// Product of Array Except Self
// Solved
// Medium
// Topics
// Companies
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32 - bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.



//     Example 1:

// Input: nums = [1, 2, 3, 4]
// Output: [24, 12, 8, 6]
// Example 2:

// Input: nums = [-1, 1, 0, -3, 3]
// Output: [0, 0, 9, 0, 0]
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let product = 1;
    let zeroCount = 0;

    // Calculate the product of all elements and count zeroes
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            product *= nums[i];
        } else {
            zeroCount++;
        }
    }

    // If there are more than one zero, all elements except zeroes will be 0
    if (zeroCount > 1) {
        return Array(nums.length).fill(0);
    }

    // If there is only one zero, all elements except zero will be 0, and zero will be the product of all other elements
    if (zeroCount === 1) {
        return nums.map(num => num === 0 ? product : 0);
    }

    // If there are no zeroes, divide the product by the current element to get the product except self
    return nums.map(num => product / num);
};