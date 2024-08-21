const assert = require('assert');

/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {

    for (let i = 0; i < k; i++) {
        let [max, maxIndex] = gifts.reduce((acc, val, i,) => acc[0] > val ? acc : [val, i], [gifts[0], 0])
        gifts[maxIndex] = Math.floor(Math.sqrt(max));
    }

    return gifts.reduce((sum, val) => sum + val, 0)

};

assert(pickGifts([25,64,9,4,100], 4) === 29)