// import { memoizeWith, identity } from "./ramda"; // use it or NPM. should be used at main index.js

import { hello } from "./console";

import { share } from "./metatag";
import {
    localStorage,
    sessionStorage,
    //
    copy,
    //
    readLocalFileWithHow,
    saveTextFromWeb,
} from "./web";

import { html, markdown } from "./markdown";

import { reverseSet } from "./array";

import {
    substitutePrefix,
    substitutePrefixes,
} from "./substitute";

import {
    useShortcut,
    useRegex,
} from "./regex";

// React relevant modules start with capital letter
import { Sitemap } from "./React";

export {
    //
    hello,
    //
    share,
    //
    localStorage,
    sessionStorage,
    //
    copy,
    //
    readLocalFileWithHow,
    saveTextFromWeb,
    //
    html,
    markdown,
    //
    substitutePrefix,
    substitutePrefixes,
    //
    useShortcut,
    useRegex,
    reverseSet,
    //
    Sitemap,
};
