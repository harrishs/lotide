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

function flatten(array) {
  let newArr = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      for (let i of element) {
        newArr.push(i);
      }
    } else {
      newArr.push(element);
    }
  }
  return newArr;
}
