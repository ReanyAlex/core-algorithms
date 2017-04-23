//Sort an array of numbers using the bubble sort algorithm.

function bubbleSort(arr) {
  let sortArr = arr;
  let length = arr.length-1
  let compareIndex = 0;

  function sort(sortArr, length) {
    /*everytime we go through the array we need to check one fewer element
    so when we get to 0 length we return the ordered array*/
    if (length === 0) {
      return sortArr
    }
    // recursively go through array and swap elements
    if (sortArr[compareIndex] > sortArr[compareIndex+1]) {
      let holder = arr[compareIndex]
      sortArr[compareIndex] = sortArr[compareIndex+1]
      sortArr[compareIndex+1] = holder
      compareIndex +=1
      /* if we reached the end restart from
      the begining and shorten the length checked*/
      if (compareIndex === length) {
        compareIndex = 0
        length--
      }
      sort(sortArr, length)
      // no need to swap so move up the array by one
    }else {
      compareIndex +=1;
      /* if we reached the end restart from
      the begining and shorten the length checked*/
      if (compareIndex === length) {
        compareIndex = 0
        length--
      }
      sort(sortArr, length)
    }
  }
  sort(sortArr, length)
  return sortArr
}




console.log(bubbleSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9]));
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
