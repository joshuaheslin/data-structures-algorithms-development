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
      // why not update this.first here?
      debugger;
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
    // check the last item;
    if (ref.value === item) {
      return index;
    }
    return -1;
  }

  print(list = null, sum = 0) {
    if (list) {
      list = list.next;
    } else {
      list = this.first
    }
    console.log(list.value, '       ', sum);
    sum++
    if (list.next) {
      this.print(list, sum);
    }
  }
}

const list = new LinkedList();
list.addFirst(5);
list.addFirst(10);
list.addFirst(15);
list.addLast(8);
list.addLast(10);
list.addLast(12);
list.deleteFirst();
list.deleteLast();
list.print();
console.log('');
console.log(list.contains(8))
console.log(list.indexOf(8))

console.log('list :>> ', list);
