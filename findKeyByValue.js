const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function findKeyByValue(object, value) {
  let keys = Object.keys(object);
  for (let items in keys) {
    if (object[keys[items]] === value) {
      return keys[items];
    }
  }
}
