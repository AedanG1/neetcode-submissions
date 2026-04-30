class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */

    // each number needs to be replaced with the greatest number
    // to its right

    // last number must be changed to -1

    // the current number's value doesn't matter, 5 can change to 3 if
    // 3 is greatest to the right

    // the current number needs to be marked while the greatest
    // number needs to be found

    // curGreatest = 3
    //  j 
    //  i
    // [2,4,5,3,1,2]

    replaceElements(arr) {
      // keep track of current greatest
      let curGreatest = 0;
      // for each number i
      for (let i = 0; i < arr.length; i++) {
        // for each number j = i+1
        for (let j = i + 1; j < arr.length; j++) {
          // if j > curGreatest
          if (arr[j] > curGreatest) {
            // j becomes curGreates
            curGreatest = arr[j];
          }
        }
        // if i < arr.length - 1
        if (i < arr.length - 1) {
          // override i with curGreatest
          arr[i] = curGreatest;
        } else {
          // override i with -1
          arr[i] = -1;
        }
        // reset curGreatest
        curGreatest = 0;

      }

      return arr;
    }
}
