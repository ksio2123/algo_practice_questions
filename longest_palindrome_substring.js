const assert = require('assert');

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // for each character try to expand to create the biggest substring

    let res = '';
    // one for loop to iterate each character
    for (let i = 0; i < s.length; i++) {
        let count = 0;
        // while loop to expand and check for longest palindrome string
        while (true) {
            if (s[i + count] !==  s[i - count] || (s[i + count] === undefined)) {
                count--;
                break;
            }
            count++;
        }
        res = res.length < ((2 * count) + 1) ? s.substring(i - count, i + count + 1) : res;

        count = 0;
        while (true) {
            if (s[i - count] !== s[i + 1 + count] || s[i - count] === undefined) {
                count--;
                break;
            }
            count++;
        }
        res = res.length < (2 * (count + 1)) ? s.substring(i - count, i + count + 2) : res;
    }

    return res;
};

assert(longestPalindrome('aaabb') === 'aaa')