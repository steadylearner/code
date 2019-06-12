<!-- Type this first -->

<!-- Title - How to turn React class component into functional component  -->
<!-- Subtitle - Learn how to make functional component from class component in React -->
<!-- Image - https://www.steadylearner.com/static/images/brand/React.png-->
<!-- Description - React Image from its official website -->

<!-- Link here -->

[Steadylearner]: https://www.steadylearner.com
[Steadylearner Github Repository]: https://github.com/steadylearner/Steadylearner
[React Official Website]: https://reactjs.org/
[React Hook API]: https://reactjs.org/docs/hooks-intro.html
[React Spring]: https://react-spring.surge.sh/
[Github Repository for React Marked Markdown]: https://github.com/vincent-p/react-marked-markdown#readme
[React Markdown Improved]: https://codesandbox.io/s/wz9pp1xpn8

<!-- Post for this series -->

[How to turn class React component into functional component]: https://www.steadylearner.com/blog/read/How-to-turn-React-class-component-into-functional-component

[How to write less code for links in markdown with React]: https://www.steadylearner.com/blog/read/How-to-write-less-code-for-links-in-markdown-with-React

<!-- -->

This post is a very short post to document **How to turn class component into functional component in React**. It is separated content to help understand [How to write less code for links in markdown with React][How to write less code for links in markdown with React] and not to explain the same content again.

If you are a experienced React Developer, you can just read the code part and refer to it birefly to apply it for your React code.

I wouldn't handle how to modify **state and methods etc** in class component to use inside functional component for it will be better to read the documentation for [React Hook API][React Hook API] and practice it with a React Library such as [React Spring] that uses the API intensively.

<br />

<h2 class="red-white">[Prerequisite]</h2>

1. [Expereience in Programming with React][React Official Website]
2. [Class in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript) 
3. [Function in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)

---

You should already have experience in Programming with React and know what is difference between class and function. If so, it wouldn't be difficult to understand the process.

<br />

<h2 class="blue">Table of Contents</h2>

1. How to turn **React class component **into functional component
2. **Conclusion**

---

<br />

## 1. How to turn React class component into functional component

For the process is very simple, it will be better to explain how to do it with an example first. We will use **MarkdownInput** module from [React Marked Markdown][Github Repository for React Marked Markdown] as an example.



```jsx
// MarkdownInput.js 
import React from 'react';
import PropTypes from 'prop-types';

export default class MarkdownInput extends React.Component { // 1.
  render() { // 2.
    const { onChange, value, placeholder, className } = this.props; // 3.
    return (
      <textarea
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        ref="textareaRef"
        className={className}
      />
    );
  }
};

MarkdownInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
```

In the code example above, the class component was just inheriting props from the parent component without any state or methods and it didn't need to be class component so it needn't have to be a clsass component. So it will be a good example for the purpose of this post.

We will remove some parts of the code snippet above to turn it into functional component. Let's see the result first and I will explain the process for you.


```jsx
// FunctionMarkdownInput.js
import React from 'react';
import PropTypes from 'prop-types';

function FunctionMarkdownInput ({ 
  onChange, 
  value, 
  placeholder, 
  className 
}) {
  return (
    <textarea
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      ref="textareaRef"
      className={className}
    />
  );
}

FunctionMarkdownInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default FunctionMarkdownInput;
```

You should have found that there is only a little difference between them. 

What we should do were 

1. We first replace **class** with **function**  and remove **extends React.Component** from the first line and move **export default** FunctionMarkdownInput to the last of the code snippet to make the funtion part more clear to understand.
2. Then, we remove **render**  and its relevant curly bracket wrappers for we don't use **class** and there is no need for use it.
3. Finally, we move destructured variables **{ onChange, value, placeholder, className }** from this.props inside argument of **FunctionMarkdownInput** for we don't use class and need to use **this.props** anymore. 
 
So that wasn't difficult. If you already knew how React prop and JavaScript class and function work, You don't need much time to understand what happens in the process. 

If you want to play with the code, I want you to visit the **Codesandbox** example [React Markdown Improved][React Markdown Improved] or use your own **React** class components.

<br />

## 2. Conclusion

I hope you could understand what are necessary processes to turn **React class** component into **functional component** with this post.

In the next post, we will learn **How to write less code for links in markdown with React**. We used **MarkdownInput** module from [React Marked Markdown][Github Repository for React Marked Markdown] and in the next post we will use **MarkdownPreview** to learn how to improve the module and write markdown more effectively with React.

The process used for this post will be applied to the post again to turn **React** class component into functional component. 

**Thanks and please share this post with others**
