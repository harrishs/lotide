const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");
function middle(array) {
  let middle;
  let mid = [];
  if (array.length % 2 !== 0) {
    middle = parseInt(array.length / 2);
    mid = [array[middle]];
  } else {
    middle = array.length / 2 - 1;
    mid = [array[middle], array[middle + 1]];
  }
  return mid;
}

module.exports = middle;
