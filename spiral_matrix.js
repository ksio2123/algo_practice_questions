const assert = require('assert');
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    // right
    let r = matrix[0].length - 1;
    //left
    let l = 0;
    // top
    let t = 0;
    //bottom
    let b = matrix.length - 1;

    let res = [];

    while (true) {
        if (l > r) {
            break;
        }
        for (let i = l; i <= r; i++) {
            res.push(matrix[t][i])
        }
        t++;
        if (t > b) {
            break;
        }
        for (let i = t; i <= b; i++) {
            res.push(matrix[i][r])
        }
        r--;
        if (l > r) {
            break;
        }
        for (let i = r; i >= l; i--) {
            res.push(matrix[b][i])
        }
        b--;
        if (t > b) {
            break;
        }
        for (let i = b; i >= t; i--) {
            res.push(matrix[i][l])
        }
        l++;
    }

    return res;

};

assert(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]).toString() === [1,2,3,6,9,8,7,4,5].toString());