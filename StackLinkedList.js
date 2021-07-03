class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class StackLinkedList {
  static first;
  static last;
  static count;

  constructor() {
    this.first = null;
    this.last = null;
    this.count = 0;
  }

  // push (add to end)
  push(value) {
    const node = new Node(value);

    if (!this.first) {
      this.first = node;
      this.last = node;
    }
    this.last.next = node;
    this.last = node;
    this.count++;
  }

  // pop (remove from end)
  pop() {
    const initialLast = this.last;

    let current = this.first;

    let i = 0;
    while(current) {
      if (i === this.count - 2) { //second last
        this.last = current
        this.last.next = null;
        break;
      }
      current = current.next;
      i++;
    }

    this.count--;
    return initialLast.value;
  }

  peek() {
    return this.last;
  }

  isEmpty() {
    return this.count === 0;
  }

  print() {
    let current = this.first;
    while(current) {
      console.log(current.value);
      current = current.next
    }
  }
}

const stack = new StackLinkedList();

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
let v = stack.pop();
console.log('v :>> ', v);
stack.print();