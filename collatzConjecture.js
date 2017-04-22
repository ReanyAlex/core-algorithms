/*Return the Collatz sequence for a given number.

The Collatz sequence for any positive integer n is defined as follows:

If n is even, divide it by 2 to get n / 2. If n is odd,
multiply it by 3 and add 1 to obtain 3n + 1.
Repeat the process until you reach 1.
*/

function collatzConjecture(n) {
  const numArr = [n]

  function doMath() {
    if (numArr[numArr.length-1] !== 1) {
      if (numArr[numArr.length-1]%2 === 0) {
        numArr.push(numArr[numArr.length-1]/2)
        return doMath();
      }else
      numArr.push(numArr[numArr.length-1]*3 + 1)
      return doMath();
    }
  }
  doMath()
  return numArr;
}

console.log(collatzConjecture(7));
// => [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]
