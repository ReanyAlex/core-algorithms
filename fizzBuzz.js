/*
Return an array of numbers from 1 to 100.

For multiples of three, use the string Fizz instead of the number and for multiples of five replace with Buzz.

For numbers which are multiples of both three and five replace with FizzBuzz.
*/

function fizzBuzz() {
  let arrFB = [];

  for (var i = 1; i <= 100; i++) {
    if (i%3 === 0 && i%5 === 0) {
      arrFB.push('FizzBuzz');
    }else if (i%5 === 0) {
      arrFB.push('Buzz')
    }else if (i%3 === 0) {
      arrFB.push('Fizz')
    }else {
      arrFB.push(i);
    }
  }
  return arrFB;
}

console.log(fizzBuzz());
