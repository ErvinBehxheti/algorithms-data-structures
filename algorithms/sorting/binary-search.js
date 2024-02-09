function binarySearch(sortedArr, value) {
  let start = 0;
  let end = sortedArr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (sortedArr[middle] !== value && start <= end) {
    if (sortedArr[middle] > value) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }

  return sortedArr[middle] === value ? middle : -1;
}

console.log(
  binarySearch(
    [1, 2, 3, 4, 5],
    5 // 4
  )
);
