function sameFrequency(firstNum, secondNum) {
  let firstNumStr = firstNum.toString();
  let secondNumStr = secondNum.toString();

  if (firstNumStr.length !== secondNumStr.length) return false;

  let lookup = {};

  for (let i = 0; i < firstNumStr.length; i++) {
    let num = firstNumStr[i];

    lookup[num] ? (lookup[num] += 1) : (lookup[num] = 1);
  }

  for (let i = 0; i < secondNumStr.length; i++) {
    let num = secondNumStr[i];

    if (!lookup[num]) {
      return false;
    } else {
      lookup[num] -= 1;
    }
  }

  return true;
}

console.log(514, 154); // true
console.log(514, 146); // false
