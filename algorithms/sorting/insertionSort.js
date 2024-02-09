function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0 && arr[j] > arr[i]; j--) {
      let currentVal = arr[i];
      arr[j + 1] = arr[j];
      arr[j] = currentVal;
      i--;
    }
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
