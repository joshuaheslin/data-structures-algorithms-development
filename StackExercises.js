class StackExercises {
  stack = [];

  reverse(string) {
    for (let i in string) {
      this.stack.push(string.charAt(i))
    }

    let str = '';
    while (this.stack.length) {
      str += this.stack.pop()
    }
    return str;
  }

  isBalanced(string) {
    for (let i of string) { 
      if (/\(|\{|\<|\[/.test(i)) {
        this.stack.push(i);
      }
      if (/\)|\}|\>|\]/.test(i)) {
        const top = this.stack.pop()

        if (i === ')' && top !== '(') return false;
        if (i === '>' && top !== '<') return false;
        if (i === ']' && top !== '[') return false;
        if (i === '}' && top !== '{') return false;
      }
    }
    return this.stack.length === 0;
  }
}

const stack = new StackExercises();

// * Check if string is balanced * //
const result = stack.isBalanced('({1} + [2])');
console.log(result);


// // * Reverse a string *//
const item = stack.reverse('abcd')
console.log(item);