//Return the intersection of two sets.

function setUnion(a,b) {
  // combine arrays and filter out what doesn't match
  const unionArr = a.concat(b).filter(function(elem, index, arr) {
    return index !== arr.indexOf(elem);
})

  console.log(unionArr);
}

const a = [1, 2, 3, 4]
const b = [2, 4, 6, 8]
setIntersection(a, b)
// => [2, 4]
