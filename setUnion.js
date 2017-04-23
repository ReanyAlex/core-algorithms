//Return the union of two sets.

function setUnion(a,b) {
  // combine arrays and filter out what matches
  return a.concat(b).filter(function(elem, index, arr) {
    return index === arr.indexOf(elem);
  })
}


const a = [1, 2, 3, 4]
const b = [2, 4, 6, 8]
console.log(setUnion(a, b));
// => [1, 2, 3, 4, 6, 8]
