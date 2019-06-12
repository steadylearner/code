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

export default class MarkdownPreview extends React.Component {
  constructor(props) {
    super(props);

    let options = {};
    if (this.props.markedOptions) {
      options = this.props.markedOptions;
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
  }
  render() {
    const {
      value,
      className,
      prefixWithReplacement,
      titleMessage
    } = this.props;

    const renderer = new marked.Renderer();
    // Remove null title problem when it is undefined by giving default value
    // and you can define shortcuts for <a> in markdown
    renderer.link = (href, title, text) => {
      const lastHref = substitutePrefixes(href, prefixWithReplacement);

      return `<a target="_blank" rel="noopener noreferrer" href="${lastHref}" title="${
        title === null ? `${titleMessage} ${lastHref}` : title
      }" >${text}</a>`;
    };

    //     renderer.link = (href, title, text) => {
    //   const isHrefeIncludeAnyPrefix = prefixWithReplacement.filter(x =>
    //     href.startsWith(x[0])
    //   );

    //   if (isHrefeIncludeAnyPrefix.length === 1) {
    //     // === i instead of > 0 to be more precise
    //     const hrefReplacedByPrefix = `${isHrefeIncludeAnyPrefix[0][1]}${
    //       href.split(isHrefeIncludeAnyPrefix[0][0])[1]
    //     }`;
    //     return `<a target="_blank" rel="noopener noreferrer" href="${hrefReplacedByPrefix}" title="${
    //       title === null ? `${titleMessage} ${hrefReplacedByPrefix}` : title
    //     }" >${text}</a>`;
    //   } else {
    //     return `<a target="_blank" rel="noopener noreferrer" href="${href}" title="${
    //       title === null ? `${titleMessage} ${href}` : title
    //     }" >${text}</a>`;
    //   }
    // };

    const html = DOMPurify.sanitize(marked(value || "", { renderer }));

    return (
      <div dangerouslySetInnerHTML={{ __html: html }} className={className} />
    );
  }
}

MarkdownPreview.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  markedOptions: PropTypes.object,
  prefixWithReplacement: PropTypes.array,
  titleMessage: PropTypes.string
};

MarkdownPreview.defaultProps = {
  value: "", // "**This is default value. Write Your own markdown**",
  prefixWithReplacement: [["s-", "https://"]],
  titleMessage: "Click it will open a new tab at"
};

