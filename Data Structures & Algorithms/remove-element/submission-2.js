class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */

    // two-pointers
    //           r
    //              l
    // [2, 3, 4, 3, 4]


    removeElement(nums, val) {
      let right = 0;
      // for each number
      for (let left = 0; left < nums.length; left++) {
        // if left isn't value
        if (nums[left] !== val) {
          // override right value with left
          nums[right] = nums[left];
          // move right
          right++;
        }
      }
      // return right because it will end up pointing to the
      // last index of our k elements
      return right;
    }
}
