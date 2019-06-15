<!--
  Post {
    subtitle:  "Learn how to use babel-cli to make your JavaScript code compatible with old browsers.",
    image:  "/code/Babel.png",
    image_decription: "Babel Image from the website",
    tags: "Babel JavaScript es5 es6+",
  } 
-->

<!-- Link -->

[Steadylearner]: https://www.steadylearner.com
[Steadylearner Github Repository]: https://github.com/steadylearner/Steadylearner
[React Official Website]: https://reactjs.org/
[React Hook API]: https://reactjs.org/docs/hooks-intro.html
[React Spring]: https://react-spring.surge.sh/
[Github Repository for React Marked Markdown]: https://github.com/vincent-p/react-marked-markdown#readme
[React Markdown Improved]: https://codesandbox.io/s/wz9pp1xpn8
[How to use markdown]: https://www.markdowntutorial.com/
[How to use JavaScript]: https://developer.mozilla.org/en/docs/Web/JavaScript
[How to use NPM]: https://docs.npmjs.com/about-npm/
[How to use Babel]: https://babeljs.io/en/setup#installation
[Babel REPL]: https://babeljs.io/repl
[How to setup Jest for beginners]: https://jestjs.io/docs/en/getting-started.html
[How to setup Enzyme for beginners]: https://airbnb.io/enzyme/

<!-- / -->

<!-- Post -->

[How to turn class React component into functional component]: https://www.steadylearner.com/blog/read/How-to-turn-React-class-component-into-functional-component

[How to write less code for links in markdown with React]: https://www.steadylearner.com/blog/read/How-to-write-plugin-to-write-markdown-easily-with-React

[How to enable Code Syntax Highlight in React App]: https://medium.com/@steadylearner/how-to-enable-code-syntax-highlight-in-react-app-38463498fa6e?source=---------8------------------

[How to setup Jest to test JavaScript Code]: https://www.steadylearner.com/blog/read/How-to-setup-Jest-to-test-JavaScript-Code

[How to setup Jest with Enzyme to test React Code]: https://www.steadylearner.com/blog/read/How-to-setup-Jest-with-Enzyme-to-test-React-Code

<!-- / -->

<!-- Write code for Rust CLI to read the data from the github with conditional statements and remove this comment -->

We already have setup JavaScript and React test envrionement at [How to setup Jest to test JavaScript Code][How to setup Jest to test JavaScript Code] and [How to setup Jest with Enzyme to test React Code][How to setup Jest with Enzyme to test React Code]. We are almost there to make [NPM packages to render Markdown][How to write less code for links in markdown with React]  without `null` title.

Before that, we should learn how to turn our **es6+ JavaScript** into **es5** and before to make it compatible with the older browsers and not to break the programm when used inside them.

The process will be easy and maybe helpful for those who don't have much experience with this topic and also be a starting point for someone who wants to start use [Babel][How to use Babel] and to understand what it does.

<br />

<h2 class="red-white">[Prerequisite]</h2>

1. [How to use JavaScript][How to use JavaScript]
2. [How to use NPM][How to use NPM]
3. [How to use Babel][How to use Babel]
4. [How to setup Jest with Enzyme to test React Code][How to setup Jest with Enzyme to test React Code]
5. [Steadylearner Github Repository][Steadylearner Github Repository]
---

You should know how to use **JavaScript** and **NPM** to donwload packages from it. In this post, what we will do is to follow the instruction from [the offical site of Babel][How to use Babel] and apply it to the codes from [How to setup Jest with Enzyme to test React Code][How to setup Jest with Enzyme to test React Code]. 

You may visit the [Steadylearner Github Repository][Steadylearner Github Repository] if you want to read the source code for this post first.

<br />

<h2 class="blue">Table of Contents</h2>

1. Packages from **Babel** to turn **es6+** code to **es5**
2. How to test it with **es6+** code
3. **Conclusion**

---

<br />

## 1. Packages from Babel to turn es6+ code into es5

I hope you already read [How to setup Jest with Enzyme to test React Code][How to setup Jest with Enzyme to test React Code] and have the project ready for this post. But there will be no problem using your own project.

From now on, we will follow the instruction from the official site of [Babel][How to use Babel].

First we will install some packages with command below

```js
// 1. 
$npm install --save-dev @babel/core @babel/cli
// 2.
$yarb add @babel/core @babel/cli --dev
```

1. You may use npm to install the packages for it is recommended way to install them
2. You can also use yarn to install the packages if you already have the proejct with yarn for this post.

After that you will see your **package.json** similar to the code snippet below

```json
"devDependencies": {
  "@babel/cli": "^7.2.3",
  "@babel/core": "^7.4.0",
  "@babel/plugin-proposal-class-properties": "^7.4.0",
  "@babel/preset-env": "^7.4.2",
  "@babel/preset-react": "^7.0.0",
  "babel-jest": "^24.5.0",
  "enzyme": "^3.9.0",
  "enzyme-adapter-react-16": "^1.11.2",
  "jest": "^24.5.0"
},
```
The important point here is to verfiy **@babel/cli** included here.

Then, we will include the command below to use with **npm** or **yarn** command later inside **package.json**

```
"build": "babel src -d lib"
```

After those processes, Your **package.json** would be similar to the one below.

```json
{
  "devDependencies": {
    "@babel/cli": "^7.2.3",
    "@babel/core": "^7.4.0",
    "@babel/plugin-proposal-class-properties": "^7.4.0",
    "@babel/preset-env": "^7.4.2",
    "@babel/preset-react": "^7.0.0",
    "babel-jest": "^24.5.0",
    "enzyme": "^3.9.0",
    "enzyme-adapter-react-16": "^1.11.2",
    "jest": "^24.5.0"
  },
  "scripts": {
    "test": "jest",
    "build": "babel src -d lib"
  },
  "dependencies": {
    "react": "^16.8.5",
    "react-dom": "^16.8.5"
  }
}
```
For we are ready to turn our **es6+** code into **es5 and before**. We will test it with example codes before to test it really work or not. You can use it with your own code also.

If you want to see the entire example for this post, you can visit [Steadylearner Github Repository][Steadylearner Github Repository].

<br />

## 2. How to test it with es6+ code

We prepared all the necessary files before. It is time to test it with real codes. For this post, we will use the code snippet used for [How to setup Jest with Enzyme to test React Code][How to setup Jest with Enzyme to test React Code].

```jsx
// /src/CheckBoxWithLabel.js
// es6+ for class and React etc
import React from 'react';

export default class CheckboxWithLabel extends React.Component {
  state = {
    isChecked: false,
  };

  onChange = () => {
    this.setState({isChecked: !this.state.isChecked});
  };

  render() {
    return (
      <label>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
}      
```
The code snippet is not complicated and it will be useful to verify the result **es5** code from the process we will do later.

In the previous part, we defiined `"build": "babel src -d build"` to use babel with **npm** or **yarn** easily. If you read [the documentation][How to use Babel], you should have found that it will turn every **.js** files in **src** directory to **es5+ and before** and will save them to **lib** directory.

We can use either **npm** or **yarn** to verify it with the command below in your **CLI**.

```
$yarn build or $npm run build
```

After that, you will see the code snippet similar to the one below
```js
// /lib/CheckBoxWithLabel.js
// compatible with es5 and before
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj &amp;&amp; obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" &amp;&amp; typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj &amp;&amp; typeof Symbol === "function" &amp;&amp; obj.constructor === Symbol &amp;&amp; obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call &amp;&amp; (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" &amp;&amp; superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass &amp;&amp; superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CheckboxWithLabel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CheckboxWithLabel, _React$Component);

  function CheckboxWithLabel() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CheckboxWithLabel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CheckboxWithLabel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isChecked: false
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function () {
      _this.setState({
        isChecked: !_this.state.isChecked
      });
    });

    return _this;
  }

  _createClass(CheckboxWithLabel, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("label", null, _react.default.createElement("input", {
        type: "checkbox",
        checked: this.state.isChecked,
        onChange: this.onChange
      }), this.state.isChecked ? this.props.labelOn : this.props.labelOff);
    }
  }]);

  return CheckboxWithLabel;
}(_react.default.Component);

exports.default = CheckboxWithLabel;
```
It is compatible with the older browser and you can use it instead of its **es6+** version. It will be useful if you want to make some **NPM** packages to share your **es6+** code with others.

<br /> 

## 3. Conclusion

It wouldn't be difficult to follow this post for it is just repeating the process decribed in [How to use Babel][How to use Babel] and applied to the real project we used [in the previous post][How to setup Jest with Enzyme to test React Code].

Before I write this post, I thought that it wouldn't be easy to setup the development environment to turn **es6+** code into **es5** and before and used [Test Babel page][Babel REPL] for that. 

It is very easy for what you need to do is just copy and paste. But it wouldn't be right if you have to convert many **es6+ JavaScript** files to **es5** version to share them with others.

By following this post, you won''t need to do that anymore. What we have to do is just type `$yarn build` or `npm run build` inside your project and that is all to have **es5** code to use.

I hope this post helpful and if there was any problem, you can always refer to the official documentation at [Babel][How to use Babel] or [Steadylearner Github Repository][Steadylearner Github Repository].

**Thanks and please share this post with others**.

