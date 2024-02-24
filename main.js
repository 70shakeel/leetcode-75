// Unique Number of Occurrences
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

 

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    function countOccurrences(arr1, element) {
        return arr1.reduce((count, current) => {
            return current === element ? count + 1 : count;
        }, 0);
    }
    let set = new Set(arr);
    set = Array.from(set);
    let occArr = []
    for (let num = 0; num < set.length; num++) {
        occArr.push(countOccurrences(arr, set[num]))
    }
    occArr = new Set(occArr);
    occArr = Array.from(occArr);
    console.log("set", set);
    console.log("occ arr", occArr);
    if (occArr.length < set.length) {
        return false;
    }
    else {
        return true;
    }
};