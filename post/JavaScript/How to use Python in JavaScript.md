<!--
  Post{
    subtitle: "Numpy, Pandas, Pyautogui etc in JavaScript",
    image: "/code/python_in_javascript.text_watermark.png",
    image_decription: "Image made with HTML and CSS by www.steadylearner.com",
    tags: "FFI, Python, JavaScript, Code",
  }
-->

<!-- Steadylearner -->

 [Steadylearner]: https://www.steadylearner.com
 [Steadylearner Github]: https://github.com/steadylearner
 [posts]: https://github.com/steadylearner/Steadylearner
 [Blog]: https://www.steadylearner.com/blog
 [Markdown]: https://www.steadylearner.com/markdown
 [prop-passer]: https://www.npmjs.com/package/prop-passer
 [How to write less code for links in markdown with React]: https://www.steadylearner.com/blog/read/How-to-write-less-code-for-links-in-markdown-with-React
 [How to turn chars into binary and vice versa with Rust]: https://www.steadylearner.com/blog/read/How-to-turn-chars-into-binary-and-vice-versa-with-Rust
 
<!-- / -->

<!-- Link -->

 [Rust]: https://www.rust-lang.org
 [JSON]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON]
 [What is Binary Data]: https://www.techopedia.com/definition/17929/binary-data
 [Reqwest]: https://github.com/seanmonstar/reqwest
 [CURL]: https://curl.haxx.se
 [git]: https://git-scm.com
 [python-bridge]: https://www.npmjs.com/package/python-bridge
 [JavaScirpt async programming]: https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with
 [How to use pip]: https://www.pythonforbeginners.com/pip/
 [How to use NPM]: https://www.google.com/search?q=how+to+use+npm
 [pyscript]: https://github.com/steadylearner/pyscript
 [Numpy]: https://www.numpy.org
 [Pandas]: https://pandas.pydata.org
 [pyautogui]: https://pyautogui.readthedocs.io/en/latest
 [Numjs]: https://www.npmjs.com/package/numjs

<!-- / Shortcut -->

Having experience in **JavaScript** and **Python**, I wanted to find how to use them both and get the benefit from their rich development environment. So I searched how to do that  and found  [python-bridge] useful.

In this post, we will  learn how to use it with JavaScript [async await][JavaScirpt async programming] syntax for the purpose. You will find that it is not so difficult if you already have experience in both languages.


<br />

<h2 class="red-white"> [Prerequisite] </h2>

 1. [python-bridge]
 2. [JavaScirpt async programming]
 3. [How to use pip]
 4. [How to use NPM]

<br />

I will suppose that you already know how to handle packages in **Python** and **JavaScript**. You should read [python-bridge] repository and follow the examples before you read on this post.

The post about [JavaScirpt async programming] will help you to understand how to use it greatly and want you to read other relevant posts also. If you just want to see the code, you can find the end result of this post at [pyscript] Repository.

<br />

<h2 class="blue">Table of Contents</h2>

 1. How [python-bridge] works
 2. How to improve the example with async await
 3. How to use Python packages in JavaScript
 4. Comparision between equivalent JavaScript and Python module
 5. **Conclusion**

<br>

## 1. How python-bridge works

 I hope you already invested your time to understand how [the package][python-bridge] work.

```js
 'use strict';

 let assert = require('assert');
 let pythonBridge = require('python-bridge');

 let python = pythonBridge();

 python.ex`import math`;
 python`math.sqrt(9)`.then(x => assert.equal(x, 3));

 let list = [3, 4, 2, 1];
 python`sorted(${list})`.then(x => assert.deepEqual(x, list.sort()));

 python.end();
```

 In the code snippet from official repository above, You will find that the main point of this example are `python.ex` and `python`.

```js
 python.ex`import math`;
 python`math.sqrt(9)`.then(x => assert.equal(x, 3));
```

 like they were used above.

You can see that it uses JavaScript **Promise** to consume return value from Python(**x** in exmaple).

If you have both **Node** and **Python** installed in your machine and tested it, you will find that it works without problems.

It is also important to notice that we should use `${variable}` syntax to pass variable from **JavaScript** to **Python**. It is reasonable for we are using **JavaScript** mainly to use both languages and pass variable inside its template string ``. 

This is already great for you can use **Python** inside JavaScript with some knowledge about JavaScript async programming.

You can test it with your favorite python modules such as [Numpy], [Pandas], [pyautogui] etc at this point or other built in modules brifely if you want.

<br>

## 2. How to improve the example with async await

You may have found it useful already, but it is not easy to use only **Promise** API to save and use datas caculated from **Python** modules such as [Numpy] and [Pandas].

It will be better for us to find how to easily save data from **Python** as variables and use them inside JavaScript whenever we want. It is time to use JavaScript `async await` syntax like the example below.

```js
'use strict';  // index.js

const assert = require('assert');
const python = require('python-bridge');

const py = python(); // return value

const {
  ex, // no return value
  end,
} = py;

const list = [3, 4, 2, 1];

ex`import math`

async function pyscript() {
  try {
    let math = await py`math.sqrt(9)`;
    let sort = await py`sorted(${list})`;

    assert.eqaul(math, 3);
    assert.deepEqual(sort, list.sort());

  } catch (e) {
    console.log(e)
  }
  end();
}
pyscript();

```

You can see that the example from the previous code became more readable code with **async await**. We could also separate each caculation from Python and save it to separatee variables with your preference.

You can test it with `$node index.js` and hope it worked well without problem. I think that you don't need explanation for how async await works here because I already gave you [one that explains it best][JavaScirpt async programming].

With the above example, you just need `await` keyword whenever you want to save data from **Python** as variables and already learnt how to do that for **Python** in the previous part.

It is likely that we can pass datas easily between **Python** and **JavaScirpt** and use both of them in **the same .js file** with [python-bridge].

<br />

## 3. How to use Python packages in JavaScript

In the previous part, we learnt how to use async await to make the example from the site more usable. But it is far from interesting and useful.

So we will include some well-known Python packages in this part. [Numpy], [Pandas] and [pyautogui] are used as examples for I think Python is strong in data manipulation and automation and they are used many times for those.

Let me show you the code first.

```js
'use strict';

const python = require('python-bridge');
const py = python(); // return value
const {
  ex, // no return value
  end,
} = py;

const list = [3, 4, 2, 1];

// <python modules>

ex`import math`;
ex`import pyautogui`;
ex`import numpy as np`;
ex`import pandas`;

// </>

// 1.
function fromPython(pycode = {}) {
  return JSON.stringify(pycode);
}

function toJavaScript(pystr = "") {
  return JSON.parse(pystr)
}

function fromPy(pycode = {}) {
  return toJavaScript(fromPython(pycode));
}

async function pyscript() {
  try {
    let math = await py`math.sqrt(9)`;
    let sort = await py`sorted(${list})`;

    // 2.
    ex`
      value = np.random.randint(0, 7, size = 10)
      returnit = pandas.Series(value).tolist()
   `;
    let returnExample = await py`returnit`; // return value with await and python
    console.log(returnExample);

    // 3.
    const test = (math + sort.reduce((a, c) => a + c, 0))

    // 4.
    let position = await py`pyautogui.position()`
    console.log(position); // object

    // 5.
    ex`pyautogui.screenshot("test.png")`;
    ex`print(str(${test}))`; 
    ex`pyautogui.typewrite(str(${test}))`;
    py`pyautogui.typewrite("show it to me")`;
    py`pyautogui.moveTo(${test}, ${math})`;

  } catch (e) {
    console.log(e)
  }
  end();
}

pyscript();
```

While playing with this package, I found that everything wouldn't work well magically with the help from the package author and should invest our time to find how to use them for our own project.

1. We define some functions to wrap return value from **Python** inside "" with JSON API or convert it to **string type** value before they enter JavaScript development environment. What you mainly need will be just `fromPy`.(You can either use **toString()** in JavaScript or **str()** or other type conversion methods given by **Python** whenever you meet the type relevant problem.)

2. We test [Numpy] and [Pandas] would really work or not. You can see that they work and find that you need to use `py` only when you need to return value from Python to JavaScript. Otherwise, you will use `ex` mainly.

3. You can see that you can use value from **Python** and use them freely inside **JavaScript**.

4. We use pyautogui to get the current position of your mouse cursor. I coudln't find its equivalent in JavaScript pacakges. So you will find that you can use Python packages instead when there is no JavaScript module for you with help of [python-bridge].

5. We test various API of [pyautogui] here. I want you to test it in your own machine. You will see that your mouse, keyboard and screenshot all work well and see that you can use `py` also in some cases when you can use `ex` also.

The packages and name used here is not important and its your turn to find get the best out of them.

<br />

## 4. Comparision between equivalent JavaScript and Python module

So you may have found it more useuful than me with the example before if you use **Python** a lot. But you may wonder that it is worth using **Python inside JavaScript** when you consider **performance** and there are similar JavaScript Module.

So we will briefly compare [Numpy] and [Numjs] for they serve for the same purpose and have very similar API.

You can save the code snippet below and test it.

```js
'use strict'; // numpy_and_numjs_compare.js

const python = require('python-bridge'); // https://www.npmjs.com/package/python-bridge
const nj = require('numjs'); // www.npmjs.com/package/numjs

const py = python(); // return value
let {
  ex, // no return value
  end,
} = py;

// <Python Modules>

ex`import numpy as np`;
ex`import pandas`;

// </>

function fromPython(pycode = {}) {
  return JSON.stringify(pycode);
}

function toJavaScript(pystr = "") {
  return JSON.parse(pystr)
}

function fromPy(pycode = {}) {
  return toJavaScript(fromPython(pycode));
}

async function pyscript() {
  try {
    // If you want, use other framework such as https://www.npmjs.com/package/benchmark

    // Test here is to compare time taken to assign return values to variables

    // console.log(new Date());
    // let testnumpy = fromPy(await py`np.arange(1000).reshape(50, 20).tolist()`);
    // console.log(new Date()); // 1.8 ~ 2 seconds

    console.log(new Date());
    let testnumjs = nj.arange(1000).reshape(50, 20).tolist();
    console.log(new Date()); // About 0.05 seconds
  } catch (e) { console.log(e) }
  end();
}

pyscript();
```

With this simple implemenation to compare speed, You will find that it may be better to use **JavaScript native modules** when there are alternatives for **Python** packages already.

For the main purpose of the post is not test, I won't find test examples that works with details. If you want, you can contritube to [pyscript] repostiory or please point problem in this simple code snippet or suggest improvments.

I hope the difference between them is smaller in your machine.(The machine used here is half ten year, battery-dead laptop)

<br /> 

<!-- © www.steadylearner.com -->

## 5. Conclusion

I hope this post to be helpful for someone who wanted to use Python and JavaScript in the same file and packaes from both. It was also a trial to be more familar with Python code.

If you find any problem here or to improve, please commit to [pyscript]. 

**Thanks and please share this post with others.**
