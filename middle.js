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

function middle(array) {
  let middle;
  let mid = [];
  if (array.length % 2 !== 0) {
    middle = parseInt((array.length / 2));
    mid = [array[middle]];
  } else {
    middle = (array.length / 2) - 1;
    mid = [array[middle], array[middle + 1]];
  }
  return mid;
}