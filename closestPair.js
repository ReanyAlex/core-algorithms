/*
Given a set of points on a 2-dimensional plane, return the pair of points with the least distance between them.
*/
let shortestDist = {pair: [[0,0],[0,0]], distance: undefined}

function closestPair(location) {
  let length = location.length
  if (length > 0) {
    for (var i = 1; i < length; i++) {

      let x1 = location[0][0];
      let y1 = location[0][1];
      let x2 = location[i][0];
      let y2 = location[i][1];

      let distance = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));

      if (shortestDist.distance === undefined || shortestDist.distance > distance) {
        shortestDist.pair[0][0] = x1
        shortestDist.pair[0][1] = y1
        shortestDist.pair[1][0] = x2
        shortestDist.pair[1][1] = y2
        shortestDist.distance = distance
      }
    }

    location.shift()
    closestPair(location)
  }
  return shortestDist;
}


const points = [
  [2,1],
  [4,0],
  [-1,0],
  [5,3],
  [-2,5],
  [3,-3],
  [-2,0],
  [3,4],
  [5,-4],
  [0,-2]
]

console.log(closestPair(points));
