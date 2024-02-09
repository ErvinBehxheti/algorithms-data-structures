function capitalizeFirst(arr) {
  if (arr.length === 0) {
    return arr;
  }

  let firstItem = arr[0][0].toUpperCase() + arr[0].slice(1);

  return [firstItem].concat(capitalizeFirst(arr.slice(1)));
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
