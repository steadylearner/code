import React from "react";
import marked from "marked";
import hljs from "highlight.js";
import PropTypes from "prop-types";
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";

import { substitutePrefixes } from "./api";

// Initializing DOM Purify
const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

function MarkdownPreview({
  markedOptions,
  value,
  className,
  set,
  titleMessage,
}) {

  let options = {};
  if (markedOptions) {
    options = markedOptions;

    options = {
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false,
      langPrefix: "hljs ",
      ...options
    };

    if (typeof hljs !== "undefined") {
      options = {
        ...options,
        highlight: (code, lang) => {
          if (!!(lang && hljs.getLanguage(lang))) {
            return hljs.highlight(lang, code).value;
          }

          return code;
        }
      };
    }

    marked.setOptions(options);
  }

  const renderer = new marked.Renderer();
  // Remove null title problem when it is undefined by giving default value
  // and you can define shortcuts for <a> in markdown
  renderer.link = (href, title, text) => {
    const lastHref = substitutePrefixes(href, set);

    return `<a target="_blank" rel="noopener noreferrer" href="${lastHref}" title="${
      title === null ? `${titleMessage} ${lastHref}` : title
      }" >${text}</a>`;
  };

  const html = DOMPurify.sanitize(marked(value || "", { renderer }));

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} className={className} />
  );
}

MarkdownPreview.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  markedOptions: PropTypes.object,
  set: PropTypes.array,
  titleMessage: PropTypes.string
};

MarkdownPreview.defaultProps = {
  value: "", // "**This is default value. Write Your own markdown**",
  set: [["s-", "https://"]],
  titleMessage: "Click it will open a new tab at"
};

export default MarkdownPreview;
