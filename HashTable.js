const LinkedList = require('./LinkedList')

// const list = new LinkedList();
// list.
class Entry {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
}

class HashTable {
  // k: int;
  // v: string;
  // Collisions: chaining

  constructor() {
    this.map = {} // 1,2,3,4,5
    this.count = 0;
  }

  hash(key) {
    return key % 5
  }

  put(Key, value) {
    // Math.abs()
    let key = this.hash(Key)

    const node = new Entry(Key, value)

    if (!this.map[key]) {
      const list = new LinkedList();
      list.addFirst(node)
      this.map[key] = list
      this.count += 1
      return;
    }
    
    // what if it's existing?
    this.map[key].addLast(node)
    this.map[key] = this.map[key]
    this.count += 1
  }

  get(Key) {
    const key = this.hash(Key)
    const list = this.map[key]

    if (!list) return null

    let ref = list.first;
    let index = 0;

    while(ref.next) {
      if (ref.value.key === Key) {
        return index;
      }
      ref = ref.next;
      index++;
    }

    if (ref.value.key === Key) {
      return ref.value.value;
    }
  }

  remove(Key) {
    const key = this.hash(Key)
    const list = this.map[key]

    if (!list) return null

    const item = list.indexOf()

    delete map[key] // ?
  }
}

const ht = new HashTable();
ht.put(11231, 'a')
ht.put(22222, 'b')
ht.put(11111, 'c')
console.log('ht :>> ', ht);

let l = ht.get(11111)
console.log('l :>> ', l);
 l = ht.get(22222)
console.log('l :>> ', l);
 l = ht.get(22223)
console.log('l :>> ', l);

