const assert = require('assert');

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    let nums2map = nums2.map((val,idx) => [val, idx]).sort((a,b) => b[0] - a[0]);
    let minHeap = new MinHeap();
    let sum = 0;
    let res = 0;
    for (let i = 0; i < nums2map.length; i++) {

        if (minHeap.size() === k) {
            let removeVal = minHeap.pop();
            sum -= removeVal;

        }
        let [num2, idx] = nums2map[i];
        let num1 = nums1[idx];
        minHeap.push(num1);
        sum += num1;
        if (minHeap.size() === k) {
            res = Math.max(res, sum * num2)
        }
    }

    return res;

};

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  leftChild(i) {
    return 2 * i + 1;
  }

  rightChild(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  heapifyUp(i) {
    while (i > 0 && this.heap[this.parent(i)] > this.heap[i]) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }

  heapifyDown(i) {
    while (this.leftChild(i) < this.size()) {
      let minChild = this.leftChild(i);
      if (
        this.rightChild(i) < this.size() &&
        this.heap[this.rightChild(i)] < this.heap[minChild]
      ) {
        minChild = this.rightChild(i);
      }
      if (this.heap[i] <= this.heap[minChild]) {
        break;
      }
      this.swap(i, minChild);
      i = minChild;
    }
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp(this.size() - 1);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const min = this.heap[0];
    this.swap(0, this.size() - 1);
    this.heap.pop();
    this.heapifyDown(0);
    return min;
  }
}

assert(maxScore([1,3,3,2], [2,1,3,4], 3) === 12)