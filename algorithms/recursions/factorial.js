//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num) {
  let total = 1;

  for (let i = num; i > 1; i--) {
    total *= i;
  }

  return total;
}

function recursiveFactorial(num) {
  if (num < 0) return 0;
  if (num <= 1) return 1;
  return num * recursiveFactorial(num - 1);
}

console.log(recursiveFactorial(4));
