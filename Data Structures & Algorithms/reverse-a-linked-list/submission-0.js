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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let dummyHead = new ListNode(0, null);

        function recursive(previous, next) {
            // base case: set the dummyHead to last Node
            if (!next) {
                dummyHead = previous;
                return;
            }
            // pass the current Node as previous and the next node as next
            recursive(next, next.next);
            // once we hit our base case and our recursive call fully executes
            // use the 'previous' value and set to next
            if (!previous) {
                next.next = null;
            } else {
                next.next = previous;
            }
            
            return;
        }

        recursive(null, head);

        return dummyHead;
    }
}
