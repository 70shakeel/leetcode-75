// Maximum Number of Vowels in a Substring of Given Length
// Solved
// Medium
// Topics
// Companies
// Hint
// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.



//     Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
//     Example 2:

// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.
//     Example 3:

// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    let maxVowelCount = 0;
    let currentVowelCount = 0;

    // Calculate vowel count for the first window of length k
    for (let i = 0; i < k; i++) {
        if (isVowel(s[i])) {
            currentVowelCount++;
        }
    }

    maxVowelCount = currentVowelCount;

    // Slide the window and update maxVowelCount
    for (let i = k; i < s.length; i++) {
        if (isVowel(s[i])) {
            currentVowelCount++;
        }
        if (isVowel(s[i - k])) {
            currentVowelCount--;
        }
        maxVowelCount = Math.max(maxVowelCount, currentVowelCount);
    }

    return maxVowelCount;
};

function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}