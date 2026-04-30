/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // create a dummy head for the new list
        const dummy = new ListNode(0, null);
        // create a cursor for dummy
        let cur = dummy;
        // while there are still nodes in list1 and 2
        while (list1 && list2) {
            // if the current node of list1 is < or = list2 current node
            if (list1.val < list2.val) {
                // append list1 node to dummy
                cur.next = list1;
                // move to next node of list1
                list1 = list1.next;
            } else {
                cur.next = list2;
                list2 = list2.next;
            }
            cur = cur.next;
        }
        // if there is only one list left
        if (list1) {
            // append remaining list to dummy
            cur.next = list1;
        } else {
            cur.next = list2;
        }

        return dummy.next;
    }
}
