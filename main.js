// Reverse Vowels of a String
// Easy
// Topics
// Companies
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.



//     Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    function removeVowelsFromString(str) {
        return str.replace(/[aeiouAEIOU]/g, '');
    }
    function addLetterToString(str, index, letter) {
        if (index < 0 || index > str.length) {
            return "Invalid index";
        }
        return str.slice(0, index) + letter + str.slice(index);
    }
    function isVowel(character) {
        // Convert the character to lowercase to handle uppercase vowels as well
        character = character.toLowerCase();

        // Check if the character is one of the vowels
        return ['a', 'e', 'i', 'o', 'u'].includes(character);
    }
    let indexArr = [];
    let vowelArr = [];
    let reverseVowelArr = [];
    let modifiedString = "";
    for (let i = 0; i < s.length; i++) {

        if (isVowel(s[i])) {
            indexArr.push(i);
            vowelArr.push(s[i]);
        }

    }
    modifiedString = removeVowelsFromString(s);
    console.log("vowel array", vowelArr);

    reverseVowelArr = vowelArr.reverse();
    for (let i = 0; i < vowelArr.length; i++) {
        modifiedString = addLetterToString(modifiedString, indexArr[i], reverseVowelArr[i])
    }
    console.log("reverseVowelArr: ", reverseVowelArr);
    console.log("index array", indexArr);
    console.log("modified string", modifiedString)
    return modifiedString;
};