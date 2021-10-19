// 20mins - 7:48

// Tree (root)
// Node (value, leftChild, rightChild)
// insert(value)
// find(value):boolean

// var current = root;
// while(current === value)
//   current = current.leftChild;

class Node {
  constructor(value, leftChild, rightChild) {
    this.value = value;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traversePreOrderBase() {
    return this.traversePreOrder(this.root);
  }

  traversePreOrder(root) {
    if (!root) return;
    console.log(root.value);
    this.traversePreOrder(root.leftChild);
    this.traversePreOrder(root.rightChild);
  }

  traverseInOrderBase() {
    return this.traverseInOrder(this.root);
  }

  traverseInOrder(root) {
    if (!root) return;
    this.traverseInOrder(root.leftChild);
    console.log(root.value);
    this.traverseInOrder(root.rightChild);
  }

  traversePostOrderBase() {
    return this.traversePostOrder(this.root);
  }

  traversePostOrder(root) {
    if (!root) return;
    this.traversePostOrder(root.leftChild);
    this.traversePostOrder(root.rightChild);
    console.log(root.value);
  }

  traverseLevelOrderBase() {
    return this.traverseLevelOrder(this.root);
  }

  traverseLevelOrder(root) {
    for (let i = 0; i <= this.height(root); i++) {
      const items = this.printAtDistanceBase(i);
      for (let i = 0; i < items.length; i++) {
        console.log(items[i]);
      }
    }
  }

  heightBase() {
    if (!this.root) return -1;
    return this.height(this.root);
  }

  height(root) {
    if (!root) return 0;
    if (root.leftChild === null && root.leftChild === null) return 0;
    return 1 + Math.max(this.height(root.leftChild), this.height(root.rightChild))
  }

  minBase() {
    return this.min(this.root)
  }

  // O(n)
  min(root) {
    if (!root) return 0;
    if (!root.leftChild && !root.rightChild) return 0;
    const left = this.min(root.leftChild)
    const right = this.min(root.rightChild);
    return Math.min(Math.min(left, right), root.value)
  }

  // 9:21 10mins
  equals(tree) {
    return this.equalsRoot(this.root, tree.root);
  }

  equalsRoot(root, otherRoot) {
    if (!root || !otherRoot) return true
    if (
      // preorder traversal
      root.value === otherRoot.value
      && this.equalsRoot(root.leftChild, otherRoot.leftChild) 
      && this.equalsRoot(root.rightChild, otherRoot.rightChild)
    ) {
      return true
    } else {
      return false
    }
  }

  swapRoot() {
    const temp = this.root.leftChild;
    this.root.leftChild = this.root.rightChild;
    this.root.rightChild = temp;
  }

  // 10 mins
  validateBase() {
    return this.validate(this.root);
  }

  validate(root, min, max) {
    if (!root) return true

    if (root.value < min || root.value > max) {
      return false;
    }

    return this.validate(root.leftChild, min, root.value - 1) 
      && this.validate(root.rightChild, root.value + 1, max)
  }

  printAtDistanceBase(distance) {
    const array = []
    this.printAtDistance(this.root, distance, array);
    return array;
  }

  printAtDistance(root, distance, array) {
    if (!root) return;
    if (distance === 0) {
      // console.log(root.value);
      array.push(root.value)
      return;
    }

    this.printAtDistance(root.leftChild, distance - 1, array);
    this.printAtDistance(root.rightChild, distance - 1, array);
  }

  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;

    while(current.value !== value) {
      if (value < current.value) {
        if (!current.leftChild) {
          current.leftChild = node;
          return;
        }
        current = current.leftChild;
      }
      if (value > current.value) {
        if (!current.rightChild) {
          current.rightChild = node;
          return;
        }
        current = current.rightChild;
      }
    }
    return current;
  }

  find(value) {
    if (!this.root) return;

    let current = this.root;

    while(current.value !== value) {
      if (current.leftChild && value <= current.leftChild.value) {
        if (value === current.leftChild.value) {
          return current.leftChild;
        }
        current = current.leftChild;
      }
      if (current.rightChild && value >= current.rightChild.value) {
        if (value === current.rightChild.value) {
          return current.rightChild;
        }
        current = current.rightChild;
      }
    }
    return current;
  }
}

const tree = new Tree();
tree.insert(20)
tree.insert(10)
tree.insert(30)
tree.insert(40)
tree.insert(50)
tree.insert(60)
tree.insert(5)
tree.insert(61)

// console.log(tree.validateBase());
console.log(tree.traverseLevelOrderBase());
// console.log(tree.printAtDistanceBase(1))

// const tree2 = new Tree();
// tree2.insert(20)
// tree2.insert(10)
// tree2.insert(30)
// tree2.insert(40)
// tree2.insert(50)
// tree2.insert(60)
// tree2.insert(5)
// tree2.insert(61)

// console.log(tree2.equals(tree));

// tree.traversePreOrderBase();
// tree.traverseInOrderBase();
// tree.traversePostOrderBase();
// console.log(tree.heightBase())
// console.log(tree.minBase())
// console.log(tree.find(60))
