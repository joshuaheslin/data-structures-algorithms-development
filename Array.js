class MyArray {
  constructor(length) {
    this.array = Array(length);
    this.nextIndex = 0;
    this.count = 0;
  }

  insert(item) {
    this.array[this.nextIndex] = item;
    this.nextIndex = this.nextIndex + 1
    this.count++;
  }

  print() {
    for (let i = 0; i < this.count; i++) {
      console.log(this.array[i]);
    }    
  }

  removeAt(index) { 
    if (index < 0) return
    if (index >= this.count) return;

    this.array[index] = null;

    // shift from 4 and up down one.
    for (let i = index; i < this.count; i++) {
      this.array[i] = this.array[i + 1];
    }
    this.nextIndex = this.nextIndex - 1;
    this.count--;
  }

  indexOf(item) {
    let index;
    for (let i = 0; i < this.count; i++) {
      if (this.array[i] === item) {
        index = i;
        break;
      }
    }
    return index || -1;
  }
}

// const array = new MyArray(3);
// array.print();
// array.insert(10);
// array.insert(20);
// array.insert(30);
// array.insert(40);
// array.removeAt(2);
// array.insert(50);
// array.insert(50);
// array.print();
// const i = array.indexOf(30);
// console.log('i :>> ', i);
// console.log('array :>> ', array.array);
// array.removeAt();

module.exports = MyArray;