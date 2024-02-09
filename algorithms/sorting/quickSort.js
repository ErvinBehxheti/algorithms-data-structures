function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      let tempVal = arr[swapIdx];
      arr[swapIdx] = arr[i];
      arr[i] = tempVal;
    }
  }

  let beforePivot = arr[swapIdx];
  arr[swapIdx] = pivot;
  arr[start] = beforePivot;

  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

const randomNumbers = Array(100000).fill().map(() => Math.random());
console.log(randomNumbers.sort())
