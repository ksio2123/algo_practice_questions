/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    const helper = (node, sum) => {
        if (node === null) {
            return sum;
        }
        let newSum = helper(node.right, sum);
        node.val += newSum;
        newSum = helper(node.left, node.val);
        return newSum;
    }

    helper(root, 0);
    return root;
};