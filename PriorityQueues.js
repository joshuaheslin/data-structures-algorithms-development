/* Build a priority Queue without using array methods */

class PriorityQueue {
  constructor() {
    this.array = []
    this.count = 0;
  }

  insert(item) {
    if (this.count === 0) {
      this.array[this.count] = item;
      this.count++
      return;
    }


    for (let current = this.count; 0 <= current; current--) {
      console.log('current :>> ', current);
      
      if (current > this.array[current]) {
        // apepend
      }
      // this.array[current]
      const element = this.array[current];
      console.log('element :>> ', element);
    }
    // let currentItem = this.array[this.count];
    // while (currentItem !== 0) {

    // }
  }

  print() {
    console.log(this.array)
  }
}

const q = new PriorityQueue();
q.insert(1);
q.insert(3);
// q.insert(5);
// q.insert(7);
q.print();