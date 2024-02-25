// function closeStrings(word1, word2) {
//     // Check if the character frequencies are the same
//     const countChars = str => {
//         const charCount = {};
//         for (let char of str) {
//             charCount[char] = (charCount[char] || 0) + 1;
//         }
//         return charCount;
//     };

//     const charCount1 = countChars(word1);
//     const charCount2 = countChars(word2);

//     const chars1 = Object.keys(charCount1);
//     const chars2 = Object.keys(charCount2);

//     // Check if the sets of characters are the same
//     if (chars1.length !== chars2.length || chars1.some(char => !chars2.includes(char))) {
//         return false;
//     }

//     // Check if the frequencies of character frequencies are the same
//     const freqCount1 = Object.values(charCount1).reduce((freqCount, freq) => {
//         freqCount[freq] = (freqCount[freq] || 0) + 1;
//         return freqCount;
//     }, {});

//     const freqCount2 = Object.values(charCount2).reduce((freqCount, freq) => {
//         freqCount[freq] = (freqCount[freq] || 0) + 1;
//         return freqCount;
//     }, {});

//     const freqs1 = Object.keys(freqCount1);
//     const freqs2 = Object.keys(freqCount2);

//     if (freqs1.length !== freqs2.length || freqs1.some(freq => !freqs2.includes(freq))) {
//         return false;
//     }

//     return freqs1.every(freq => freqCount1[freq] === freqCount2[freq]);
// }
function closeStrings(word1, word2) {
    // Check if the character frequencies are the same
    const countChars = str => {
        const charCount = {};
        for (let char of str) {
            charCount[char] = (charCount[char] || 0) + 1;
        }
        return charCount;
    };

    const charCount1 = countChars(word1);
    const charCount2 = countChars(word2);

    const chars1 = Object.keys(charCount1);
    const chars2 = Object.keys(charCount2);

    // Check if the sets of characters are the same
    if (chars1.length !== chars2.length || chars1.some(char => !chars2.includes(char))) {
        return false;
    }

    // Check if the frequencies of character frequencies are the same
    const freqCount1 = Object.values(charCount1).reduce((freqCount, freq) => {
        freqCount[freq] = (freqCount[freq] || 0) + 1;
        return freqCount;
    }, {});

    const freqCount2 = Object.values(charCount2).reduce((freqCount, freq) => {
        freqCount[freq] = (freqCount[freq] || 0) + 1;
        return freqCount;
    }, {});

    const freqs1 = Object.keys(freqCount1);
    const freqs2 = Object.keys(freqCount2);

    if (freqs1.length !== freqs2.length || freqs1.some(freq => !freqs2.includes(freq))) {
        return false;
    }

    return freqs1.every(freq => freqCount1[freq] === freqCount2[freq]);
}