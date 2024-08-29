function countSum(n) {
  return (n * (n + 1)) / 2;
}
// MUCH SLOWER VERSION
function countSumAlt(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum
}

console.log(countSum(100));
