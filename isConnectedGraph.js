/*
Check if a graph is connected or disconnected. Return true or false.
A graph is connected when there is a path between every pair of vertices.
*/
let paths = []
let isConnected = []

function isConnectedGraph(graph) {

  makePaths(graph)

//primming to check if paths connect
  isConnected = paths[0]
  paths.shift()

  checking(paths)

  isConnected = isConnected.split(",").sort()

  isConnected = isConnected.filter( function( item, index, inputArray ) {
    return inputArray.indexOf(item) == index;
  });

  if (isConnected.join(",") == Object.keys(graph).join(",")) {
    return true
  }else {
    return false
  }
}

const graphB = {
  'a': ['b'],
  'b': ['c'],
  'c': ['d'],
  'd': ['e'],
  'e': ['e'],
}

console.log(isConnectedGraph(graphB));

function makePaths(obj) {
  let graphKey = Object.keys(obj);

  for (let i = 0; i < graphKey.length; i++) {
    paths[i] = [graphKey[i]]
    for (let j = 0; j < obj[graphKey[i]].length; j++) {
    paths[i].push(obj[graphKey[i]][j])
    // paths[i].sort()
    }
  }
}

function checking(arr) {
  if (paths.length === 0) {
    return isConnected
  }else {
  for (let i = 0; i < arr.length; i++) {
    let check = arr[0][i]

    if (isConnected.includes(check) && arr[0] !== undefined) {
      isConnected += ","+arr[0];
      paths.splice(0,1)
      checking(arr);
      }
    }
  }
}
