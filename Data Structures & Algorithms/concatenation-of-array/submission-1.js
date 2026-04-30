class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

// create a new array of which the contents of the new array is nums concatenated with nums
// create a new array with length of nums
// for each num in nums
  // place current value at current index AND append to the end of the answer array

// [1, 4, 1, 2, 1, 4, 1, 2]
//           i 
// [1, 4, 1, 2]

    getConcatenation(nums) {
      let ans = new Array(nums.length);

      // for each value in nums
      for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[i];
        ans[ans.length] = nums[i];
      }

      return ans;
    }
}
