/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    let count = 0
  
    function search(node, depth) {
        if (!node) {
            return
        }
        count = Math.max(count, depth)
        depth++
        
        if (node.children) {
            node.children.map(child => {
                search(child, depth)
            })
        }
    }
    
    search(root, 1)
    
    return count
};