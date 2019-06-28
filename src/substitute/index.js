import { memoizeWith, identity } from "ramda"; // use it or NPM. should be used at main index.js
// import { memoizeWith, identity } from "./ramda"; // use it or NPM. should be used at main index.js

// Use it for test only
const substitutePrefix = (href = "https://www.steadylearner.com") => (set = ["s-", "https://"]) => {
    const substituteItOrNot = href.startsWith(set[0])
    if (substituteItOrNot) {
        return `${set[1]}${href.split(set[0])[1]}`;
    } else {
        return href;
    }
}

// When render with React for each link inside MarkdownPreview.js
// Different from using regexes for useShortcut
let substitutePrefixes = (href = "https://www.steadylearner.com") => (set = [["s-", "https://"]]) => {
    // You can use some or every here if necessary and remove some words.
    const isHrefIncludeAnyPrefix = set.filter(x => href.startsWith(x[0]));

    if (isHrefIncludeAnyPrefix.length === 1) { // === i instead of > 0 to be more precise
        return `${isHrefIncludeAnyPrefix[0][1]}${href.split(isHrefIncludeAnyPrefix[0][0])[1]}`
    } else {
        return href;
    }
}

export {
    substitutePrefix,
    substitutePrefixes,
}