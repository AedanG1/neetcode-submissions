class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        // remove all occurences of the val in nums in place
        // after removing all occurences return the number of remaining elements

        // initialize a variable k to point to the number for replacement
        let k = 0;
        // for each number in nums
        for (let i = 0; i < nums.length; i++) {
            // if the current number doesn't equal the value
            if (nums[i] !== val) {
                // set the pointer number equal to the current number
                nums[k] = nums[i];
                // point to the next number
                k++;
            }
        }

        return k;
    }       
}
