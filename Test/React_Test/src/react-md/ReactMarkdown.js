import React from "react";
import marked from "marked";
import hljs from "highlight.js";
import PropTypes from "prop-types";
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";

// Initializing DOM Purify
const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

function ReactMarkdown({
  value,
  className,
  markedOptions,
  prefixWithReplacement,
  titleMessage
}) {
  let options = {};
  if (markedOptions) {
    options = markedOptions;
  }

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

  const renderer = new marked.Renderer();
  renderer.link = (href, title, text) => {

    const isHrefeIncludeAnyPrefix = prefixWithReplacement.filter(x => href.startsWith(x[0]));

    if(isHrefeIncludeAnyPrefix.length === 1) { // === i instead of > 0 to be more precise
      const hrefReplacedByPrefix = `${isHrefeIncludeAnyPrefix[0][1]}${href.split(isHrefeIncludeAnyPrefix[0][0])[1]}`
      return `<a target="_blank" rel="noopener noreferrer" href="${hrefReplacedByPrefix}" title="${
        title === null ? `${titleMessage} ${hrefReplacedByPrefix}` : title
      }" >${text}</a>`;
    } else {
      return `<a target="_blank" rel="noopener noreferrer" href="${href}" title="${
        title === null ? `${titleMessage} ${href}` : title
      }" >${text}</a>`;
    }
  };

  const html = DOMPurify.sanitize(marked(value || "", { renderer }));

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} className={className} />
  );
}

ReactMarkdown.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  markedOptions: PropTypes.object,
  prefixWithReplacement: PropTypes.arrayOf.arrays,
  titleMessage: PropTypes.string
};

ReactMarkdown.defaultProps = {
  value: "**This is default value. Write Your own markdown**",
  prefixWithReplacement: [["s-", "https://"]],
  titleMessage: "Click it will open a new tab at"
};

export default ReactMarkdown;

