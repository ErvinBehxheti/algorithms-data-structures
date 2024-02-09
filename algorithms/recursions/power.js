// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

// 2 * 2 * 2 * 2 = 16

// function power(base, exponent) {
//   if (exponent === 1) {
//     return base;
//   } else if (exponent === 0) {
//     return 1;
//   }

//   let total = 1;

//   for (let i = 1; i <= exponent; i++) {
//     total *= base;
//   }

//   return total;
// }

function recursivePower(base, exponent) {
    if (exponent === 0) return 1;
    return base * recursivePower(base, exponent - 1)
}

console.log(recursivePower(2, 2));
