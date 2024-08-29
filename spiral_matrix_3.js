const assert = require('assert');

/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    // stop spiral if 
    // l < 0 && r >= cols
    // t < 0 && b >= row
    let res = [];
    let count = 0;
    res.push([rStart, cStart]);
    const isOutfBound = () => {
        return rStart < 0 || rStart >= rows || cStart < 0 || cStart >= cols;
    }
    while (true) {
        let isOut = 0;
        if (rStart < 0) {
            isOut++;
        }
        // ->
        for (let i = 0; i <= count; i++) {
            cStart++;
            if (isOutfBound()) {
                continue;
            }
            res.push([rStart, cStart]);
        }
        if (cStart >= cols) {
            isOut++
        }
        // |v
        for (let i = 0; i <= count; i++) {
            rStart++;
            if (isOutfBound()) {
                continue;
            }
            res.push([rStart, cStart]);
        }
        if (rStart >= rows) {
            isOut++;
        }
        count++;
        for (let i = 0; i <= count; i++) {
            cStart--;
            if (isOutfBound()) {
                continue;
            }
            res.push([rStart, cStart]);
        }
        if (cStart < 0) {
            isOut++;
        }
        for (let i = 0; i <= count; i++) {
            rStart--;
            if (isOutfBound()) {
                continue;
            }
            res.push([rStart, cStart]);
        }
        count++;
        if (isOut === 4) {
            break;
        }
    }
    return res;
};

var spiralMatrixIII2 = function(rows, cols, rStart, cStart) {
    let dirs = [[0, 1], [1,0], [0, -1], [-1, 0]];
    let step = 1;
    let dirCount = 0;
    let res = [];
    let outOfBoundCount = 0;
    res.push([rStart, cStart]);
    let isOutfBound = () => {
        return rStart < 0 || rStart >= rows || cStart < 0 || cStart >= cols
    }
    while (true) {
        // all directions are out of the spiral
        outOfBoundCount += isOutfBound() ?  1 : 0;
        if (outOfBoundCount === 5) {
            break;
        }
        let curDir = dirs[dirCount];
        for (let i = 0; i < step; i++) {
            rStart += curDir[0];
            cStart += curDir[1];
            // out of bound 
            // could break here and update the newRStart and cStart
            if (isOutfBound()) {
                continue;
            }
            outOfBoundCount = 0;
            res.push([rStart, cStart])
        }
        dirCount = (dirCount + 1) % 4;
        // when to update steps
        step += [0,2].includes(dirCount) ? 1 : 0;
    }
    return res;
}


assert(spiralMatrixIII2(rows = 1, cols = 4, rStart = 0, cStart = 0).toString() === [[0,0],[0,1],[0,2],[0,3]].toString())