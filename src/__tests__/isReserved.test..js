// Test for Regex

const { isReserved } = require("..");
// We don't need to test unsubstitue because it is equal and only arguments are reversed.

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

// const propWriter = (specificProp = {}) => (sharedProp = {}) => {

//   // [What this code does?]
//   // If every commonKeys are not reserved, then return pick(commonProp)(specificProp);
//   // otherwise, return {}

//   const reserved = ["class", "className", "rewrite"];

//   const isReserved = (value) => {
//     return reserved.includes(value);
//   }

//   const notReserved = (value) => {
//     return !(isReserved(value));
//   }

//   const commonProp = commonKeys(specificProp)(sharedProp).filter(notReserved);

//   // equals to

//   // const commonProp = commonKeys(specificProp)(sharedProp).filter(
//   //   value => value !== "class" && value !== "className" && value !== "rewrite"
//   // );

//   // We can use array syntax instead of (&& and !==) every time

//   if (commonProp.length !== 0) {
//     return pick(commonProp)(specificProp);
//   }

//   return {};
// };

// to

// import { isReserved } from "steadylearner";
// const propWriter = (specificProp = {}) => (sharedProp = {}) => {

//   // [What this code does?]
//   // If every commonKeys are not reserved, then return pick(commonProp)(specificProp);
//   // otherwise, return {}

//   const reserved = ["class", "className", "rewrite"];

//   const commonProp = commonKeys(specificProp)(sharedProp).filter(!isReserved(reserved));

//   // equals to

//   // const commonProp = commonKeys(specificProp)(sharedProp).filter(
//   //   value => value !== "class" && value !== "className" && value !== "rewrite"
//   // );

//   // We can use array syntax instead of (&& and !==) every time

//   if (commonProp.length !== 0) {
//     return pick(commonProp)(specificProp);
//   }

//   return {};
// };