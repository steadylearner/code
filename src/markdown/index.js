import { lexer, parser } from "marked";
import showdown from "showdown";

import { memoizeWith, identity } from "ramda"; // Use it or use ramda package if it continuously show error with lint
// import { memoizeWith, identity } from "../ramda"; // Use it or use ramda package if it continuously show error with lint

// memoizeWith only for pure functio
let html = (input = "") => {
  const test = parser(lexer(input));
  return test;
};

html = memoizeWith(identity, html);

let markdown = (input = "") => {
    const converter = new showdown.Converter();
    const result = converter.makeMarkdown(input);
    return result;
}

markdown = memoizeWith(identity, markdown);

export {
  html,
  markdown,
}

