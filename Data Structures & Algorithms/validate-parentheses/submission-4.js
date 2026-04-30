class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

// 
//      i
// ({[]})
// stack is empty, valid

// ()[]{}

// 
//       i
// ({[}]})
// stack not empty, invalid

// if element is opening, push to stack
// if element is closing, check top of stack for match
    // if match, pop from stack
    // else return false

    isValid(s) {
        let stack = new Array();
        for (const char of s) {
            if (char === '(' || char === '{' || char === '[') {
                stack.push(char);
            } 
            if (char === ')') {
                if (stack[stack.length - 1] !== '(') {
                    return false;
                } else {
                    stack.pop();
                }
            }
            if (char === '}') {
                if (stack[stack.length - 1] !== '{') {
                    return false;
                } else {
                    stack.pop();
                }
            }
            if (char === ']') {
                if (stack[stack.length - 1] !== '[') {
                    return false;
                } else {
                    stack.pop();
                }
            }
        }
        return stack.length < 1 ? true : false;
    }
}
