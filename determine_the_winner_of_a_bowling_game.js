const assert = require('assert');

/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {
    let sum1 = 0;
    let sum2 = 0;
    // accumulate sum, check if i - 1 or i - 2 is 10 multiplier is 2
    for (let i = 0; i < player1.length; i++) {
        let multi1 = player1[i - 2] === 10 || player1[i - 1] === 10 ? 2 : 1;
        sum1 += multi1 * player1[i];
        let multi2 = player2[i - 2] === 10 || player2[i - 1] === 10 ? 2 : 1;
        sum2 += multi2 * player2[i]
    }

    switch(true) {
        case (sum1 === sum2):
            return 0;
        case (sum1 > sum2):
            return 1;
        case (sum2 > sum1):
            return 2;
    }
};

assert(isWinner([2,3,4,5], [1,2,10,1]) === 2)

