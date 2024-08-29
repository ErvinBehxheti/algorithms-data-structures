function charCount(str) {
  const countObj = {};

  //replace(/\s/g, "").
  const lowerStr = str.toLowerCase();
  for (let i = 0; i < lowerStr.length; i++) {
    const char = lowerStr[i];
    if (countObj[char]) {
      countObj[char] += 1;
    } else {
      countObj[char] = 1;
    }
  }

  return countObj;
}

console.log(charCount("hello"));
