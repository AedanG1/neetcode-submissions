class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        // if the new value is less than or equal to the last value in 
        // minStack, push new value to minStack.
        if (this.minStack.length > 0) {
            if (val <= this.minStack[this.minStack.length - 1]) {
                this.minStack.push(val);
            }
        } else {
            this.minStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        // if the value that's being popped, is equal to the last value
        // in minStack, pop the last value of minStack as well.
        if (this.stack[this.stack.length - 1] === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        // get the last value of minStack
        return this.minStack[this.minStack.length - 1];
    }
}
