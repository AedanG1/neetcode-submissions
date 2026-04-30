class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */

    //        r
    //              l
    // [2, 3, 4, 3, 4]

    removeElement(nums, val) {
        let right = 0;

        for (let left = 0; left < nums.length; left++) {
            if (nums[left] !== val) {
                nums[right] = nums[left];
                right++;
            }
        }

        return right;
    }
}
