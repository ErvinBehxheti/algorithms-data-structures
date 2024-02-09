function areThereDuplicates(...args) {
  const sortedArgs = args.sort();

  let left = 0;
  let right = 1;

  while (left < right) {
    if (right > sortedArgs.length) {
      return false;
    }

    if (sortedArgs[left] === sortedArgs[right]) {
      return true;
    } else {
      left++;
      right++;
    }
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3, 3));
