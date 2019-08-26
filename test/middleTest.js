const middle = require("../middle");
const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");
const assert = require("chai").assert;

describe("#middle", () => {
  it("returns 3 for [1,3,5]", () => {
    assert.deepEqual(middle([1, 3, 5]), [3]);
  });
});
