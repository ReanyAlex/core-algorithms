//Return the symmetric difference of two sets.

function setSymmetricDifference(a,b) {
  const symDiff = [];
  /*filter through the a array and
  push only what does not match in the b array*/
  a.filter(function(elem) {
    if (b.indexOf(elem) === -1) {
      symDiff.push(elem)
    }
  });
  /*filter through the b array and
  push only what does not match in the a array*/
  b.filter(function(elem) {
    if (a.indexOf(elem) === -1) {
      symDiff.push(elem);
    }
  });

  return symDiff
}

const a = [1, 2, 3, 4]
const b = [2, 4, 6, 8]
console.log(setSymmetricDifference(a, b));
// => [1, 3, 6, 8]
