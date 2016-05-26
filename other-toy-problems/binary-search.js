function binarySearch (array, target) {
  var index = -1;
  var recurse = function(sp, ep) {
    var midpoint = Math.floor((sp + ep) /2);
    console.log('midpoint', midpoint);
    console.log('start point', sp);
    console.log('end point', ep);
    if (array[midpoint] === target) {
      index = midpoint;
      console.log("FOUND");
      return;
    }
    if (sp > ep) {
      return;
    }
    if (array[midpoint] > target) {
      recurse(sp, midpoint - 1);
    } else if (array[midpoint] < target) {
      recurse(midpoint + 1, ep);
    }
  };
  recurse(0, array.length - 1);
  return index;
}
