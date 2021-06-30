class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  static first;
  static last;
  static count;

  constructor() {
    this.first = null;
    this.last = null;
    this.count = 0;
  }

  addFirst(value) {
    const node = new Node(value)

    // this node is now first so the initial this.first pointer is moved to the front node
    node.next = this.first

    // now the first pointer should point to the new node.
    this.first = node;

    if (this.last === null) {
      this.last = node;
    }

    this.count++;
  }

  addLast(value) {
    const node = new Node(value);

    if (this.first === null || this.last === null) {
      this.last = node;
      this.first = node;
    } else {
      this.last.next = node
      this.last = node;
    }
    
    this.count++
  }

  deleteFirst() {
    if (this.first === null) return;

    const second = this.first.next;
    //clear the ref between first and second
    this.first.next = null;
    this.first = second;
    this.count--;
  }

  getPreviousNode(node) {
    let ref = this.first;
    while(ref.next) {
      if (ref.next === node) {
        return ref;
      }
      ref = ref.next;
    }

    return null;
  }

  deleteLast() {
    const secondLast = this.getPreviousNode(this.last);

    secondLast.next = null;
    this.last = secondLast;
    
    this.count--;
  }

  contains(item) {
    return this.indexOf(item) !== -1;
  }

  indexOf(item) {
    let ref = this.first;
    let index = 0;

    while(ref.next) {
      if (ref.value === item) {
        return index;
      }
      ref = ref.next;
      index++;
    }
    if (ref.value === item) {
      return index;
    }
    return -1;
  }

  print(list = null) {
    if (list) {
      list = list.next;
    } else {
      list = this.first
    }
    console.log(list.value);
    if (list.next) {
      this.print(list);
    }
  }

  size() {
    console.log(this.count);
    return this.count;
  }

  getNodeFromIndex(index) {
    let ref = this.first;
    let i = 0;
    while(ref.next) {
      if (i === index) {
        return ref;
      }
      ref = ref.next;
      i++;
    }

    // edge case when it's at the end
    if (i === index) {
      return ref;
    }

    return null;
  }

  // O(n^2)
  reverse2() {
    let newList = new LinkedList();
    for (let i = this.count - 1; i >= 0; i--) {
      // for each element
      // the first one is last add to new array
      const item = this.getNodeFromIndex(i);
      if (i === this.count - 1) {
        newList.addFirst(item.value);
        continue;
      }
      newList.addLast(item.value);
    }

    // then update the list refs
    this.first = newList.first;
    this.last = newList.last;
  }

  // O(n)
  reverse() {
    // [10, 20, 30]
    // p   c   n

    // get ref for 1st element
    let previous = this.first;

    // get ref for 2nd element
    let current = this.first.next;

    
    while(previous.next) {
      // get ref for 3rd element
      const next = current.next;
      
      // reverse the link
      current.next = previous;
      previous = current;
      current = next;

    }

    this.first = previous;

  }
}

const list = new LinkedList();
list.addFirst(1);
list.addFirst(2);
list.addFirst(3);
list.addLast(10);
list.addLast(20);
list.addLast(30);
list.deleteFirst();
list.deleteLast();
list.print();
console.log('');

list.reverse();
// list.addFirst(3);
// list.addLast(20);
// list.addLast(30);
// list.addLast(40);
// list.addFirst(4);
// list.addFirst(5);
// list.deleteFirst();
// list.deleteLast();
// add last is borken
list.print();
console.log('');
// list.reverse();
// list.print();
// console.log('');
// console.log(list.contains(8))
// console.log(list.indexOf(8))
// list.size();

// console.log('list :>> ', list);
