/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// temp = null
// prev = 3
//                        c
// <- 0 <- 1 <- 2 <- 3 -> null

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
      // keep track of previous
      let prev = null;
      let cur = head;

      while (cur) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
      }

      return prev;
    }
}
