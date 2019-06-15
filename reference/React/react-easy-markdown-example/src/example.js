const example = `[Emoji works](n-/node-emoji)

## Where to learn and use markdown?

 [Markdown-Tutorial]: https://www.markdowntutorial.com/

 1. [Start with Markdown-Tutorial][Markdown-Tutorial]
 2. [Markdown CheatSheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
 3. [Use mark down for Github page](https://help.github.com/articles/getting-started-with-writing-and-formatting-on-github/)
 4. [Learn Markdown in X Minutes](https://learnxinyminutes.com/docs/markdown)
 5. [Steadylearner Markdown Live Editor][markdown]
 6. [Markdown to html](https://markdowntohtml.com/)
 7. [React Easy Markdown used for this site][React Easy Markdown Github Repository]

## Simple Examples

### 1. italic and bold

_italic_
**bold**
**_italicAndBold_**

### 2. Headers

# h1
## h2

[You can also use markdown for code here also](https://learnxinyminutes.com/docs/markdown/)
<!-- 
 Post{ 
   title: "React Easy Markdown",
   subtitle:  "Some React components to help you write markdown with ease.",
   image:  "/code/React.png",
   image_decription: "React Image from the website",
   tags: "markdown React NPM react-easy-md",
   theme: "npm",
 }
-->

<!-- Use yours instead later
[![Travis branch](https://img.shields.io/travis/Vincent-P/react-marked-markdown/master.svg?maxAge=2592000)]()
[![npm version](https://badge.fury.io/js/react-marked-markdown.svg)](https://badge.fury.io/js/react-marked-markdown)
[![npm](https://img.shields.io/npm/dt/react-marked-markdown.svg?maxAge=2592000)]()
-->

<!-- Shortcut -->

[react-marked-markdown]: https://github.com/Vincent-P/react-marked-markdown
[React Easy Markdown Github Repository]: https://github.com/steadylearner/react-easy-md
[Codesandbox for react-easy-md]: https://codesandbox.io/s/wz9pp1xpn8
[How to enable code syntax highlight in React App]: https://medium.com/@steadylearner/how-to-enable-code-syntax-highlight-in-react-app-38463498fa6e

<!-- Shortcut -->

<!-- Steadylearner -->

[Steadylearner]: https://www.steadylearner.com/
[Blog]: https://www.steadylearner.com/blog
[Markdown]: https://www.steadylearner.com/markdown
[prop-passer]: https://www.npmjs.com/package/prop-passer
[How to write less code for links in markdown with React]: https://www.steadylearner.com/blog/read/How-to-write-less-code-for-links-in-markdown-with-React
<!-- Steadylearner -->

<!-- What I have to do later -->
<!--
  1. Update outdated packages and write your own package.json
  2. Organize folder structure to use Jest and Enzyme 
  3. Write some tests
  4. Include real example from https://www.steadylearner.com/markdown
-->

<!-- Shortcut -->

[react-marked-markdown]: https://github.com/Vincent-P/react-marked-markdown
[React Easy Markdown Github Repository]: https://github.com/steadylearner/react-easy-md
[Codesandbox for react-easy-md]: https://codesandbox.io/s/wz9pp1xpn8
[How to enable code syntax highlight in React App]: https://medium.com/@steadylearner/how-to-enable-code-syntax-highlight-in-react-app-38463498fa6e
[How to write less code for links in markdown with React]: https://www.steadylearner.com/blog/read/How-to-write-less-code-for-links-in-markdown-with-React

<!-- Shortcut -->

<!-- Steadylearner -->

[Steadylearner]: https://www.steadylearner.com/
[Blog]: https://www.steadylearner.com/blog
[Markdown]: https://www.steadylearner.com/markdown
[prop-passer]: https://www.npmjs.com/package/prop-passer

<!-- Steadylearner -->

# [React Easy Markdown][React Easy Markdown Github Repository]

Some React components to help you write markdown with ease.
(Code snippet is not included for this example from the page.)

---

The code used here is mainly from [react-marked-markdown][react-marked-markdown].

But the differences are 

1. It solved the problem of showing **null** title. 
2. **prefixAndReplacement** prop is included to help you write shortcuts for markdown.
3. The modules used here were written with **class** and I am thinking of turning them into functional components later.
(I modified them to be functional components to be more compatible with current **React** development trend but it didn't work well. Only to learn that ref can't be used with functional components and it is not easy to make functional components when class components have it.)
4. LiveMarkdownEditor is removed from the package to reduce package size and example codes from [Markdown Editor Page][Markdown] from [Steadylearner][Steadylearner] will replace its role later. 

The original Github repository is archived so I made this package to share the code from the former repository with some improvments. 

The name of package became "react-easy-md" for the NPM Package didn't allow "React Easy Markdown" for similarity.
You may think that React Easy Mardkdown refer to **react-easy-md** in this documentation.

For [Steadylearner][Steadylearner] uses markdown intensively, it may include more features later with examples and tests.

## Install

1. Type **$npm install --save react-easy-md** or **$yarn add react-easy-md** in your **CLI**
2. Import component(s) you want
3. If you use **webpack** and see some warnings and errors with this package, you may include

<br />

## Example

You may read [How to enable code syntax highlight in React App] if you want to use many code snippets inside your app or visit [react-marked-markdown][react-marked-markdown] for more information.

Every props used here is optional but it will be a starting point for your app. You can use **CSS files in example folder** at [React Easy Markdown Github Repository][React Easy Markdown Github Repository].

<br />

## API

1. You can refer to [react-marked-markdown][react-marked-markdown] first for this is just the improved version of it.
2. To understand **prefixWithReplacement** better, please visit [How to write less code for links in markdown with React][How to write less code for links in markdown with React].

### Usage of prefixWithReplacement

The part of the code snippet from the example above

We pass various **prefixes** with **its replacements** with data type **array of arrays**.

Then, Inside **ReactMarkdown** module it will convert 

equal to

With ReactMarkdown from react-easy-md, **you don't have to type the entire paths anymore**. It helps you **not to repeat what you know they will do**.

<br />

<h2 class="red-white"> Read More </h2>

1. [Steadylearner Blog Posts for examples][blog]
2. [prop-passer to help you write less prop and className][prop-passer]

<br />

<h2 class="blue"> What is Next? </h2>

1. More features **to help you write less markdown** with React
2. Examples similar to [Steadylearner Markdown Editor Page][markdown] and other pages at [Steadylearner][Steadylearner]
3. Update the package to use latest dependencies and test it with **Jest**
4. **Tests and examples**
`;

export default example;
