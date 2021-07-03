// Implement stack from an array from scratch
// pop
// push
// peek
// isEmpty

class StackArray {
  constructor() {
    this.count = 0;
    this.array = [];
  }

  push(item) {
    this.array[this.count] = item;
    this.count++;
  }

  pop() {
    if (this.count === 0) return;
    const item = this.array[this.count - 1];
    this.count--;
    return item;
  }

  peek() {
    return this.array[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  print() {
    let string = '';
    for (let i = 0; i <= this.count - 1; i++) {
      string += this.array[i]
      string += ' '
    }
    console.log(string);
  }
}

const stack = new StackArray();
stack.push(1);
stack.push(2);
const p = stack.peek();
console.log('peek :>> ', p);
stack.push(3);
stack.pop();
let is = stack.isEmpty();
stack.pop();
stack.pop();
stack.pop();
stack.print();
is = stack.isEmpty();
console.log('stack :>> ', stack);
console.log('isEmpty :>> ', is);