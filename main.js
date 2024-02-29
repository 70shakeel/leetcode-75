// Decode String
// Solved
// Medium
// Topics
// Companies
// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well - formed, etc.Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k.For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.



// Example 1:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// Example 2:

// Input: s = "3[a2[c]]"
// Output: "accaccacc"
// Example 3:

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let stack = [];
    let currentString = "";
    let repetitionFactor = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);

        if (char === '[') {
            stack.push(currentString);
            stack.push(repetitionFactor);
            currentString = "";
            repetitionFactor = 0;
        } else if (char === ']') {
            let factor = stack.pop();
            let prevString = stack.pop();
            currentString = prevString + currentString.repeat(factor);
        } else if (isNaN(char)) {
            currentString += char;
        } else {
            repetitionFactor = repetitionFactor * 10 + parseInt(char);
        }
    }

    return currentString;
}