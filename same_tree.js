/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    const helper = (a,b) => {
        if (a === null && a === b) {
            return true;
        }
        if (a?.val !== b?.val) {
            return false;
        } 
        let left = helper(a.left, b.left);
        let right = helper(a.right, b.right);
        return left && right;
    }
    return helper(p,q);
};

var isSameTree2 = function(p, q) {
    
    let queue = [[p,q]];
    while (queue.length > 0) {
        let [p, q] = queue.pop();
        if (p === null && p === q) {
            continue;
        } 
        if (p?.val !== q?.val) {
            return false;
        }
        queue.push([p.left, q.left]);
        queue.push([p.right, q.right]);
    }

    return true;
};

