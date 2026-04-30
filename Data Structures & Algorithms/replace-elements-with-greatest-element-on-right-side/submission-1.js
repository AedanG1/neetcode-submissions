class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */

    // because we need the greatest element to the right
    // we can just keep track of it without having to loop over the array for
    // every value by going from right to left and saving the max
    // value seen as we go from right to left.
    
    // think about it like what if we needed the greatest value from the left?

    // max value: 5
    // saved value: 2
    //  i
    // [5, 5, 3, 2, 2, -1]


    replaceElements(arr) {
      let n = arr.length - 1;
      let result = new Array(arr.length);
      let rightMaxVal = -1;
      // iterate through array from right to left
      for (let i = n; i >= 0; i--) {
        // save value at i
        let currentVal = arr[i];
        // set value at i with max value
        result[i] = rightMaxVal;
        // update max value by getting the max between max value or saved value at i
        rightMaxVal = Math.max(rightMaxVal, currentVal);
      }

      return result;
    }
}
