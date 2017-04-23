//Return the union of two sets.

function setUnion(a,b) {
  console.log(a);
  // combine arrays and filter out what matches
  const unionArr = a.concat(b).filter(function(elem, index, arr) {
    return index === arr.indexOf(elem);
})

  console.log(unionArr);
}


const a = [1, 2, 3, 4]
const b = [2, 4, 6, 8]
setUnion(a, b)
// => [1, 2, 3, 4, 6, 8]
