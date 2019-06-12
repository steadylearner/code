<!-- Write code for Rust CLI read the lines below and remove this comment-->

<!-- 
 { 
   title: "How to setup Jest with Enzyme to test React Code",
   subtitle:  "Learn how to write tests for React with Jest and Enzyme.",
   image:  "/code/Jest_from_the_website.png(find other images or Enzyme?)",
   image_decription: "Jest Image from the website",
   tags: "Jest test React JavaScript",
 }
-->

<!-- Link here -->

[Steadylearner]: https://www.steadylearner.com
[Steadylearner Github Repository]: https://github.com/steadylearner/Steadylearner
[React Official Website]: https://reactjs.org/
[React Hook API]: https://reactjs.org/docs/hooks-intro.html
[React Spring]: https://react-spring.surge.sh/
[Github Repository for React Marked Markdown]: https://github.com/vincent-p/react-marked-markdown#readme
[React Markdown Improved]: https://codesandbox.io/s/wz9pp1xpn8
[How to use markdown]: https://www.markdowntutorial.com/
[How to use JavaScript]: https://developer.mozilla.org/en/docs/Web/JavaScript
[How to setup Jest for beginners]: https://jestjs.io/docs/en/getting-started.html
[How to setup Enzyme for beginners]: https://airbnb.io/enzyme/

<!-- Post for this series -->

[How to turn class React component into functional component]: https://www.steadylearner.com/blog/read/How-to-turn-React-class-component-into-functional-component

[How to write less code for links in markdown with React]: https://www.steadylearner.com/blog/read/How-to-write-plugin-to-write-markdown-easily-with-React

[How to enable Code Syntax Highlight in React App]: https://medium.com/@steadylearner/how-to-enable-code-syntax-highlight-in-react-app-38463498fa6e?source=---------8------------------

[How to setup Jest to test JavaScript Code]: https://www.steadylearner.com/blog/read/How-to-setup-Jest-to-test-JavaScript-Code

<!-- Write code for Rust CLI to read the data from the github with conditional statements and remove this comment -->

In the post [How to setup Jest to test JavaScript Code][How to setup Jest to test JavaScript Code], We have learnt how to setup **Jest** to test **JavaScript**. It would be sufficient if your goal is just to test simple **JavaScript** modules. 

In this post, we will advance the example from [the previous post for Jest][How to setup Jest to test JavaScript Code] and build the development envirionemnt to test **React** with **Enzyme**. The process will be easy if you followed the previous documenation and read the official documentations well.

<br />

<h2 class="red-white">[Prerequisite]</h2>

1. [How to use React][React Official Website]
2. [How to setup Jest for beginners][How to setup Jest for beginners]
3. [How to use Enzyme][How to setup Enzyme for beginners]
4. [How to setup Jest to test JavaScript Code][How to setup Jest to test JavaScript Code]
5. [Steadylearner Github Repository][Steadylearner Github Repository]
---

You should know how to use React before web build the test environment for that. You also need to read the official documentation from **Jest** and **Enzyme**. You may visit the previous post [How to setup Jest to test JavaScript Code][How to setup Jest to test JavaScript Code] for it will help you to **install** and setup **Jest** and understand **how to write Jest codes to test**.

You may visit the [Steadylearner Github Repository][Steadylearner Github Repository] if you want to read the source code for this post first.

<br />

<h2 class="blue">Table of Contents</h2>

1. How to include **Enzyme** to test **React** with **Jest**
2. **How to prepare React Code** to test
3. How to use **Jest** and **Enzyme** for it 
4. **Conclusion**

---

<br />

## 1. How to include Enzyme to test React with Jest 

I hope you already read [the previous post to test JavaScript with Jest][How to setup Jest to test JavaScript Code] and have development environment to test JavaScript code. It will be the great starting point before you advance your project to include **Enzyme** and test **React** code.

I want you to save the previous one with folder name similar to **JavaScript_Test** and copy it and name it to **React_Test** before move on.

The benfits of this are

1. You can separate test for **JavaScript** and other frameworks such as **React**.
2. You may keep starting point(**JavaScript_Test** folder) that can be modified to another project whenever you want. 
3. **You can always back to your starting point easily** whenever your setup process goes wrong.

You may use **git** or whatever you want for this purpose. The important point here is to make a backup file before you advance your porject.

To write test for **React**, we have to make the development environment that we can write **React** codes first. 

For that, we will install **react** and **react-dom** with command 
```
$yarn add react react-dom
```

then we will install more development dependencies to use ES6+ JavaScript Features
```
$yarn add @babel/plugin-proposal-class-properties @babel/preset-react --dev
```
and finally include packages relevant to Enzyme to test React more easily
```
$yarn add enzyme enzyme-adapter-react-16 --dev
```

Then, Your entire **package.json** would be similar to the code snippet below.
```json
{
  "devDependencies": {
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
    "test": "jest"
  },
  "dependencies": {
    "react": "^16.8.5",
    "react-dom": "^16.8.5"
  } 
}
```   
I hope you installed well all the packages shown above. We just passed the first phase to use **Jest** with **Enzyme** to test **React** Codes.

For the purpose of our project is to especialize it to test **React** codes, we also have to write some configuration files for that. We will first modify bable.config.js file from the previous example like the code snippet below.

```js
// babel.config.js 
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: ['@babel/plugin-proposal-class-properties']
};
```
It wouldn't be difficult to understand for we just included what are relevant to it after we install some packages for this project.

Then, we will write another configuration file for **Jest**

```js
module.exports = {
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/setup/setupTests.js"],
  testPathIgnorePatterns: [
      "<rootDir>/src/__tests__/setup/"
  ],
}
```
You may not need to understand what the code snippet above does at this moment. Just think that they are to help the **Jest** work better with the folder and file structure that we will build from now on.(You can modifiy it later if you want after you make the project work first.)

When we need to test only simple JavaScript codes, we don't have to make our project structure complicated.

Therefore, we used **math.test.js** to test math.js and **prefixWithReplacement.test.js** to **test prefixWithReplacement.js** instead of having a specific folder to include test files. 

To test more complicated codes, we need to reorganize our project a little bit.
 We will first make ``__tests__`` folder inside **src** folder to include all the test files inside it.

Then we will build **setup** directory with **setupTests.js** inside it

```js
// seupTests.js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

We end up building all the files required to test **React**code with **Jest** and **Enzyme**.
If you couldn't understand well what those code snippets do, please visit and read the official documentations from [Jest][How to setup Jest for beginners] and [Enzyme][How to setup Enzyme for beginners] and search for other blog posts.
 
<br />

## 2. How to prepare the React code to test

We prepared all the necessary files to test React code with Jest in the previous part. So we will prepare some React codes to test. For our goal is to build **the development environment to test React** code and test it work or not, we won't need a complicated example.

So we will directly use an example from [the official github repository]((https://github.com/facebook/jest/tree/master/examples/enzyme) for **Jest with Enzyme**.

(We don't need configuration files inside it for we already built all before.)

```jsx
// CheckBoxWithLabel.js
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
The code snippet above will be easy to understand and its purpose is merely to test it with Jest and Enzyme later. We will bring the test code from the repository again in the next part. 

<br /> 

## 3. How to use **Jest** and **Enzyme** for it 
We will use the official example from the repository for this part again. You may save the code below inside `__tests__` folder. 

```jsx
// __tests__/CheckBoxWithLabel-test.js
import React from 'react';
// shallow for unit test and mount for integration test
// To test static html file use render method from enzyme
import { shallow } from 'enzyme'; 

import CheckboxWithLabel from '../CheckboxWithLabel';

it('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});
```
and use `$yarn test` to execute the test and verify the test result.

It will show message similar to this.

```jsx
$ jest

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Ran all test suites.
```
I hope you made it.

The final folder structure of this project is similar to this(without node_modules for simpicity) 
```
├── babel.config.js
├── jest.config.js
├── package.json
├── src
│   ├── CheckboxWithLabel.js
│   └── __tests__
│       ├── CheckboxWithLabel-test.js
│       └── setup
│           └── setupTests.js
├── yarn-error.log
└── yarn.lock
```

You may refer to it or visit the [Steadylearner Github Repository][Steadylearner Github Repository] to easily copy and paste the entire project and use.

<br />

## 4. Conclusion

I hope you could make the test pass following this post. It wouldn't be difficult if you read the documentations well. I want this post helped someone who just want to setup **Jest** with **Enzyme** easily without investing their time just to make them work together.

**Thanks and please share this post with others**.
