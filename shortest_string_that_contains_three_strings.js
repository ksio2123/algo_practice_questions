const assert = require('assert');

/**
 * @param {string} a
 * @param {string} b
 * @param {string} c
 * @return {string}
 */
var minimumString = function(a, b, c) {
    let res = a.concat(b,c);
    const compress = (strA, strB) => {
        // go thru each character
        for (let i = 0; i < strA.length; i++) {
            for (let j = 0; j < strB.length; j++) {
                // i reached the end
                if (i + j >= strA.length) {
                    return strA.concat(strB.substring(j)); 
                }
                // does not match
                if (strA[i + j] !== strB.charAt(j)) {
                    break;
                }
                // does match and is last character
                if (j === strB.length - 1) {
                    return strA;
                }
            }
        }
        return strA.concat(strB);
    }

    let arr = [a,b,c];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < arr.length; k++) {
                if (j === i || k === i || k === j) {
                    continue;
                }
                let compressed = compress(arr[i], arr[j]);
                compressed = compress(compressed, arr[k]);
                if (res.length > compressed.length
                    ||(res.length === compressed.length && compressed < res)
                ) {
                    res = compressed;
                }
            }
        }
    }
    return res;
};

assert(minimumString("abc", "bca", "aaa") === "aaabca");