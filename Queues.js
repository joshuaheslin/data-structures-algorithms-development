
const StackArray = require('./StackArray');

class Queue {
  constructor() {
    this.array = []
    this.count = 4;
  }

  add(item) {
    this.array.push(item);
  }

  remove() {
    return this.array.shift();
  }

  reverse() {
    const stack = new StackArray();

    for (let i = 0; i < this.count - 1; i++) {
      const first = this.remove();
      stack.push(first)
    }

    for (let i = 0; i < this.count - 1; i++) {
      const last = stack.pop();
      this.add(last);
    }
  }

  print() {
    console.log(this.array)
  }
}

const q = new Queue();
q.add(1);
q.add(2);
q.add(3);
q.reverse();
q.print();