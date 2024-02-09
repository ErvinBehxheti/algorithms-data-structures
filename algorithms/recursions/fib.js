// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55;

function fib(num) {
  if (num === 0 || num === 1) {
    return num;
  }

  return fib(num - 1) + fib(num - 2);
}

console.log(fib(35));
