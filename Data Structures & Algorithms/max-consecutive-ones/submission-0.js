class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
      // keep count of max 1s
      let max = 0;
      // keep count of current 1s
      let count = 0;

      for (let num of nums) {
        // if 1 is seen, update count
        if (num === 1) {
          count++;
        } else {
          // otherwise, reset count
          count = 0;
        }

        // if count exceeds max, update max
        if (count > max) {
          max = count;
        }
      }

      return max;
    }
}
