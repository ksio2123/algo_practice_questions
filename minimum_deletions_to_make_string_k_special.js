const assert = require('assert');

/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumDeletions = function(word, k) {
    // create freq map
    let freqMap = new Map();
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        let freq = freqMap.get(char) ?? 0;
        freqMap.set(char, freq + 1);
    }
    // sort from least freq to most freq
    let freqArr = Array.from(freqMap);
    freqArr.sort((a,b) => a[1] - b[1]);

    // total number of character - (num of characters - currentIndex) * currentFreq = num of char removed
    let res = Number.POSITIVE_INFINITY;
    const findCharRemain = (freqArr, i) => {
        charRemain = 0;
        for (let j = i; j < freqArr.length; j++) {
            if ( freqArr[j][1] < (freqArr[i][1] + k)) {
                charRemain += freqArr[j][1]
            } else {
                charRemain += (freqArr.length - j) * (freqArr[i][1] + k);
                return charRemain;
            }
        }
        return charRemain
    }
    for (let i = 0; i < freqArr.length; i++) {
        let charRemain = findCharRemain(freqArr, i);
        let charRemoved = word.length - charRemain;
        res = Math.min(res, charRemoved);
    }
    return res;


};

assert(minimumDeletions("dabdcbdcdcd", 2) === 2);
assert(minimumDeletions("aabcaba", 0) === 3)