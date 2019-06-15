const Example = ` ### URL to learn Markdown
---
 [Markdown-Tutorial]: https://www.markdowntutorial.com/

 0. [Start with Markdown-Tutorial][Markdown-Tutorial]
 1. [Markdown CheatSheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
 2. [Use mark down for Github page](https://help.github.com/articles/getting-started-with-writing-and-formatting-on-github/)
 3. [Advanced Contents](https://www.markdowntutorial.com/conclusion/)
 4. [Example to make Github README.md File](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
 5. [Markdown to html](https://markdowntohtml.com/)
 6. [Your markdown converter with React](https://github.com/rexxars/react-markdown)
 7. [Markdown Interpreter](https://dillinger.io/)
---

## Simple Examples

### 1. italic and bold

_italic_
**bold**
**_italicAndBold_**

### 2. Headers


# h1
## h2

[You can also use markdown for code here also][https://learnxinyminutes.com/docs/markdown/]

<!-- Link here -->

[Rust Sitemap Crate]: https://github.com/svmk/rust-sitemap
[Steadylearner]: https://www.steadylearner.com
[Steadylearner Github Repository]: https://github.com/steadylearner/Steadylearner
[How to deploy Rust Web App]: https://medium.com/@steadylearner/how-to-deploy-rust-web-application-8c0e81394bd5?source=---------9------------------

<!-- Title - How to build a static sitemap with Rust -->
<!-- Subtitle - Learn how to build sitemap.xml with rust-sitemap crate.
<!-- Image - /static/images/code/Rust.sgv -->
<!-- Description - Rust Image from official site -->

For this site is built with Rust Backend, I had to find how to make sitemap with Rust and I  couldn't find information for that easily.  So I decided write post for that to help others and the later use. 

The entire process was easier than I thought it would for there was already Rust crate to build sitemap.

The code used here is similar to what is used for  the [Steadylearner][Steadylearner] and you can find the some source code used for it and this post at [Steadylearner Github Repository][Steadylearner Github Repository] also. 

What you need to do before is just to read some official documentations first to help you learn how to use your static routes to build sitemap.xml file with rust.  

<br />

<h2 class="red-white">[Prerequisite]</h2>

1. [Rust Sitemap Crate][Rust Sitemap Crate]
2. [Rust by example](https://doc.rust-lang.org/rust-by-example/), [Rust official documentation](https://doc.rust-lang.org/book/)
3. [What is sitemap](https://support.google.com/webmasters/answer/156184?hl=en) 
4. [How to build a sitemap](https://www.google.com/search?client=firefox-b-d&q=how+to+build+sitemap)

---

You don't have to visit all links above if you already know how to write Rust code and what is sitemap. I hope you read at least the source code of [Rust Sitemap Crate][Rust Sitemap Crate] and play with the examples first.

<br />

## [Table of Contents]

1. How to build **sitemap.xml** file with a sinlge path with Rust
2. How to use **vector** to build sitemap with static routes
3. **Chrono** to pass the **current date** easily for sitemap
4. **Conclusion**

---

<br />

## 1. How to build sitemap.xml file with a sinlge path with Rust

I hope you already visited the Github page of [Rust Sitemap Crate] and tested some examples. For our goal is to write sitmeap.xml wiht it, we will first talk about **Writng sitemap documents** part form the page.

`;

// ` should be used to make it work

export default Example;
