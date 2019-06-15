const {
  prefixWithReplacement,
  prefixesWithReplacements,
} = require("./prefixWithReplacement");

// 1. Test the base function for our package.
describe('Test prefixWithReplacement when href include prefix given and vice versa', () => {
  const prefixWithReplacementExample = ["s-", "https://"];
  test("When href don't have the prefix in it, the test should return the original value.", () => {
    expect(prefixWithReplacement("www.steadylearner.com/blog", prefixWithReplacementExample))
      .toBe("www.steadylearner.com/blog");
  });
  test("When href have a different prefix in it, the test should return the original value.", () => {
    expect(prefixWithReplacement("h-www.steadylearner.com/blog", prefixWithReplacementExample))
      .toBe("h-www.steadylearner.com/blog");
  });
  test("When href have the same prefix in it, the test should return the replaced value.", () => {
    expect(prefixWithReplacement("s-www.steadylearner.com/blog", prefixWithReplacementExample))
      .toBe("https://www.steadylearner.com/blog");
  });
});

// 2. Start to test What will be really used for package.
// (The difference from the test above is prefixWithReplacement became an array of array with [].)
describe('It should include the what the prefixWithReplacement can do also. Therefore, we test with the same arguments first.', () => {
  const prefixesWithReplacementsExample = [["s-", "https://"]];
  test("When href don't have the prefix in it, the test should return the original value.", () => {
    expect(prefixesWithReplacements("www.steadylearner.com/blog", prefixesWithReplacementsExample))
      .toBe("www.steadylearner.com/blog");
  });
  test("When href have a different prefix in it, the test should return the original value.", () => {
    expect(prefixesWithReplacements("h-www.steadylearner.com/blog", prefixesWithReplacementsExample))
      .toBe("h-www.steadylearner.com/blog");
  });
  test("When href have the same prefix in it, the test should return the replaced value.", () => {
    expect(prefixesWithReplacements("s-www.steadylearner.com/blog", prefixesWithReplacementsExample))
      .toBe("https://www.steadylearner.com/blog");
  });
});

describe('Test when prefixesWithReplacements should return the original href', () => {
  const https = "https://";
  const jest = [
    ["j-", https],
    ["e-", https],
    ["s-", https],
    ["t-", https],
  ];
  test("When href don't have none of prefix in it, the test should return the original value.", () => {
    expect(prefixesWithReplacements("www.steadylearner.com/blog", jest))
      .toBe("www.steadylearner.com/blog");
  });
  test("When href have a different prefix from the prefixes passed to the function, the test should return the original value.", () => {
    expect(prefixesWithReplacements("h-www.steadylearner.com/blog", jest))
      .toBe("h-www.steadylearner.com/blog");
  })
});

describe('Test when prefixesWithReplacements should return the replaced href', () => {
  test("When href have different prefixes and similar replacements in it, the test should return the replaced value.", () => {
    expect(prefixesWithReplacements("j-www.steadylearner.com", [
      ["j-", "https://"],
      ["e-", "http://"],
      ["s-", "htt://"],
      ["t-", "ht://"],
    ]))
      .toBe("https://www.steadylearner.com");
  });

  test("When href have different prefixes and the same replacement in it, the test should return the replaced value.", () => {
    const https = "https://";
    const jest = [
      ["j-", https],
      ["e-", https],
      ["s-", https],
      ["t-", https],
    ];

    expect(prefixesWithReplacements("j-www.steadylearner.com", jest))
      .toBe("https://www.steadylearner.com");
    expect(prefixesWithReplacements("e-www.steadylearner.com", jest))
      .toBe("https://www.steadylearner.com");
    expect(prefixesWithReplacements("s-www.steadylearner.com", jest))
      .toBe("https://www.steadylearner.com");
    expect(prefixesWithReplacements("t-www.steadylearner.com", jest))
      .toBe("https://www.steadylearner.com");
  });

  test("When href have diffent prefixes and replacements. It should return different replaced value.", () => {
    const example = [
      ["s-", "https://www.steadylearner.com"],
      ["l-", "https://www.linkedin.com/in"],
      ["y-", "https://www.youtube.com/channel"],
      ["t-", "https://twitter.com"],
      ["g-", "https://github.com"],
    ];

    expect(prefixesWithReplacements("s-/blog", example))
      .toBe("https://www.steadylearner.com/blog");
    expect(prefixesWithReplacements("l-/steady-learner-3151b7164", example))
      .toBe("https://www.linkedin.com/in/steady-learner-3151b7164");
    expect(prefixesWithReplacements("y-/UCt_jsJOe91EVjd58kHpgTfw", example))
      .toBe("https://www.youtube.com/channel/UCt_jsJOe91EVjd58kHpgTfw");
    expect(prefixesWithReplacements("t-/steadylearner_p", example))
      .toBe("https://twitter.com/steadylearner_p");
    expect(prefixesWithReplacements("g-/steadylearner", example))
      .toBe("https://github.com/steadylearner");
    // should return the replacement when only prefix is given to href
    expect(prefixesWithReplacements("s-", example))
      .toBe("https://www.steadylearner.com");
  });
});