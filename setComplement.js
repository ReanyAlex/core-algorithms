//Return the intersection of two sets.

function setComplement(a,b) {

  /*filter through the b array and 
  return only what does not match in the a array*/

  return b.filter(function(elem) {
    if (a.indexOf(elem) === -1) {
      return elem
    }
  })
}

const a = [1, 2, 3, 4]
const b = [2, 4, 6, 8]
console.log(setComplement(a, b));
// => [6, 8]
