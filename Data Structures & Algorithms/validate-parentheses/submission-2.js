class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */


    isValid(s) {
        // corresponding brackets object
        const brackets = {
            "(" : ")",
            "[" : "]",
            "{" : "}"
        };

        // store the closing brackets in order they should appear
        let closingBrackets = [];

        // for each character in string s
        for (let i = 0; i < s.length; i++) {

            // if character is opening bracket
            if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
                // store corresponding closing bracket
                closingBrackets[closingBrackets.length] = brackets[s[i]];
            } else {
                // check that closing bracket matches last closing bracket in
                // closingBrackets array
                if (s[i] === closingBrackets[closingBrackets.length - 1]) {
                    // if so, remove closing bracket from end of array and continue
                    closingBrackets.length = closingBrackets.length - 1;
                } else {
                    // if not, return false
                    return false;
                }
            }
        }
        
        // if closing brackets array is still populated, return false
        if (closingBrackets.length > 0) {
            return false;
        }
        // no bracket pair was found to be out of order
        return true;
    }
}

// closingBracketsToLookFor = ], ) 
//  *     
// [({})]



// [()]{}
// [({}]) x
// [({)}] x
// [](){}
// [()]}{ x
// [()))]{} x
// [())))]{} x
// [[}} x

// if we run into a new opening bracket before finding a closing bracket
// check new opening bracket 
// if the array isn't even, it can't be true
// an opening bracket has to be an odd number of spaces away from its closing bracket

