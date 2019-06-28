const { isReserved } = require("..");

describe('Test simple cases', () => {
  const reserved = ["title", "href"];

  const withValid = "title";
  const withInvalid = "will be false";

  test("Simply verfiy it works with reserved words", () => {
    expect(isReserved(reserved)(withValid))
      .toBe(true);
  });
  test("Simply verfiy it fails with unreserved words", () => {
    expect(isReserved(reserved)(withInvalid))
      .toBe(false);
  });
});
