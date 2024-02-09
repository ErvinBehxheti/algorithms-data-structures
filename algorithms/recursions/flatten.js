function flatten(arr){
    if (arr.length === 0) return arr
    return [arr[0]].concat((flatten(arr.slice(1))))
  }

  console.log(flatten([1, [2, [3, 4], [[5]]]]))
  
  // flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
  // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) // [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3