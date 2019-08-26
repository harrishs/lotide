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

function without(array, remove) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    for (let element of remove) {
      if (element === array[i]) {
        break;
      } else if (element !== remove[remove.length - 1]) {
        continue;
      } else {
        newArr.push(array[i]);
      }
    }
  }
  return newArr;
}

module.exports = without;
