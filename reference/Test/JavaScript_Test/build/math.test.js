"use strict";

const {
  sum
} = require("./math");

describe('Examining the syntax of Jest tests', () => {
  test("1 + 10 eqauls to 11", () => {
    expect(sum(1, 10)).toBe(11);
    expect(sum(1, 10)).not.toBe(12);
  });
});