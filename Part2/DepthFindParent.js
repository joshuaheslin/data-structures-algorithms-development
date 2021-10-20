// *
//  * Definition for a binary tree node.
  // function TreeNode(val, left, right) {
  //     this.val = (val===undefined ? 0 : val)
  //     this.left = (left===undefined ? null : left)
  //     this.right = (right===undefined ? null : right)
  // }

  const findParent = (root, x, parent, depth = 0) => {
    if (root === null) return null
  
    if (root.val === x) {
        return [parent, depth]
    }
  
   return findParent(root.left, x, root.val, depth + 1) || findParent(root.right, x, root.val, depth + 1)
  }
  
  /**
   * @param {TreeNode} root
   * @param {number} x
   * @param {number} y
   * @return {boolean}
   */
  var isCousins = function(root, x, y) {
      
      // const xParent = findNode(root, x)
      // const yParent = findDepth(root, y)
      // console.log(xParent)
      // console.log(yParent)
      
      
      const [xParent, xDepth] = findParent(root, x)
      const [yParent, yDepth] = findParent(root, y)
      console.log(xParent, xDepth)
      console.log(yParent, yDepth)
      
      return (xParent !== yParent) && xDepth === yDepth
  };