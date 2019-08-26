const assertEqual = require("../assertEqual");
const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
  it("returns [1,2,3,4,5] for [1,1,2,3,4,5]", () => {
    assert.deepEqual(tail([1, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  });
});
