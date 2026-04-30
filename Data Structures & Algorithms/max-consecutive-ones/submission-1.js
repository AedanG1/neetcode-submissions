class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

// have to find largest number of consecutive ones
// a count of consecutive ones is interrupted by a number that isn't 1 (in this case 0)

// keep a running count of 1s and a max count of 1s
// each iteration check if we've surpassed the max
// if we run into a zero reset the count
// O(n) time

// max: 1
// current: 1
//                 i
// [1, 1, 0, 1, 1, 1]

    findMaxConsecutiveOnes(nums) {
      let max = 0;
      let count = 0;

      for (let num of nums) {
        // if num is 1
        if (num === 1) {
          // add to count
          count++;
        } else {
          // reset count
          count = 0;
        }
        // get max from greatest between max and count
        max = Math.max(max, count);
      }

      return max;
    }
}
