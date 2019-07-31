<!--
    Post{
        subtitle: "It will help you to include Yew routers in your project.",
        image: "post/web/rust-router-example.png",
        image_decription: "Image by Steadylearner",
        tags: "How Rust Yew routers",
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
[Yew Router Example]: https://github.com/DenisKolodin/yew/tree/master/examples/routing/src
[Rust Full Stack Router Example]: https://github.com/steadylearner/Rust-Full-Stack/tree/master/web/before/router
[Yew NPM example]: https://github.com/DenisKolodin/yew/tree/master/examples/npm_and_rest
[Yew inner HTML example]: https://github.com/DenisKolodin/yew/blob/master/examples/inner_html/src/lib.rs
[Yew Custom Components example]: https://github.com/DenisKolodin/yew/tree/master/examples/custom_components/src

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
[ws-rs]: https://github.com/housleyjk/ws-rs
[serde]: https://serde.rs/derive.html

[React Easy Markdown]: https://github.com/steadylearner/react-easy-md/blob/master/src/MarkdownPreview.js
[Marked]: https://github.com/markedjs/marked

<!-- / -->

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
[How to use markdown with Rust Frontend]: https://www.steadylearner.com/blog/read/How-to-use-markdown-with-Rust-Frontend
[How to modulize your Rust Frontend]: https://www.steadylearner.com/blog/read/How-to-modulize-your-Rust-Frontend
[How to write Full Stack Rust Code]: https://www.steadylearner.com/blog/read/How-to-write-Full-Stack-Rust-code
[How to use a modal in Rust Frontend]: https://www.steadylearner.com/blog/read/How-to-use-a-modal-in-Rust-Frontend

[How to use Python in JavaScript]: https://www.steadylearner.com/blog/read/How-to-use-Python-in-JavaScript

<!-- / -->

<!-- Steadylearner Twitter and LinkedIn  -->

[Twitter]: https://twitter.com/steadylearner_p
[LinkedIn]: https://www.linkedin.com/in/steady-learner-3151b7164/

<!--  -->

In the previous post [How to use a modal in Rust Frontend], we learnt how to write a simple image modal with Rust frontend. We could find that we can build components visible only in specific condition.

In this post, we will learn how to use routers in Rust frontend with [Yew]. You will find that it is easy with an example.

<br />

<h2 class="red-white">[Prerequisite]</h2>

1. [How to install Rust]
2. [Yew]
3. [stdeweb]
4. [How to use Rust Yew]
5. [Fullstack Rust with Yew]
6. [How to write Full Stack Rust Code]

---

I want you already have Rust installed in your machine. The blog post [How to install Rust] will help you for that.

If you haven't setup development environment for [Yew], please read the previous post [How to use Rust Yew].

You will get the simple website layout example with this post. You can improve it with [Fullstack Rust with Yew] and [How to write Full Stack Rust Code]. Then, you can deploy it with [How to deploy Rust Web App].

<br />

<h2 class="blue">Table of Contents</h2>

1. Official Yew router example
2. How to include it in your local machine
3. **Conclusion**

---

You can skip first part if you already read [Rust Full Stack Router Example].

<br />

## 1. Official Yew router example

We will start with [Yew Router Example]. I want you visit it and read the source code first. You can see that there are a few files.

The important files will be **lib.rs**, **router.rs**, **routing.rs**. We won't need the rest because main.rs is to start the app and we already have many components in [Rust Full Stack].

In route.rs, there is **use crate::routing::RouteService;**. So you can find **routing.rs** file is just to help **router.rs** file to work. So what we really have to care is just **lib.rs** and **main.rs** after you read their source code.

We could find what are the payloads. But, when you want to test it in your local machine, it won't be easy to start with [it][Yew Router Example].

You may read the code of [Rust Full Stack Router Example] at this point. Then, test it while you refer to [How to use Rust Yew].

<br />

## 2. How to include it in your local machine

The [Yew Router Example] was not made to learn directly in your machine but to show you can use routers in Rust [Yew] only. So it will be very helpful to have the example for that.

We will start with **main.rs**.

```rust
extern crate yew;
extern crate sl_lib;

use sl_lib::Model;

fn main() {
  yew::start_app::<Model>(); // 1.
}
```

In the main.rs file of [Yew Router Example], you could see `yew::start_app::<routing::Model>();`. It won't work in your machine. So use **2.** instead. Then, you can copy and paste **router.rs** and **routing.rs** from the example and start to write your own code in **lib.rs**.

Its payload will be similar to this. The code snippet is long so read briefly and find only important parts.

```rust
extern crate stdweb;
extern crate yew;

use stdweb::web::Location;
use stdweb::web::window;

mod router;
mod routing; // 1.

use log::info;
use router::Route;
use yew::{html, Bridge, Component, ComponentLink, Html, Renderable, ShouldRender};
use yew::agent::Bridged;
use yew::services::{
    ConsoleService, // 2.
};

// 3.
pub enum Child {
    Home,
    With,
    PathNotFound(String)
}

pub struct Model {
    child: Child,
    router: Box<dyn Bridge<router::Router<()>>>, // 4.

    console: ConsoleService,
    location: Location,
}

pub enum Msg {
    NavigateTo(Child),
    HandleRoute(Route<()>)
}

impl Component for Model {
    type Message = Msg;
    type Properties = ();

    // This part will be always similar
    fn create(_: Self::Properties, mut link: ComponentLink<Self>) -> Self { // 5.
        let callback = link.send_back(|route: Route<()>| Msg::HandleRoute(route));
        let mut router = router::Router::bridge(callback);

        router.send(router::Request::GetCurrentRoute);

        let location = window().location().expect("browser does not support location API");

        Model {
            child: Child::Home, // This should be quickly overwritten by the actual route.
            router,
            console: ConsoleService::new(),
            location,
        }
    }

    // This will be always payload of your Yew component
    fn update(&mut self, msg: Self::Message) -> ShouldRender {
        match msg {
            // 5.
            Msg::NavigateTo(child) => {
                let pathname: Vec<String> = match child {
                    Child::Home => vec!["".into()],
                    Child::With => vec!["with".into()],
                    Child::PathNotFound(_) => vec!["path_not_found".into()]
                };

                let current_route = self.location.pathname().unwrap();

                let target_route = format!("/{}", &pathname[0]).to_string();

                self.console.log(&format!("Current Route: {}", &current_route).to_string());
                self.console.log(&format!("Target Route: {}", &target_route).to_string());

                if current_route == target_route {
                    self.console.warn("It is not allowed to redirect to the same page.");
                    false
                } else {
                    let route = router::Route {
                        pathname,
                        query: None,
                        fragment: None,
                        state: (),
                    };

                    self.router.send(router::Request::ChangeRoute(route));
                    false
                }
            }

            // 6.
            Msg::HandleRoute(route) => {
                info!("Routing: {}", route.to_route_string());
                self.child = if let Some(first_segment) = route.pathname.get(0) {
                   match first_segment.as_str() {
                       "" => Child::Home,
                       "with" => Child::With,
                        other => Child::PathNotFound(other.into())
                   }
                } else {
                    Child::PathNotFound("path_not_found".into())
                };

                true
            }
        }
    }
}

// 7.
impl Renderable<Model> for Model {
    fn view(&self) -> Html<Self> {
        html! {
            <section>
                <nav>
                        <li
                            class=&list_class,
                        >
                            <img
                                src="https://www.steadylearner.com/static/images/code/Rust.svg",
                                onclick=|_| Msg::NavigateTo(Child::Home),
                            />
                        </li>
                        <li
                            onclick=|_| Msg::NavigateTo(Child::With),
                        >
                            <span>
                                { "With" }
                            </span>
                        </li>
                </nav>
                <main>
                    <section>
                        {self.child.view()} // 6.
                    </section>
                </main>
            <section/>
        }
    }
}

// 6.
impl Renderable<Model> for Child {
    fn view(&self) -> Html<Model> {
        match *self {
            Child::Home => html! {
                <img
                    src="https://www.steadylearner.com/static/images/brand/code_b.png",
                />
            },
            Child::With => html! {
                <img
                    src="https://www.steadylearner.com/static/images/brand/rust_you.png",
                />
            },
            Child::PathNotFound(ref path) => html! {
                <span>
                    {format!("Invalid path: '{}'", path)}
                </span>
            }
        }
    }
}
```

Most of them are similar to lib.rs file in [Yew Router Example]. But, differences are

**1.** It is for **use crate::routing::RouteService;** in router.rs to work.

**2.** You will need it whenever you develop Rust Frontend project.

**3.** We use those enum variable to use them inside navigation components. You just need to repeat them later with a little variation to make this file work.

**4.** You should find that **self.router** variable will be dynamically allocated in heap with this syntax. We will hanlde it later.

**5.** Before you read on, I want you to test [Rust Full Stack Router Example] first with **yarn && yarn watch:rs**.

You will find the code below

```rust
let current_route = self.location.pathname().unwrap();

let target_route = format!("/{}", &pathname[0]).to_string();

self.console.log(&format!("Current Route: {}", &current_route).to_string());
self.console.log(&format!("Target Route: {}", &target_route).to_string());

if current_route == target_route {
    self.console.warn("It is not allowed to redirect to the same page.");
    false
} else {
    let route = router::Route {
        pathname,
        query: None,
        fragment: None,
        state: (),
    };

    self.router.send(router::Request::ChangeRoute(route));
    false
}
```

instead of the example from [Yew]

```rust
let route = router::Route {
    path_segments,
    query: None,
    fragment: None,
    state: (),
};

self.router.send(router::Request::ChangeRoute(route));
false
```

helps the client not to save every **NavigateTo** request from the user. With this code, **history** api will not work when the requests are for the same location.

You can test it in your machine with both codes and click the one of link there many times. Then, use back and forward buttons in your browser. You will find the difference.

It is not official but I include this code because I already have experience with it in React.

You may need it also because users may click your routes many times just for curiosity or when they are not with decent internet connection etc.

It won't be diffiuclt to find what other code snippet in **5.** do. I used **pathname** here instead of **path_segments** to make it more comparable with other codes you will use. For that, you may edit varaible names in **route.rs** from [Yew Router Example] also.

In `let target_route = format!("/{}", &pathname[0]).to_string();`, we prefix **/** for **&pathname[0]** to compare it with **current_route** and others are just simple conditional statements with some instructions.

**6.** You can see that is is directly relevant to **self.child.view()**. We use *""* instead of **"/home"** to represent the **"/"**. You can use whatever you want here instead of **Home**, **With** etc. This is just to help you to find this blog post.

You can see that you just need to repeat **Home** and **With** we define in **enum Child** and use *""* instead of "home" when
necessary.

**7.** You can refer to the other [Rust blog posts] and especially [How to modulize your Rust Frontend]. You will learn how to minimize this **lib.rs** with long code snippets.

In **routing.rs** at [Rust Full Stack Router Example], you will find `#[allow(dead_code)]`. Without it, you will see **unused code** warning from Rust compiler. You may use it rather than delete code from the [Yew] authors.

It will be just a personal choice for the routers are not officialy inside [Yew] crate API yet and you won't need all the function inside it to test this example.

When you are not with previous experience with single page apps before, you may find problem when referesh when include it in your server side. 

Instruct the server to return **index.html** of your project with server side routes for all the pages such as "/", "/with" etc you made in your Rust frontend.

It will not be different from deploying your single page app with JavaScript. They are just static files and what you need is just **copy and paste** what you already had for them.

<br />

## 3. Conclusion

I hope you could make it work in your machine.

It was the last part we need to write full stack Rust Web App. With routers at Rust frontned, you can develop your components or pages separately, then include it easily in your whole [Rust Full Stack] project.

**You can make full stack Rust website with it.**

Learning how to do that is not difficult for [you already have many examples][Rust Full Stack].

If you want the latest contents from Steadylearner, follow me at [Twitter].

Do you need a Full Stack Rust and JavaScript Developer? contact me with [LinkedIn] or be one of them.

These posts may not have made if someone told me "Do you really know HTML, CSS, JavaScript, Node and other frameworks and you are not ready to work because you are not with professional expereience with other frontend frameworks".

Well, [it][Rust Full Stack] was funny response for that anyway and will be helpful for others.

**Thanks and please share this post with others.**
