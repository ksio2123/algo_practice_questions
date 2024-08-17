const assert = require('assert');
// import assert from 'node:assert';

/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixMedian = function(grid) {
    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;
    for (let r = 0; r < grid.length; r++) {
        max = Math.max(max, grid[r][grid[r].length - 1])
        min = Math.min(min, grid[r][0])
    }
    // number of numbers less than median
    let median = Math.floor((grid.length * grid[0].length  + 1)/ 2);

    const smallerOrEqual = (row, num) => {
        let l = 0;
        let r = grid[row].length;
        while ( l < r) {
            let m = l + Math.floor((r - l) / 2);
            let val = grid[row][m];
            if (val <= num) {
                l = m + 1;
            } else {
                r = m;
            }
        }

        return l;
    }
    while (min < max) {
        let test = min + Math.floor((max - min) / 2);

        let count = 0;
        for (let row = 0; row < grid.length; row++) {
            count += smallerOrEqual(row, test);
        }
        if (count < median) {
            min = test + 1;
        } else {
            max = test;
        }
    }
    return min;

};

assert(matrixMedian([[1,1,2],[2,3,3],[1,3,4]]) === 2)

