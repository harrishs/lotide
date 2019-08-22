const takeUntil = function(array, callback) {
  const results = [];
  for (item of array) {
    if (callback(item) === false) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
};

function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function assertArraysEqual(arr1, arr2) {
  let bool = eqArrays(arr1, arr2);
  if (bool === true) {
    console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const results2 = takeUntil(data1, x => x < 5);
assertArraysEqual(results1, [1,2,5,7,2]);
assertArraysEqual(results2, [1,2,5,7,2,24,52,42]);
assertArraysEqual(results2, []);

