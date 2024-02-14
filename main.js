// Is Subsequence
// Solved
// Easy
// Topics
// Companies
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some(can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).



// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let result = [];
    let len = t.length;
    for (let i = 0; i < s.length; i++) {
        if (t.includes(s[i])) {
            let index = t.indexOf(s[i]);
            let newStr = t.substring(index + 1);
            // let regex = new RegExp(t[i], "g");
            // let newS=s.replace(regex,"");

            t = newStr;
            // s=newS;            
            console.log("s:", s);
            console.log("t :", t);
            // console.log("length: ",len)
            result.push(true);

        }
        else {
            result.push(false)
        }
    }
    if (result.includes(false)) {
        return false;
    }
    else {
        return true;

    }
};