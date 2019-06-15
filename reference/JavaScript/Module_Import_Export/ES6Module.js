// http://exploringjs.com/es6/ch_modules.html#sec_overview-modules -> Read more and search other information when needed

// lib.js

export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}

// main.js

export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

import { square, diag } from 'lib'; or import * as lib from 'lib'; // import everything as lib object from 'lib'

console.log(square(11)); // 121
console.log(diag(4, 3)); // 5

// You can also import the comple module;

// single default export

// myFunc.js

export default function() {} // Prefered syntax

// main.js

import myFunc from 'myFunc';
myFunc();

* Note that there is no semicolon at the end if you default-export a function or a class (which are anonymous declarations).

// MyClass.js

export default class ($X) extends ($Y) {

};

// main.js

import MyClass from 'MyClass';
const inst = new MyClass();

            --------------------------------------------------------
            |               Scripts 	          Modules          |
            --------------------------------------------------------
            HTML element 	   <script>   <script type="module">
            Default mode 	   non-strict 	     strict

            Top-level variables global 	     local to module
            (You can select it using window.$moduleName)
            Value of this at top level   	window 	undefined

            Executed 	synchronously 	      asynchronously
            --------------------------------------------------------
