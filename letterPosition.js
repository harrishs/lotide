const letterPositions = function(sentence) {
  const results = {};
  for (let items in sentence) {
    let char = sentence.charAt(items);
    if (char === " ") {
      continue;
    } else {
      let index = getIndex(sentence, char);
      results[char] = index;
    }
  }
  return results;
};

function getIndex(sentence, char) {
  let index = [];
  for (let element in sentence) {
    if (sentence.charAt(element) === char) {
      index.push(Number(element));
    }
  }
  return index;
}

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

assertArraysEqual(letterPositions("hello").e, [1]);