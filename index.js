let middle = require("./middle");
let tail = require("./tail");
let takeUntil = require("./takeUntil");
let without = require("./without");
module.exports = {
  assertArraysEqual: require("./assertArraysEqual"),
  assertEqual: require("./assertEqual"),
  assertObjectsEqual: require("./assertObjectsEqual"),
  countLetters: require("./countLetters"),
  countOnly: require("./countOnly"),
  eqArrays: require("./eqArrays"),
  eqObjects: require("./eqObjects"),
  findKey: require("./findKey"),
  findKeyByValue: require("./findKeyByValue"),
  flatten: require("./flatten"),
  head: require("./head"),
  letterPosition: require("./letterPosition"),
  map: require("./map"),
  middle,
  tail,
  takeUntil,
  without
};
