function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits;
}

function radixSort(nums) {
  let largestNumDigits = mostDigits(nums);
  for (let k = 0; k < largestNumDigits; k++) {
    let sortedArr = [[], [], [], [], [], [], [], [], [], []];
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      sortedArr[digit].push(nums[i]);
    }
    nums = [].concat(...sortedArr);
  }
  return nums;
}
const randomNumbers = Array(10000000)
  .fill()
  .map(() => Math.random());
console.log(radixSort(randomNumbers));

const array = new Array
// THIS SORTS NUMBERS FASTER THEN THE SORT METHOD OF JAVASCRIPT
