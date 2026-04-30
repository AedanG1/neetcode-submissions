class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = [...nums];
        // for each integer in nums
        for (let i = 0; i < nums.length; i++) {
            // add integer to end of ans 
            ans[ans.length] = nums[i];
        }
        return ans;
    }
}
