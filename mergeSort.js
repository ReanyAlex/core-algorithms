//Sort an array of numbers using the merge sort algorithm.
let mergeArr = []

function mergeSort(arr) {

  const length = arr.length
  const middle = Math.floor(arr.length/2)
  let left = arr.slice(0,middle).sort(function(a, b){return a-b});
  let right = arr.slice(middle,length).sort(function(a, b){return a-b});

  while (left.length != 0 && right.length != 0) {
    merge(left, right)
  }

//take care of the last number bug is caused by the while loop
  if (left.length === 0 ) {
    mergeArr.push(right[0])
  }else {
    mergeArr.push(left[0])
  }

return mergeArr
}

console.log(mergeSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9]));
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function merge(left, right) {
  if (left[0] < right[0]) {
    mergeArr.push(left[0])
    left.shift()
  }else {
    mergeArr.push(right[0])
    right.shift()
  }
}
