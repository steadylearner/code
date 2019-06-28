// Test for Regex

const { useRegex } = require("..");
// We don't need to test unsubstitue because it is equal and only arguments are reversed.

describe('Test simple cases', () => {
  const set = [
    [/<br\s*?>/gi, "\r\n"],
    [/&lt;/g, "<"],
    [/&gt;/g, ">"],
    [/&amp;/g, "&"]
  ];
  const before = "&lt;, &gt;, &amp;"
  const after = "<, >, &"
  test("Simply verfiy that set works with useRegex.", () => {
    expect(useRegex(set)(before))
      .toBe(after);
  });
});

describe('Test with part of code snippet', () => {
  const set = [
    [/<br\s*?>/gi, "\r\n"],
    [/&lt;/g, "<"],
    [/&gt;/g, ">"],
    [/&amp;/g, "&"]
  ];
  const before = `
    &lt;title&gt;React Easy Markdown&lt;/title&gt;
    &lt;p&gt;It is made with React and JavaScript by Steadylearner&lt;/p&gt;
    &amp;variable // It is for Rust
    I can't search every example of sanitization for each framework and web browsers.
    Then, I will give freedom for users to define regexp that they can use.
  `
  const after = `
    <title>React Easy Markdown</title>
    <p>It is made with React and JavaScript by Steadylearner</p>
    &variable // It is for Rust
    I can't search every example of sanitization for each framework and web browsers.
    Then, I will give freedom for users to define regexp that they can use.
  `

  test("Verfiy that set works with useShortcut .md file. Values without ': ' or '('should not be affected.", () => {
    expect(useRegex(set)(before))
      .toBe(after);
  });
});


