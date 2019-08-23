const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function eqArrays(arr1, arr2) {

  // console.log("received:", arr1, "!!!!", arr2)

  // console.log("length:", arr1.length, arr2.length)
  if (arr1.length != arr2.length) {
    // console.log("length:", arr1, arr2)
    return false;
  }
    for (let i = 0; i < arr1.length; i++) {
      // console.log("processing:", arr1[i], arr2[i])
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        if (arr1[i].length != arr2[i].length) {
          return false;
        }
       eqArrays(arr1[i], arr2[i]);
       continue;
      } 
      if (arr1[i] === arr2[i]) {
        return false;
      } 
    }
    return true;
}

assertEqual((eqArrays([
  [2, 3], [[[[1]]], [[[1]]]]
],
   [
     [2, 3], 
     [[[[1]]],[[[1]]]]
    ])), true);
console.log(eqArrays([[2, 3], [4,]], [[2, 3, [[[1]]]], [4, 5]]));
