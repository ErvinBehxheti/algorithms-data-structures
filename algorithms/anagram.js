function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let frequency1 = {};
  let frequency2 = {};

  for (let char of str1) {
    frequency1[char] = (frequency1[char] || 0) + 1;
  }

  for (let char of str2) {
    frequency2[char] = (frequency2[char] || 0) + 1;
  }

  for (let key in frequency1) {
    if (!(key in frequency2)) {
      return false;
    }

    if (frequency1[key] !== frequency2[key]) {
      return false;
    }
  }

  return true;
}

console.log(anagram("azz", "aaz"));
