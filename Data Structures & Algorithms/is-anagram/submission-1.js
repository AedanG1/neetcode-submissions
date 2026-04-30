class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // convert strings to arrays and sort
        const array1 = s.split("").sort();
        const array2 = t.split("").sort();
        // check if the length of the arrays are the same
        if (array1.length !== array2.length) {
            // if not, return false
            return false;
        }
        // for each letter in the first array
        for (let i = 0; i < array1.length; i++) {
            // compare the value at the index of the first array with the second array
            if (array1[i] !== array2[i]) {
                // if they are a mismatch, return false
                return false;
            }
        }
        // return true after no mismatches are found
        return true;
    }
}
