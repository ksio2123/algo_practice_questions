const assert = require('assert')

function findXSum(nums: number[], k: number, x: number): number[] {
  // find freq map
  // top most x amount
  const freqMap = new Map();
  // create window
  // for (let i = 0; i < k; i++) {
  let rIdx = 0;
  let lIdx = 0;
  while (rIdx < k) {
    if (!freqMap.has(nums[rIdx])) {
      freqMap.set(nums[rIdx], 0);
    }
    let newFreq = freqMap.get(nums[rIdx]) + 1;
    freqMap.set(nums[rIdx], newFreq);
    rIdx++;
  }
  const res: number[] = [];
  while (rIdx < nums.length) {
    // get x most freq
    const xSum = Array.from(freqMap).sort((a, b) =>
      a[1] === b[1] ? b[0] - a[0] : b[1] - a[1]
      // get xSum
    ).slice(0, x).reduce((acc, [val, freq]) => acc + (val * freq), 0);
    res.push(xSum);
    // remove last num
    let newFreq = freqMap.get(nums[lIdx]) - 1;
    freqMap.set(nums[lIdx], newFreq);
    lIdx++;
    if (!freqMap.has(nums[rIdx])) {
      freqMap.set(nums[rIdx], 0);
    }
    newFreq = freqMap.get(nums[rIdx]) + 1;
    freqMap.set(nums[rIdx], newFreq);
    rIdx++;
  }
  const xSum = Array.from(freqMap).sort((a, b) =>
    a[1] === b[1] ? b[0] - a[0] : b[1] - a[1]
    // get xSum
  ).slice(0, x).reduce((acc, [val, freq]) => acc + (val * freq), 0);
  // console.log(xSum);
  res.push(xSum);
  return res;

};
// 
// console.log('test')

assert.deepStrictEqual(findXSum([3,8,7,8,7,5], 2, 2), [11,15,15,15,12])
assert.deepStrictEqual(findXSum([1,1,2,2,3,4,2,3], 6, 2), [6,10,12])