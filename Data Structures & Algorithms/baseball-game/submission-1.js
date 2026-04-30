class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */

// keep a stack of scores
// push and pop the scores as necessary
// sum the values in the stack
    
    calPoints(operations) {
      let scores = new Array();

      for (let i = 0; i < operations.length; i++) {
        const currentOperation = operations[i];
        let lastScore = scores[scores.length - 1];
        let secondLastScore = scores[scores.length - 2];
        // perform the given operation on the stack  
        if (currentOperation === '+') {
          scores.push(lastScore + secondLastScore);
        } else if (currentOperation === 'D') {
          scores.push(lastScore * 2);
        } else if (currentOperation === 'C') {
          scores.pop();
        } else {
          // convert string to number and append to scores
          scores.push(Number(currentOperation));
        }
      }

      let sum = 0;
      for (const score of scores) {
        sum = sum + score;
      }

      return sum;
    }
}
