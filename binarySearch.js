//Search for a number within an array using the binary search algorithm.
//Binary Search looks for an item in a list by looking at a
//list's center, then looking at the center of the left or right half,
//continually dividing the search space in half until it finds what it's
//looking for.


function binarySearch(arr, num) {
  //setting up information to be used in the recursicve function
  const orgLength = arr.length
  let length = arr.length-1
  let middle= (0 + Math.floor(length/2))
  //used to exit the call stack and display the index of the array
  let index = 0;

//binary recursive search
  function search(length, middle) {
    if (num !== arr[middle] && num > arr[middle]) {
      //debugger;
      length = orgLength - middle -1
      middle = middle + Math.floor((orgLength - middle)/2)
      search(length, middle)
    }else if (num !== arr[middle] && num < arr[middle]) {
      length = Math.floor(length/2);
      //makes sure we do not get stuck indeffinetly moving 0 positions on the index
      if (length <= 1) {
        length = 2;
      }
      middle = middle - Math.floor(length/2)
      search(length, middle)
    }else{
      //set middle to index to exit the function
      index = middle;
      return index;
    }
  }
  search(length, middle)
  return index
}

const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
console.log(binarySearch(numbers, 50));
// => 8
