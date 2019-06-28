// Test for Regex

const { useShortcut, reverseSet } = require("..");
// We don't need to test unsubstitue because it is equal and only arguments are reversed.

describe('Test simple cases', () => {
  const set = [["s-", "https://www.steadylearner.com"]];
  const short = ": s-, (s-), s-, https://www.steadylearner.com"
  const long = ": https://www.steadylearner.com, (https://www.steadylearner.com), s-, https://www.steadylearner.com"
  test("Simply verfiy that set works with useShortcut. Values without ': ' or '('should not be affected.", () => {
    expect(useShortcut(set)(short))
      .toBe(long);
  });
  test("Same but with reverseSet to undo", () => {
    expect(useShortcut(reverseSet(set))(long))
      .toBe(short);
  });
});

describe('Test with part of .md file', () => {
  const set = [["s-", "https://www.steadylearner.com"], ["n-", "https://www.npmjs.com/package"]];
  const short = `
    # React Easy Markdown

    [Steadylearner]: s-
    [Blog]: s-/blog
    [prop-passer]: n-/prop-passer
    [Steadylearner](s-)
    [test](s-/blog)

    s-, https://www.steadylearner.com
  `
  const long = `
    # React Easy Markdown

    [Steadylearner]: https://www.steadylearner.com
    [Blog]: https://www.steadylearner.com/blog
    [prop-passer]: https://www.npmjs.com/package/prop-passer
    [Steadylearner](https://www.steadylearner.com)
    [test](https://www.steadylearner.com/blog)

    s-, https://www.steadylearner.com
  `

  test("Verfiy that set works with useShortcut .md file. Values without ': ' or '('should not be affected.", () => {
    expect(useShortcut(set)(short))
      .toBe(long);
  });
  test("Same but with reverseSet to undo", () => {
    expect(useShortcut(reverseSet(set))(long))
      .toBe(short);
  });
});


