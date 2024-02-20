// Longest Subarray of 1's After Deleting One Element
// Solved
// Medium
// Topics
// Companies
// Hint
// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non - empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.



// Example 1:

// Input: nums = [1, 1, 0, 1]
// Output: 3
// Explanation: After deleting the number in position 2, [1, 1, 1] contains 3 numbers with value of 1's.
// Example 2:

// Input: nums = [0, 1, 1, 1, 0, 1, 1, 0, 1]
// Output: 5
// Explanation: After deleting the number in position 4, [0, 1, 1, 1, 1, 1, 0, 1] longest subarray with value of 1's is [1,1,1,1,1].
// Example 3:

// Input: nums = [1, 1, 1]
// Output: 2
// Explanation: You must delete one element.
var longestSubarray = function (nums) {
    let maxOnes = 0;
    let countOnes = 0;
    let countAfterRemove = 0;

    if (nums.includes(0)) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                countOnes++;
                countAfterRemove++;
            } else {
                maxOnes = Math.max(maxOnes, countAfterRemove);
                countAfterRemove = countOnes;
                countOnes = 0;
            }
        }

        // Handle the case when the array ends with consecutive 1's
        maxOnes = Math.max(maxOnes, countAfterRemove);

        return maxOnes;
    }
    else {
        return nums.length - 1;
    }
};
