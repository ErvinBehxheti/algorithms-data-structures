function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequency1 = {};
  let frequency2 = {};

  for (let val of arr1) {
    frequency1[val] = (frequency1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequency2[val] = (frequency2[val] || 0) + 1;
  }

  for (let key in frequency1) {
    if (!(key ** 2 in frequency2)) {
      return false;
    }

    if (frequency2[key ** 2] !== frequency1[key]) {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 3], [1, 4, 9]));
