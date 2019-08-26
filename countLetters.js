const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(allItems) {
  const counts = {};
  for (const element of allItems) {
    counts[element] = element.length;
  }
  return counts;
};
module.exports = countLetters;
