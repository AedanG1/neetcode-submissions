/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        // base case
        if (root == null) {
            return new TreeNode(val);
        }

        // if the node should go right
        if (val > root.val) {
            // send node right
            root.right = this.insertIntoBST(root.right, val);
        }
        // if the node should go left
        if (val < root.val) {
            // send node left
            root.left = this.insertIntoBST(root.left, val);
        }
        
        return root;
    }
}
