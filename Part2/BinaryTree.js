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

console.log(tree.find(60))
