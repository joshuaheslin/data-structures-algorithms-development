class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  static first;
  static last;
  constructor() {
    this.first = null;
    this.last = null;
  }

  addFirst(value) {
    // create node
    const node = new Node(value)

    // this node is now first so the initial this.first pointer is moved to the front node
    node.next = this.first

    // now the first pointer should point to the new node.
    this.first = node;
  }

  addLast(value) {
    const node = new Node(value);
    // console.log('node :>> ', node);

    if (this.first === null) {
      this.first = node;
      return;
    }

    // no items return, add the node
    if (this.last === null) {
      // first item in array
      this.last = node;
      // and for through each item only you see .next === null and update to .next = node;
      if (this.first.next === null) {
        this.first.next = node;
        return;
      }

      let ref = this.first;
      while (ref.next) {
        ref = ref.next;
        if (ref.next === null) {
          ref.next = node;
          break;
        }
      }
      return;
    }

    let list = this.first;
    while (list.next) {
      list = list.next;
    }
    list.next = node;
    this.last = node;
  }

  deleteFirst() {
    const ref = this.first;
    if (ref.next) {
      this.first = ref.next;
    }
  }

  deleteLast() {
    let ref = this.first;
    // iterate to the entire list and update the second last pointer
    while(ref.next) {
      if (ref.next.next === null) {
        // we are at the second last one.
        ref.next = null;
        this.last = ref;
        break;
      }
      ref = ref.next;
    }
  }

  contains(item) {
    let ref = this.first;

    while(ref.next) {
      if (ref.value === item) {
        return true;
      }
      ref = ref.next;
    }
    // check the last item;
    return ref.value === item;
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
    // check the last item;
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
}

const list = new LinkedList();
list.addLast(10);
// list.print();
// console.log('');
list.addFirst(5);
// list.addFirst(10);
list.addFirst(15);
list.addLast(8);
list.addLast(10);
list.deleteFirst()
list.deleteLast()
list.print();
console.log('');
console.log(list.contains(8))
console.log(list.indexOf(8))

console.log('list :>> ', list);
