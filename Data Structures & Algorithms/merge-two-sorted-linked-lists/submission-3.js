/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// dummy -> 1 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7
//           c 
// 1 -> 2 -> 4
//           c
// 1 -> 3 -> 5 -> 6 -> 7

// dummy -> 1 -> 2 -> 3 -> 4 -> 5 -> 6
//           c
// 1 -> 2 -> 3
// c
// 4 -> 5 -> 6

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let cur1 = list1;
        let cur2 = list2;
        let result = new ListNode();
        let resultPointer = result;
        while (cur1 && cur2) {
            if (cur1.val < cur2.val) {
                // append new node with list1.val to resulting list
                resultPointer.next = new ListNode(cur1.val);
                // move list1 pointer
                cur1 = cur1.next;
            } else {
                // append new node with list2.val to resulting list
                resultPointer.next = new ListNode(cur2.val);
                // move list2 pointer
                cur2 = cur2.next;
            }
            // move result pointer
            resultPointer = resultPointer.next;
        }
        // if list1 still has nodes append
        if (cur1) {
            resultPointer.next = cur1;
        } else {
        // else append remaining list2 nodes
            resultPointer.next = cur2;
        }
        // return dummy head which points to result head
        return result.next;
    }
}
