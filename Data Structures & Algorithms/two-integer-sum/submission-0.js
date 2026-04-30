class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // for each number in nums
        for (let i = 0; i < nums.length; i++) {
            // check if current number plus any number after it = target
            for (let j = i + 1; j < nums.length; j++) {
                // return an array of the indices
                if (nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }
    }
}
