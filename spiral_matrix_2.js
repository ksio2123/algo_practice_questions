const assert = require('assert');
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let res = [];
    for (let i = 0; i < n; i++) {
        let row = Array(n);
        res.push(row);
    }

    let count = 1;
    let l = 0;
    let r = res[0].length - 1;
    let t = 0;
    let b = res.length - 1;
    while (true) {
        if (l > r) {
            break;
        }
        for (let i = l; i <= r; i++) {
            res[t][i] = count;
            count++;
        }
        t++;
        if (t > b) {
            break;
        }
        for (let i = t; i <= b; i++) {
            res[i][r] = count;
            count++;
        }
        r--;
        if (l > r) {
            break;
        }
        for (let i = r; i >= l; i--) {
            res[b][i] = count;
            count++;
        }
        b--;
        if (t > b) {
            break;
        }
        for (let i = b; i >= t; i--) {
            res[i][l] = count;
            count++
        }
        l++;
    }

    return res;
};

assert(generateMatrix(3).toString() === [[1,2,3],[8,9,4],[7,6,5]].toString())

