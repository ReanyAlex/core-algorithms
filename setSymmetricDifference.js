//Return the symmetric difference of two sets.

function setSymmetricDifference(a,b) {
  const symDiff = [];
  /*filter through the a array and
  push only what does not match in the b array*/
  symDiff.push(a.filter(function(elem) {
    if (b.indexOf(elem) === -1) {
      return elem
    }
  }));
  /*filter through the b array and
  push only what does not match in the a array*/
  symDiff.push(b.filter(function(elem) {
    if (a.indexOf(elem) === -1) {
      return elem
    }
  }));

  return symDiff.join(",")
}

const a = [1, 2, 3, 4]
const b = [2, 4, 6, 8]
console.log(setSymmetricDifference(a, b));
// => [1, 3, 6, 8]
