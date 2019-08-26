// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
const assertEqual = require('./assertEqual');

const head = function(array) {
  return array[0];
};

assertEqual(head(["3",1]), 3);
assertEqual(head(["3",1]), "3");

