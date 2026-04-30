class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */

// go from right to left
// keep track of max seen
// replace current with max

    replaceElements(arr) {
        const n = arr.length;
        let maxOfSeen = -1;
        let result = new Array(n);

        // for each number going from right to left
        for (let i = n - 1; i >= 0; i--) {
            result[i] = maxOfSeen;
            maxOfSeen = Math.max(maxOfSeen, arr[i]);
        }

        return result;
    }
}
