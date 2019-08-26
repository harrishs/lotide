// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
const assertArraysEqual = require('./assertArraysEqual');
const tail = function(array) {
  let arr = [];
  for (let i = 1; i < array.length; i++) {
    arr[i - 1] = array[i];
  }
  return arr;
};
module.exports = tail;