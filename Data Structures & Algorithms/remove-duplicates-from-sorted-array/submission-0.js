class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        // remove duplicates and return the number of unique numbers
        // order should remain the same
        // not necessary to consider elements after unique elements in the array
        // empty array should return 0
        // array with only one number should return 1
        
        // create a variable k
        let k = 0;

        // for each number in nums
        for (let i = 0; i < nums.length; i++) {
            // if number doesn't equal the index at k
            if (nums[i] !== nums[k]) {
                // increment k
                k++;
                // set number = index at k
                nums[k] = nums[i];
            }
        }
        return k + 1;
    }
}
