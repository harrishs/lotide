const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");
assertEqual(
  eqArrays([[2, 3], [[[[1]]], [[[1]]]]], [[2, 3], [[[[1]]], [[[1]]]]]),
  true
);
