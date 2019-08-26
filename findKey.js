const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  let keys = Object.keys(object);
  for (item in keys) {
    if (callback(object[keys[item]]) == true) {
      return keys[item];
    }
  }
};
module.exports = findKey;
