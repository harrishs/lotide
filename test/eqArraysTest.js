const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");
const assert = require("chai").assert;

describe("#eqArrays", () => {
  it("returns true for [1,2,3] and [1,2,3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
});

module.exports = eqArrays;
