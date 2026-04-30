class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */

// we want to override each value with a value that isn't target value

// target = 2
//      r
//          l
// [0,1,3,2,3,0,4,2]
    removeElement(nums, val) {
      let right = 0;
      let n = nums.length;

      // for each number in nums
      for (let left = 0; left < nums.length; left++) {
        // if left is not pointing to target value
        if (nums[left] !== val) {
          // override right value
          nums[right] = nums[left];
          // increment right value
          right++;
        }
      }

      return right;
    }
}
