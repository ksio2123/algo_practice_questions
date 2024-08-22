const assert = require('assert');
/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, divisors) {
    let res = divisors[0];
    let maxScore = 0;
    for (j = 0; j < divisors.length; j++) {
        let divisor = divisors[j];
        let score = 0;
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            let remainder = num % divisor;
            score += remainder === 0 ? 1 : 0;
        }
        if (score < maxScore) {
            continue;
        }
        if (score > maxScore) {
            res = divisor;
            maxScore = score;
            continue;
        }
        res = divisor < res ? divisor : res;
    }
    return res;
};

assert(maxDivScore([2,9,15,50], [5,3,7,2]) === 2);