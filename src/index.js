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

import {
    reverseSet,
    clone,
    isReserved,
} from "./array";

import {
    substitutePrefix,
    substitutePrefixes,
} from "./substitute";

import {
    useShortcut,
    useRegex,
} from "./regex";

import { key } from "./random";

import {
    useless,
    commonKeys,
    cutLeft,
    repeat,
    strRemover,
    hasOwnProperty,
    objectFromArray,
} from "./function";

// React components will start with capital letter
import { Social } from "./React";

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
    //
    reverseSet,
    clone,
    isReserved,
    //
    key,
    //
    useless,
    commonKeys,
    cutLeft,
    repeat,
    strRemover,
    hasOwnProperty,
    objectFromArray,
    //
    Social,
};
