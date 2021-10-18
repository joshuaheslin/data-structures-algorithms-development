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
    // clear the ref between first and second
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
    if (!this.first) return;

    // get ref for 1st, 2nd element
    let previous = this.first;
    let current = this.first.next;

    while(current) {
      const next = current.next;
      
      // reverse the link
      current.next = previous;
      
      // reset the pointers
      previous = current;
      current = next;
    }

    // set the last pointer
    this.last = this.first;
    this.last.next = null;

    // set the first pointer to the last element
    this.first = previous;
  }

  getKthFromStart(k) {
    if (k < 1) throw new Error('Boundary constraint: k > 0');

    let target;
    let current = this.first.next;
    let number = 0;
    while (current) {
      if (number === k - 1) {
        target = current;
        return;
      }
      current = current.next;
      number++;
    }
    return target.value;
  }

  getKthFromEnd(k) {
    if (k < 0 || k > this.count - 1) throw new Error('Boundary constraint: 0 < k > count-1');

    let current = this.first;
    let target = this.first;

    let number = 0;
    while (current.next) {
      if (number >= k) {
        target = target.next;
      }
      current = current.next;
      number++;
    }

    return target.value;
  }
}

module.exports = LinkedList;

const list = new LinkedList();
list.addFirst(1);
list.addFirst(2);
list.addFirst(3);
list.addLast(10);
list.addLast(20);
list.addLast(30);
list.addLast(40);
// list.deleteFirst();
// list.deleteLast();
// list.print();
// console.log('');

// list.reverse();
// console.log('');

// console.log(list.getKthFromEnd(2))
// console.log('');

// list.addFirst(3);
// list.addLast(20);
// list.addLast(30);
// list.addLast(40);
// list.addFirst(4);
// list.addFirst(5);
// list.deleteFirst();
// list.deleteLast();
// list.print();
// console.log('');
// list.reverse();
// list.print();
// console.log('');
// console.log(list.contains(8))
// console.log(list.indexOf(8))
// list.size();

// console.log('list :>> ', list);
