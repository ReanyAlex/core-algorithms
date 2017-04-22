//Return the factorial of a number.

//recursive with a global variable
/*let total = 1

function factorial(n) {
  if (n > 0) {
    total *= n;
    return factorial(n-1)
  }else {
    return total;
  }
}

console.log(factorial(5));
*/

//for loop no global variables
function factorial(n) {
  let total = 1;
  for (let i = n; i > 0; i--) {
    total *= i;
  }
  return total;
}

console.log(factorial(5));
