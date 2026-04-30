class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */

// assume all operations are valid, so +, D, C wont be first.
// keeping score
// 4 possible operations
// an integer to add to the score
// a '+' to add the sum of previous two scores to the score
// a 'D' to add double of the previous score to the score
// a 'C' to remove the value of the previous score from the score

// record = []
//   i
// ["5","D","+","C"]

// int: append 5
// D: double the value at record[record.length - 1]
// +: sum the value at record[record.length - 1] and record[record.length - 2]
// C: record.length = record.length - 1

// sum up the record
// still O(n) time

    calPoints(operations) {
      let records = new Array();
      let recordSum = 0;

      // for each operation in operations
      for (let i = 0; i < operations.length; i++) {
        let currentOperation = operations[i];
        let lastRecord = records[records.length - 1];
        let secondLastRecord = records[records.length - 2];

        if (Number.isInteger(Number(currentOperation))) {
          let number = Number(currentOperation); 
          records.push(number);
        } else if (currentOperation === '+') {
          let sum = lastRecord + secondLastRecord;
          records.push(sum);
        } else if (currentOperation === 'D') {
          let product = lastRecord * 2;
          records.push(product);
        } else {
          records.pop();
        }
      }

      for (const record of records) {
        recordSum = recordSum + record;
      }
      
      return recordSum;
    }
}
