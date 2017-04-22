//Return an array of Fibonacci numbers to the nth position.

function fibonacci(n) {
  fibArr = [0,1]
  function findFib() {
    if (fibArr.length !== n) {
      fibArr.push(fibArr[fibArr.length-1]+fibArr[fibArr.length-2]);
      return findFib()
    }
  }

  if (n <= 0) {
    return "please use a number greater then 0"
  }else if (n === 1) {
    return [0]
  }else if (n === 2) {
    return [0,1]
  }else {
    findFib()
  }
  return fibArr;
}

console.log(fibonacci(10));
// => [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
