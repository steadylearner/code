<!--
  Post{
    subtitle: "Learn how to make sitemap.xml with React Routes",
    image: "post/sitemap/sitemap_react.png,
    image_decription: "Made with CSS by Steadylearner",
    tags: "React sitemap app code",
  }
-->

<!-- Link -->

[Steadylearner]: https://www.steadylearner.com
[Sitemap GitHub]: https://github.com/steadylearner/Sitemap
[What is image sitemap]: https://support.google.com/webmasters/answer/178636
[React Router Sitemap]: https://www.npmjs.com/package/react-router-sitemap

<!-- / -->

<!-- Post -->

[Your first sitemap with Rust]: https://www.steadylearner.com/blog/read/Your-first-sitemap-with-Rust
[How to use datas to build sitemap with Rust Diesel]: https://www.steadylearner.com/blog/read/How-to-use-datas-to-build-sitemap-with-Rust-Diesel
[How to build a sitemap.txt from sitemap.xml with Rust]: https://www.steadylearner.com/blog/read/How-to-build-a-sitemap.txt-from-sitemap.xml-with-Rust
[How to build sitemap for images with Rust]: https://www.steadylearner.com/blog/read/How-to-build-sitemap-for-images-with-Rust
[How to automate sitemaps]: https://www.steadylearner.com/blog/read/How-to-automate-sitemaps
[How to build a sitemap for React App]: https://www.steadylearner.com/blog/read/How-to-build-a-sitemap-for-React-App

<!-- / -->

After I built layout for FronetEnd playground [Steadylearner], I thought that **"It is time to focus on improving SEO"**. But the website is built with React Frontend and Rust Backend, So it was not easy to find the information for that.

Furthermore, it was not easy to use Server Side rendering and other Node.js backend friendly methods for Rust backend. So I searched what can I do yet and found that sitemap and metadata can still be implemented only using JavaScript developing environment without considering type of backend.

So I want to share you how to do that with this post. We will use [React Router Sitemap] for the process.

Its goal is to extract only routes relevant parts made with React Router and return **.xml** format sitemap for you.

I found that it was not complete to meet every requirements to make sitemap for every routes in Single Page App. But it will be still useful to start and understand what you need.

(If you find that it is not sufficient after you read this post, you can learn how to make sitemap with Rust with the posts below.)

1. [Your first sitemap with Rust]
2. [How to use datas to build sitemap with Rust Diesel]
3. [How to build a sitemap.txt from sitemap.xml with Rust]
4. [How to build sitemap for images with Rust]
5. [How to automate sitemaps]

You may find that following the documentation from the author is not so easy. Because you have to know how to deal with ES6+ JavaScript Codes. So I will give you every files you need to make it work for your app.

I hope you already have [Node.js](https://nodejs.org/en/) installed and know JavaScript also before you start to follow this post.

(You can visit the source code at [Sitemap GitHub] repository if you need the source code. It will be suffient for you to start your own project.)

We will start from installing the minimum JavaScript files.

You don’t have to know a lot about how packages work. We will use the project only to make React-Router-Sitemap to work and it can be used independently. So after reading this pots, You can use your own React-Router routes wherever you want.

The minimum package.json for the project should be similar to the below.

```json
{
  "name": "react-sitemap-builder",
  "version": "1.0.0",
  "main": "index.js",
  "author": "www.steadylearner.com",
  "license": "MIT",
  "devDependencies": {
    "@babel/core": "^7.3.4",
    "@babel/preset-env": "^7.3.4",
    "@babel/preset-react": "^7.0.0",
    "@babel/register": "^7.0.0",
    "babel-loader": "^8.0.5",
    "webpack": "^4.29.5"
  },
  "dependencies": {
    "react": "^16.8.3",
    "react-dom": "^16.8.3",
    "react-router": "^4.3.1",
    "react-router-sitemap": "^1.2.0",
    "webpack-cli": "^3.2.3",
    "webpack-dev-middleware": "^3.6.0",
    "webpack-dev-server": "^3.2.1"
  }
}
```

You can use **npm** or **yarn** to install the packages.

(For the sitemap will be only useful after you end up completing your website. You wouldn’t need detailed explanation how to use them.)

After that, the minimum webpack.config.js for the project should be similar to this.

```js
const webpack = require("webpack");

module.exports = function () {
  return {
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }]
    },
    devServer: {
      historyApiFallback: true,
    },
    resolve: {
      alias: {
        "react-dom": "react-dom/profiling",
        "scheduler/tracing": "scheduler/tracing-profiling"
      }
    }
  };
};
```

I decide to include webpack for this post for I have working webpack configuration inside the project for the website.

The important part for here is to make **babel-loader** and **@babel/preset-env** to help you to use **ES6+ syntax** so that You can follow the example of **React-Router-Sitemap**.

In accordance with the webpack config file above, we will make .babelrc file

```json
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
}
```

and you have the minimum **Webpack** and **Babel** Setting to handle React or ES6+ JavaScript files at the moment.

If some problem happend following this examples, you may test it with help of [babel-repl](https://babeljs.io/repl) to verify it work or not.

```js
// react-sitemap-test.js
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _reactRouterSitemap = _interopRequireDefault(require("react-router-sitemap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sitemap = new _reactRouterSitemap.default(_react.default.createElement(_reactRouter.Route, {
  path: "/home"
})).build('http://www.steadylearner.com').save("./sitemap.xml");

console.log(sitemap);

// equals to

// import React from "react"
// import { Switch, Route, } from "react-router"
// import Sitemap from 'react-router-sitemap';

// const sitemap =
//  new Sitemap(<Route path='/home' />)
//    .build('http://www.steadylearner.com')
//    .save("./sitemap.xml")

// console.log(sitemap);
```

You can verify how it works with the **$node react-sitemap-test.js** and you will see the messages like this in your console.

```xml
cache:'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n<url> <loc>http://www.steadylearner.com/home</loc> </url>\n</urlset>',
```

You should have searched information about [What is sitemap?](https://support.google.com/webmasters/answer/156184?hl=en), [How to build sitemap](https://www.google.com/search?client=firefox-b-d&q=how+to+build+sitemap) for React Application etc before.

Then, you should know that 

```xml
<loc>http://www.steadylearner.com/home</loc>
```

is payload and we can see that it is made from the part of the code below

```js
new Sitemap(<Route path='/home' />)
.build('http://www.steadylearner.com')
.save("./sitemap.xml")
```

We know that the minimum example works after the process before. We made a first step to build sitemap using [React Router Sitemap] and what we should code is to use our own routes instead of it.

Following the example from the documenation, we will make sitemap-builder.js

```js
require('@babel/register'); // 1.

const router = require('./router').default;
const Sitemap = require('react-router-sitemap').default;

// 2.
(
    new Sitemap(router)
        .build('http://www.steadylearner.com')
        .save('./sitemap.xml')
);

console.log("The sitemap was built."); // Only shows this message after everything works well.

```

The important point here are

1. You should use **@prefix for babel/register**, the package official example used is not correct and you should use this instead.
2. Here we don't have router variable to use with Sitemap(argument) yet, we will build it in the next process.

I corrected a code snippet to help you and save your time. The process is almost done. We just need to make router variable that will be passsed to construct Sitemap with syntax **new Sitemap(Router)**.

The code below is from the react router routes for [Steadylearner] to help you refer to the real examples.

```js
import React from "react";
import { Switch, Route } from "react-router";

export default (
    <Switch>
        <Route exact path="/" />
        <Route exact path="/about" />
        <Route path="/about/:language?" />
        <Route exact path={"/video"} />
        <Route path={"/video/search/:query?"} />
        <Route path={"/video/watch/:videoId"} />
        <Route path={"/video/write/:videoId?"} />
        <Route exact path={"/image"} />
        <Route path={"/image/search/:query?"} />
        <Route exact path={"/blog"} />
        <Route path={"/blog/search/:query?"} />
        <Route path={"/blog/read/:blogTitle?"} />
        <Route exact path="/code" />
        <Route path={"/code/search/:query?"} />
        <Route exact path="/markdown" />
        <Route exact path="/jsx"/>
        <Route exact path={"/slideshow"} />
        <Route path={"/static/images/:folder"} />
    </Switch>
);
```

You may use your routes from React-Router as they are. But I want you to remove unnecessary parts inside your file for routes.(Only the last paths the user visit will be used.)

So you should delete code such as **rediret** and components to make it more readable and not to make confusion for the React Router Sitemap to work.

Everything is ready. Type **$node sitemap-builder.js** and the console will show you the message **“Sitemap was built”** for you.

Then, You can verify it at **sitemap.xml** file.

It will be similiar to

```xml
// sitemap.xml
<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
>

<url> <loc>http://www.steadylearner.com/</loc> </url>
<url> <loc>http://www.steadylearner.com/about</loc> </url>
<url> <loc>http://www.steadylearner.com/about/:language?</loc> </url>
<url> <loc>http://www.steadylearner.com/video</loc> </url>
<url> <loc>http://www.steadylearner.com/video/search/:query?</loc> </url>

<code snippet here>

</urlset>
```

If you liked it, you may submit it for some search engines. I want you to learn how to do that by searching documentations yourself.

If you want to use a sitemap.txt file also. You can only extract `<url><loc>$path</loc></url>` parts from the sitemap.xml.

Then use * instead of dynamic path parts such as :language? and :query.

For example,

```txt
http://www.steadylearner.com/
http://www.steadylearner.com/about
http://www.steadylearner.com/about/*
http://www.steadylearner.com/video
http://www.steadylearner.com/video/search/*
http://www.steadylearner.com/video/watch/*
http://www.steadylearner.com/video/write/*
http://www.steadylearner.com/image
http://www.steadylearner.com/image/search/*
http://www.steadylearner.com/blog
http://www.steadylearner.com/blog/search/*
http://www.steadylearner.com/blog/read/*
http://www.steadylearner.com/code
http://www.steadylearner.com/code/search/*
http://www.steadylearner.com/markdown
http://www.steadylearner.com/jsx
http://www.steadylearner.com/slideshow
http://www.steadylearner.com/static/images/*
```

It should be similar to code snippet above, You may want to use [the package](https://www.npmjs.com/package/react-router-sitemap-builder) for that also.

If you followed well this post, you already have boilerplate to start the sitemap for your React Web Application.

I hope you made it and see your React Single Page App indexed by search engines like [Steadylearner].

Before the end of the post, there are some notes that I want to tell you.

Paths such as http://www.steadylearner.com/about/:language doesn't work well for search engines to index every paths in your React Website.

It may be better for you to write manually if there are a few paths.

(For example, http://www.steadylearner.com/about/, http://www.steadylearner.com/about/pt-br and http://www.steadylearner.com/about/es instead of the dynamic path with /:language.)

Otherwise, [use database][How to use datas to build sitemap with Rust Diesel] later to be more specific.

## Conclusion

I hope you found this post useful. If you know Rust and want to automate every process to build sitemap.xml and sitemap.txt, please visit [How to automate sitemaps].

If you need a help, please contact me with [LinkedIn](https://www.linkedin.com/in/steady-learner-3151b7164/) or [Twitter](https://twitter.com/steadylearner_p).
(JavaScript, Rust, Python etc)

**Thanks and please share this post with others.**
