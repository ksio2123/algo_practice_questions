const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freqMap = new Map();
    let res = nums[0];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let newFreq = (freqMap.get(num) ?? 0) + 1;
        freqMap.set(num, newFreq);
        let resFreq = (freqMap.get(res) ?? 0);
        res = newFreq > resFreq ? num : res;
    }
    return res;
};

assert(majorityElement([3,2,3]) === 3)