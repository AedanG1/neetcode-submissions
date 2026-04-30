class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // for each number.
        for (let i = 0; i < nums.length; i++) {
            // check each number after it.
            for (let j = i + 1; j < nums.length; j++) {
                // if any number after the current number equals the current number, return true.
                if (nums[j] === nums[i]) {
                    return true;
                }
            }
        }
        // return false if no duplicate found.
        return false;
    }
}
