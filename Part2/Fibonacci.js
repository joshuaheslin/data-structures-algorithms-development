function Fib3(n) {
  const map = new Map();
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (i <= 2) {
      map.set(i, 1)
      sum = 1;
    }
    if (i >= 3) {
      sum = map.get(i - 1) + map.get(i - 2) + map.get(i - 3)
      map.set(i, sum);
    }
  }
  return sum
}

console.log('Fib3(1) :>> ', 0, 1, Fib3(0)); // 1
console.log('Fib3(1) :>> ', 1, 1, Fib3(1)); // 1
console.log('Fib3(2) :>> ', 2, 1, Fib3(2)); // 1
console.log('Fib3(3) :>> ', 3, 3, Fib3(3)); // 3
console.log('Fib3(4) :>> ', 4, 5, Fib3(4)); // 5
console.log('Fib3(5) :>> ', 5, 9, Fib3(5)); // 9