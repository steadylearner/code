[![npm version](https://badge.fury.io/js/steadylearner.svg)](https://badge.fury.io/js/react-easy-md) [![npm](https://img.shields.io/npm/dt/steadylearner.svg?maxAge=2592000)](https://img.shields.io/npm/dt/steadylearner.svg)

<!-- Link -->

  [Steadylearner]: https://www.steadylearner.com
  [WebStorage API]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API

<!--  -->

# Steadylearner Code

This is made to share and save codes from [Steadylearner].

---

[![Code by © Steadylearner](static/images/code_by_Steadylearner.png)](https://www.steadylearner.com/about)


## Image Copyright Notice

The main image is made by © [Steadylearner] with CSS. It is not allowed to use it commercially without permission from [the author][Steadylearner].

## Install

1. Type `$npm install --save steadylearner` or `$yarn add steadylearner` in your **CLI**

2. Then,import component(s) you want

```js
import {
  hello,
  //
  social,
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
} from 'steadylearner';
```

## Version Specific

1. This is experimental and will have more features and tests later.

## Demo

1. [Steadylearner Website][Steadylearner]

## Example

```js
import {
  localStorage,
  sessionStorage,
} from 'steadylearner';

const {
  save,
  load,
  remove,
  clear,
  //
  showWithName,
  showWithNumber,
} = localStorage; // 1.

save("name", "value"); // 2.
load("name"); // 3.
remove("name"); // 4.
clear(); // 5.

// 6.
showWithName();
showWithNumber();
```

1. The usage is same for the sessionStorage. You can refer to [WebStorage API] for more information.

2. Save {"name": "value"} JSON in your localStorage.

3. returns "value".

4. remove "name" and "value" from it.

5. remove all data from localStroage.

6. You may use them or type `localStorage;` on your console to show localStorage datas.

## What is Next?

1. JavaScript Codes
2. React Modules?

## Copyright Notice

The MIT License (MIT)

Copyright (c) [Steadylearner]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
