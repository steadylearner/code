<!--
    Post{
        subtitle: "Learn how to render markdown with Rust frontend.",
        image: "post/web/code-with-yew.png",
        image_decription: "Image by Steadylearner",
        tags: "How markdown Rust Yew",
    }
-->

<!-- Link -->

[Steadylearner]: https://www.steadylearner.com
[Steadylearner CSS]: https://github.com/steadylearner/code/blob/master/CSS/
[Steadylearner Web]: https://github.com/steadylearner/Webassembly
[Rust Website]: https://www.rust-lang.org/
[Cargo Web]: https://github.com/koute/cargo-web
[stdweb]: https://github.com/koute/stdweb
[Yew]: https://github.com/DenisKolodin/yew
[Yew Documenation]: https://docs.rs/yew/0.6.0/yew/
[Yew Service]: https://github.com/DenisKolodin/yew/tree/master/src/services
[Yew Examples]: https://github.com/DenisKolodin/yew/tree/master/examples
[Yew NPM example]: https://github.com/DenisKolodin/yew/tree/master/examples/npm_and_rest
[Yew inner HTML example]: https://github.com/DenisKolodin/yew/blob/master/examples/inner_html/src/lib.rs

[Build a rust frontend with Yew]: https://dev.to/deciduously/lets-build-a-rust-frontend-with-yew---part-2-1ech
[rollupjs]: https://github.com/rollup/rollup

[Rocket Yew starter pack]: https://github.com/anxiousmodernman/rocket-yew-starter-pack
[Web completely in Rust]: https://medium.com/@saschagrunert/a-web-application-completely-in-rust-6f6bdb6c4471

[Rocket]: https://rocket.rs/
[Bash for beginners]: http://www.tldp.org/LDP/Bash-Beginners-Guide/html/
[Rust Full Stack]: https://github.com/steadylearner/Rust-Full-Stack
[Browserify]: https://github.com/browserify/browserify
[unpkg]: https://unpkg.com/
[The C programming language]: https://www.google.com/search?q=the+c+programming+language

[node-emoji]: https://www.npmjs.com/package/node-emoji
[actix]: [https://actix.rs/]

[React Easy Markdown]: https://github.com/steadylearner/react-easy-md/blob/master/src/MarkdownPreview.js
[Marked]: https://github.com/markedjs/marked

<!-- / -->

<!-- package.json

cargo web start(include build), cargo web deploy
yarn watch:rs for devlopment then yarn prod(include build) for production

<!-- Steadylearner Post -->

[Rust blog posts]: https://www.steadylearner.com/blog/search/Rust
[How to install Rust]: https://www.steadylearner.com/blog/read/How-to-install-Rust
[Rust Chat App]: https://www.steadylearner.com/blog/read/How-to-start-Rust-Chat-App
[Yew Counter]: https://www.steadylearner.com/yew_counter
[How to use Rust Yew]: https://www.steadylearner.com/blog/read/How-to-use-Rust-Yew
[How to deploy Rust Web App]: https://www.steadylearner.com/blog/read/How-to-deploy-Rust-Web-App
[How to start Rust Chat App]: https://www.steadylearner.com/blog/read/How-to-start-Rust-Chat-App
[Fullstack Rust with Yew]: https://www.steadylearner.com/blog/read/Fullstack-Rust-with-Yew
[How to use NPM packages with Rust Frontend]: https://www.steadylearner.com/blog/read/How-to-use-NPM-packages-with-Rust-Frontend

[How to use Python in JavaScript]: https://www.steadylearner.com/blog/read/How-to-use-Python-in-JavaScript

<!-- / -->

<!-- Steadylearner Twitter and LinkedIn  -->

[Twitter]: https://twitter.com/steadylearner_p
[LinkedIn]: https://www.linkedin.com/in/steady-learner-3151b7164/

<!--  -->

In the previous post [How to use NPM packages with Rust Frontend], we learnt how to use JavaScript in Rust frontend project.

You could use both Rust crates and JavaScript modules whenever you want.

In this post, we will learn how to use **markdown** with Rust frontend app. You will find we can render a text, video, image, code and whatever you want with it.

If you visit [Rust Full Stack], you will find that we already have **Rust files** for that. We will focus on **How to use markdown** because it will show you can use other visual HTML elements with Rust frontend also.

If you want to save your time, clone [Rust Full Stack] repository and follow the instruction there.

The payload of this post will be **web/src/components/code.rs**.

<br />

<h2 class="red-white">[Prerequisite]</h2>

1. [How to install Rust]
2. [Yew]
3. [Yew inner HTML example]
4. [How to use Rust Yew]
5. [Fullstack Rust with Yew]
6. [How to use NPM packages with Rust Frontend]
7. [React Easy Markdown] or [Marked]

---

I want you already have Rust installed in your machine. The blog post [How to install Rust] will help you for that.

If you haven't setup development environment for [Yew], please read the previous post [How to use Rust Yew]. Then, visit [Fullstack Rust with Yew] and [How to use NPM packages with Rust Frontend].

I hope you already read the previous [Rust blog posts]. It will help you to find this post better.

Read [Yew inner HTML example] first. You can see that the code used here is just a little variation of it.

We will use [Marked] NPM module in this post to render markdown files. You may read its source code or visit [React Easy Markdown] that we will directly use(copy and paste).

If you could build your [Rust Full Stack] project, you can easily deploy it with [How to deploy Rust Web App].

<br />

<h2 class="blue">Table of Contents</h2>

1. How to use **inner HTML** in Rust Frontend
2. Write Rust code with **Marked**
3. **CSS** for it
4. **Conclusion**

---

You can skip the part for **CSS** if you already have your CSS files to render markdown.

<br />

## 1. How to use inner HTML in Rust Frontend

When I built project for [How to start Rust Chat App], I found that we can render markdown with pure JavaScript with **inner HTML** and [Marked]. It was much easier because I already have written [React Easy Markdown] NPM package and used it there.

So what we need to render markdown in Rust frontend will be find

1. How to use **inner HTML** in it.

2. How to use [Marked] with it.

We already learnt [How to use NPM packages with Rust Frontend] before so **2.** will be easy. Therefore, we will learn how to use **inner HTML** in Rust frontend first.

If you visit [Yew inner HTML example], you can see its payload is similar to

```rust
const SVG: &str = r#"<code>pass markdown value with &str later</code>"#;

impl Renderable<Model> for Model {
    fn view(&self) -> Html<Self> {
        let js_svg = js! {
            var div = document.createElement("div");
            div.innerHTML = @{SVG.to_string()};
            console.log(div);
            return div;
        };
        eprintln!("js_svg: {:?}", js_svg);
        let node = Node::try_from(js_svg).expect("convert js_svg");
        let vnode = VNode::VRef(node);
        eprintln!("svg: {:?}", vnode);
        vnode
    }
}
```

and the other parts are just to make it a complete single file example.

The **js!** macro from [stdweb] is used again. It won't be difficult to [find what the code snippet do][How to use NPM packages with Rust Frontend].

The important part here are **JavaScript** and others are just to make **FFI** between **JavaScript and Rust** work.

It will be sufficient for you to know that you can use **inner HTML** in Rust [Yew] or other Rust frontend.

## 2. Write Rust code with Marked

For we already have the working example at [Rust Full Stack], we will just handle important parts to save your time.

To make it work, you need to include

```html
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js">
</script>
```

in your **/web/static/index.html** following the example from [Marked] first.

If you read the [previous post][How to use NPM packages with Rust Frontend], you already know that you can use [Browserify] or others also for this purpose. Just use the easiest way or whatever you want.

Then, your file to render markdown in **Rust frontend** will be similar to

```rust
// /web/src/components/code.rs
use stdweb::web::Node;
use stdweb::unstable::TryFrom;
use yew::{html, Html};
use yew::virtual_dom::VNode;

use crate::Model; // 1.

pub fn view_code(value: &str) -> Html<Model> {
    // 2.
    let markdown = js! {
        const div = document.createElement("div");
        div.className = "markdown"; // 3.
        const code = @{&value};

        const options = {
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false, // 4.
            smartLists: true,
            smartypants: false,
            langPrefix: "hljs ", // 5.
        };

        marked.setOptions(options);

        div.innerHTML = marked(code);
        return div;
    };

    eprintln!("markdown: {:?}", markdown);
    let node = Node::try_from(markdown).expect("convert markdown");
    let vnode = VNode::VRef(node);
    eprintln!("div: {:?}", vnode);

    html! {
       { vnode }
    }
}
```

and we already know that **js!** is payload. Then, you can just copy and paste some parts from [React Easy Markdown].

It is just JavaScript and will be easy but a little help will be useful.

1. Include **use crate::Model;** to modulize your [Yew] project. You can easily find this in other files in **components** folder.

2. Those **JavaScript** variables are not usable in JavaScript global scope(window etc). So you may write them without caution or you may need opinions from [stdweb] author or more experts if you care for security.

3. You will want your custom CSS for markdown when you render them. So include similiar to **div.className = "markdown"** and write CSS file for that later.

4. When you use **false**, it will allow HTML and **true** won't. Your option will be **true** normally.

5. It is to render programming languages differently in markdown with hljs.

and other parts are just for **copy and paste** with different variable name **markdown**.

That was all. You can test it with **yarn watch:rs** in **web** directory after clone [Rust Full Stack].

Test it with

```md
I can use **markdown** in my Rust frontend app.
```

in the input part of your app.

[![Rust full stack chat app](https://www.steadylearner.com/static/images/post/web/full-stack-rust-chat-app-by-steadylearner.png)](https://www.steadylearner.com/static/images/post/web/full-stack-rust-chat-app-by-steadylearner.png)

I hope you made it work. It was just **JavaScript** that made everything work.

If you become familiar with [Yew] or other **Rust frontend framework**, you will find that it is very similar to write code with **JavaScript and its frameworks**.

<br />

## 3. CSS for it

You can use whatever CSS and other files you want for your markdown files. You already have examples **/web/static** at [Rust Full Stack].

I will briefly expalin how they work in this part to help you.

I already have [CSS][Stedylearner CSS] files to render [Steadylearner] built with React and Rust.

One of them are for markdown and you could find **markdown.css** in **web/static** folder if you cloned [Rust Full Stack].

The original file at [Stedylearner CSS] will be similar to

```js
const ContentCSS = `
    & > * {

    }
    // more CSS extension syntax here
`;

export default ContentCSS;
```

and I use this syntax to include it in other React **Styled Component** CSS with ${ContentCSS} because it is a large file and reusable easily.

For example,

```js
import React from "react";
import styled from "styled-components";

import ContentCSS from "../../CSS/ContentCSS";

const BlogCSS = styled.article`
    .blog-contents {
        ${ContentCSS}
    }
`;

export default BlogCSS;
```

That was just to explain how it was used in **React** app such as [Steadylearner] and we will see how to make it work for this post.

If you are familiar with CSS or whatever its extensions, you will see that it can be easily converted to CSS.

To make it work, copy only CSS parts before and write CSS file similar to

```css
.markdown {
    & > * {

    }
    // more CSS extension syntax here
}
```

It has become normal CSS file with **CSS extension** syntax.

We just pasted CSS from the previous file inside **.markdown** class. We use it to help **div.className = "markdown";** we made before in **web/src/components/code.rs** to work.

What you need next is to find how to convert them into normal **CSS**.

[You can search on your own](https: //www.google.com/search?q=sass+to+css+online) and use what you want.

Then, include all the relevant files to it in **index.html**.

```html
  <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="markdown.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/foundation.min.css">
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
```

and it will help you to render markdown in a better layout.

I let this brief explanation part to help you find the project at [Full Stack Rust] better. It will be helpful for people who need the similar process to use CSS from their previous project.

<br />

## 4. Conclusion

In this post, we learnt how to use **markdown** files in Rust frontend. We wrote **JavaScript** code and modfiy it to use in your **Rust frontend**.

You could already find how to render a text, image, video etc with [Rust Full Stack] also.

It is easy to write Rust frontend code.

What you need are

1. How to use your previous experience with other programming languages.

2. Write Rust code with it.

and that is all.

In the next [Rust blog posts], we will learn how to make components in Rust [Yew] and modulize the project. Then, we will write full stack Rust chat app with Rust frontend and server side code.

You can learn it with documentation from [Yew], [How to start Rust Chat App] and [Full Stack Rust] on your own also.

If you need a full stack Rust developer, contact me with [LinkedIn] or be one of them.

I update [Full Stack Rust] repository and announce new posts at [Twitter]. So, please follow me at [Twitter] if you want the latest contents.

**Thanks and please share this post with others.**
