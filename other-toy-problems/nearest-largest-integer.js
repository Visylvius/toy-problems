//Write a function, `nearest_larger(arr, i)` which takes an array and an
//index.  The function should return another index, `j`: this should
//satisfy:
//
//(a) `arr[i] < arr[j]`, AND
//(b) there is no `j2` closer to `i` than `j` where `arr[i] < arr[j2]`.
//
//In case of ties (see example below), choose the earliest (left-most)
//of the two indices. If no number in `arr` is larger than `arr[i]`,
//return `nil`.
//

// set up variable largestIndex = 0;
// loop i < arr.length;
// if arr[idx] < arr[i]
//then we set the new index to i
// return new index
function nearest_larger(arr, idx){
 var largestIndex = null;
 for (var i = 1; i < arr.length; i++) {
   // console.log('arr[idx]', arr[idx], 'arr[idx - i]', arr[idx - i], 'i', i)
   // console.log(Math.abs(idx - i), 'idx - i');
    if (idx - i >= 0 && arr[idx] < arr[idx - i]) {
     largestIndex = idx - i;
     console.log('largestIndex', largestIndex);
     break;
    }
    if (idx + i < arr.length && arr[idx] < arr[idx + i]) {
     largestIndex = idx + i;
     console.log('largestIndex', largestIndex);
     break;
    }
 }
 console.log(largestIndex, 'largestIndex');
 return largestIndex;
}

console.log("Tests for #nearest_larger")
console.log("===============================================")
   console.log( "nearest_larger([2,3,4,8], 2) == 3: "  + (nearest_larger([2,3,4,8], 2) == 3))
   console.log( "nearest_larger([2,8,4,3], 2) == 1: "  + (nearest_larger([2,8,4,3], 2) == 1))
   console.log( "nearest_larger([2,6,4,8], 2) == 1: "  + (nearest_larger([2,6,4,8], 2) == 1))
   console.log( "nearest_larger([2,6,4,6], 2) == 1: "  + (nearest_larger([2,6,4,6], 2) == 1))
   console.log( "nearest_larger([8,2,4,3], 2) == 0: "  + (nearest_larger([8,2,4,3], 2) == 0))
   console.log( "nearest_larger([2,4,3,8], 1) == 3: "  + (nearest_larger([2,4,3,8], 1) == 3))
   console.log( "nearest_larger([2, 6, 4, 8], 3) == nil: "+ (nearest_larger([2, 6, 4, 8], 3) == null))
   console.log( "nearest_larger([2, 6, 9, 4, 8], 3) == 2: "+ (nearest_larger([2, 6, 9, 4, 8], 3) == 2))
console.log("===============================================")
