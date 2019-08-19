<!--
    Post{
        subtitle: "Learn how to handle CORS/OPTIONS with Rust.",
        image: "post/web/how-to-use-cors-with-rust.png",
        image_decription: "Image by Steadylearner",
        tags: "How Rust CORS code",
    }
-->

<!-- Link -->

[Steadylearner]: https://www.steadylearner.com
[Rust Website]: https://www.rust-lang.org/

[Rust Rocket]: https://rocket.rs/
[Rocket Getting Started]: https://rocket.rs/v0.4/guide/getting-started
[Rocket JSON Example]: https://github.com/SergioBenitez/Rocket/tree/master/examples/json
[Redirect]: https://api.rocket.rs/v0.4/rocket/response/struct.Redirect.html
[Tera]: https://tera.netlify.com/
[Rocket Tera example]: https://github.com/SergioBenitez/Rocket/tree/master/examples/tera_templates

[CORS]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
[OPTIONS]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS
[Rocket CORS]: https://github.com/lawliet89/rocket_cors
[Rocket CORS examples]: https://github.com/lawliet89/rocket_cors/tree/master/examples
[Rocket CORS fairing example]: https://github.com/lawliet89/rocket_cors/blob/master/examples/fairing.rs
[Rocket CORS fairng test example]: https://github.com/lawliet89/rocket_cors/blob/master/tests/fairing.rs

[hyper]: https://github.com/hyperium/hyper

[Rust Dotenv]: https://crates.io/crates/dotenv
[Reqwest]: https://docs.rs/reqwest/0.9.18/reqwest/

[YouTube API]: https://developers.google.com/youtube/v3/getting-started#before-you-start
[How to use YouTube API for developers]: https://www.google.com/search?q=how+to+use+youtube+api+for+developers

[Rust Full Stack]: https://github.com/steadylearner/Rust-Full-Stack
[JSON Webservice]: https://github.com/steadylearner/Rust-Full-Stack/tree/master/server/before/JSON_Webservice

[Rust Blog Example]: https://github.com/steadylearner/Rust-Full-Stack/tree/master/web/before/rust_blog

[CRA]: https://github.com/facebook/create-react-app

<!-- / -->

<!-- Steadylearner Post -->

[Rust blog posts]: https://www.steadylearner.com/blog/search/Rust
[How to install Rust]: https://www.steadylearner.com/blog/read/How-to-install-Rust
[Rust Chat App]: https://www.steadylearner.com/blog/read/How-to-start-Rust-Chat-App
[Rust Yew Frontend]: https://github.com/yewstack/yew
[Yew Counter]: https://www.steadylearner.com/yew_counter
[How to use Rust Yew]: https://www.steadylearner.com/blog/read/How-to-use-Rust-Yew
[How to deploy Rust Web App]: https://www.steadylearner.com/blog/read/How-to-deploy-Rust-Web-App
[How to start Rust Chat App]: https://www.steadylearner.com/blog/read/How-to-start-Rust-Chat-App
[Fullstack Rust with Yew]: https://www.steadylearner.com/blog/read/Fullstack-Rust-with-Yew
[How to use NPM packages with Rust Frontend]: https://www.steadylearner.com/blog/read/How-to-use-NPM-packages-with-Rust-Frontend
[How to use markdown with Rust Frontend]: https://www.steadylearner.com/blog/read/How-to-use-markdown-with-Rust-Frontend
[How to modulize your Rust Frontend]: https://www.steadylearner.com/blog/read/How-to-modulize-your-Rust-Frontend
[How to write Full Stack Rust Code]: https://www.steadylearner.com/blog/read/How-to-write-Full-Stack-Rust-code
[How to use a modal in Rust]: https://www.steadylearner.com/blog/read/How-to-use-a-modal-in-Rust
[How to use routers in Rust Frontend]: https://www.steadylearner.com/blog/read/How-to-use-routers-in-Rust-Frontend
[How to serve static files with Rust]: https://www.steadylearner.com/blog/read/How-to-serve-static-files-with-Rust
[How to use a single page app wtih Rust]: https://www.steadylearner.com/blog/read/How-to-use-a-single-page-app-with-Rust
[How to use Rust Tera for undefined paths]: https://www.steadylearner.com/blog/read/How-to-use-Rust-Tera-for-undefined-paths
[How to make JSON Webservice with Rust and YouTube API]: https://www.steadylearner.com/blog/read/How-to-make-JSON-Webservice-with-Rust-and-YouTube-API

[How to use Python in JavaScript]: https://www.steadylearner.com/blog/read/How-to-use-Python-in-JavaScript
[How to use React Spring to animate your message]: https://medium.com/@steadylearner/how-to-use-react-spring-to-animate-your-message-2bd2a7e62a5a

<!-- / -->

<!-- Steadylearner Twitter and LinkedIn  -->

[Twitter]: https://twitter.com/steadylearner_p
[LinkedIn]: https://www.linkedin.com/in/steady-learner-3151b7164/

<!--  -->

In the previous post, we learnt [How to make JSON Webservice with Rust and YouTube API].

We will improve it and learn how to enable [CORS] for [Rust Rocket] project in this post. We need it because fetch API from Rust Yew frontend requires the server side to allow HTTP requests with [OPTIONS].

It will help you to write [Rust Full Stack] app with datas.

If you want to the entire full stack project first, visit [JSON Webservice]. You can also refer to [video parts from Steadylearner](https://www.steadylearner.com/video) if you want more practical example.

This post will be very [Rust Rocket] framework specific. If you use another Rust framework, find if it has feature to enable **CORS/OPTIONS**. Then, use this post just for a reference.

<br />

<h2 class="red-white">[Prerequisite]</h2>

1. [How to install Rust]
2. [Rocket CORS examples]

---

If you haven't installed Rust in your machine yet, read [How to install Rust]. We will use [Rust Rocket] framework. If you haven't used it before, visit [Rocket Getting Started].

I want you to read [the previous post][How to make JSON Webservice with Rust and YouTube API] if you haven't yet. You will need to set up [YouTube API] development environment with [How to use YouTube API for developers]. Then, build **.env** file with [Rust Dotenv] if you want to use the exactly same code for this post.

We will use [Rocket CORS fairing example] for this post to enable CORS/OPTIONS for Rust server side routes. You can use [other examples from rocket-cors][Rocket CORS examples] also.

We already have many [Rust Full Stack] projects and [Rust blog posts] to learn how to use them. Deploy it with [How to deploy Rust Web App].

<br />

<h2 class="blue">Table of Contents</h2>

1. Enable CORS with rocket-cors
2. Manual test with CURL
3. Test with rocket-cors
4. **Conclusion**

---

<br />

## 1. Enable CORS with rocket-cors

We need to use [hyper] to test **rocket_cors** in this post but it is already rexported with Rocket. Therefore, **Cargo.toml** will be equal to the previous one.

```toml
[package]
name = 'rust_json_web_service'
version = "0.1.0"
authors = ["www.steadylearner.com"]
edition = "2018"

[dependencies]
rocket = "0.4.2"
serde = "1.0"
serde_derive = "1.0"
serde_json = "1.0"
dotenv = "0.14.1"
reqwest = "0.9.19"
rocket_cors = "0.5.0"

[dependencies.rocket_contrib]
version = "0.4.2"
default-features = false
features = ["tera_templates", "json"]
```

Then, we will edit **main.rs**() to make it work with **rocket_cors**.

The payloads for this post will be similar to this.

```rust
#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use]
extern crate rocket;
extern crate rocket_cors;

use rocket::http::Method; // 1.

use rocket_cors::{
    AllowedHeaders, AllowedOrigins, Error, // 2.
    Cors, CorsOptions // 3.
};

fn make_cors() -> Cors {
    let allowed_origins = AllowedOrigins::some_exact(&[ // 4.
        "http://localhost:8080",
        "http://127.0.0.1:8080",
        "http://localhost:8000",
        "http://0.0.0.0:8000",
    ]);

    CorsOptions { // 5.
        allowed_origins,
        allowed_methods: vec![Method::Get].into_iter().map(From::from).collect(), // 1.
        allowed_headers: AllowedHeaders::some(&[
            "Authorization",
            "Accept",
            "Access-Control-Allow-Origin", // 6.
        ]),
        allow_credentials: true,
        ..Default::default()
    }
    .to_cors()
    .expect("error while building CORS")
}

fn rocket() -> rocket::Rocket {
    rocket::ignite()
        .mount(
            "/",
            routes![
                video_search_by_id::webservice,
            ],
        )
        .attach(make_cors()) // 7.
}

fn main() -> Result<(), Error> { // 2.
    rocket().launch();

    Ok(())
}

```

The important parts are

**1.** We will Use **Method::Get** from Rust Rocket to specify allowed HTTP methods.

**2.** The error part of return value of **main** is from **rocket_cors**.

**3.** This is to use CORS and easily refactor the file later.

**4.** Include ports you use for your development server and client to allow CORS/OPTIONS HTTP requests.

**5.** Read the documentation about [CorsOptions][https://lawliet89.github.io/rocket_cors/rocket_cors/struct.CorsOptions.htm].

**6.** You need to allow **Access-Control-Allow-Origin** for CORS and the [Rust Blog Example] we will build in the later [Rust blog posts].

**7.** When you compile it with **$./run-local.sh** in your main folder, you will see the console message similar to

```console
Mounting /cors:
    => GET /cors/<status>
Fairings:
    => 1 request: CORS
    => 1 response: CORS
```

Then, send request in the frontend by clicking **This video in Rust** or CURL.

[![Rust JSON Webservice example by Steadylearner](https://www.steadylearner.com/static/images/post/web/rust-json-webservice-example.png)][JSON Webservice]

Your console will show

```console
Error: No matching routes for OPTIONS /video_search_by_id/8EPsnf_ZYU0.
Warning: Responding with 404 Not Found catcher.
```

first and right **Video** typed JSON response from [YouTube API] later.

It first passed **video_search_by_id::webservice** part with the error messages. But, it returns correct data again with **.attach(cors)** from **rocket-cors**.

When you made it work, you can use it instantly for your project. Just modify

1. allowed_origins
2. allowed_methods
3. allowed_headers

and **copy and paste** other parts.

<br />

## 2. Manual test with CURL

We already made **tests.rs** for JSON Webservice in the previous post.

We will imporve it to test CORS/OPTIONS HTTP relevant code we made before. We will first use CURL to prototype the new tests before.

Do it with the ports you use in server and client. **$Cargo run** in /server folder and use CURL in other console.

```console
$curl -H "Origin: http://localhost:8080" --verbose \http://localhost:8000/video_search_by_id/8EPsnf_ZYU0
```

and the result will be similar to

```console
*   Trying 127.0.0.1...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 8000 (#0)
> GET /video_search_by_id/8EPsnf_ZYU0 HTTP/1.1
> Host: localhost:8000
> User-Agent: curl/7.58.0
> Accept: */*
> Origin: http://localhost:8080
>
< HTTP/1.1 200 OK
< Content-Type: application/json
< Server: Rocket
< Access-Control-Allow-Origin: http://localhost:8080
< Access-Control-Allow-Credentials: true

* Connection #0 to host localhost left intact
{"items":[{"id":"8EPsnf_ZYU0","snippet":{"title":"Rust }}]}
```

and we can verify that it reutrn the data with **id** and **snippet.title** we will use in our simple [Rust Full Stack] YouTube vlog.

You can also see the message from the **Rust Rocket server** in the other console

```console
GET /video_search_by_id/8EPsnf_ZYU0:
    => Verifying origin: http://localhost:8080

Video {"items":[{"id":"8EPsnf_ZYU0","snippet":{"title":"Rust }}]}

Response succeeded.
```

Test it more with invalid video id, ports etc if you want.

## 3. Test with rocket-cors

We manually tested the project in the previous part.

For we already verified it, we will write some automated tests with [Rocket CORS fairng test example].

We will edit tests.rs from the previous post.

The important part in new **tests.rs** will be

```rust
use rocket::http::{
    Status,
    ContentType,
    // 1.
    Header,
    hyper::header::{
        Origin
    },
};

#[test]
fn valid_youtube_id_and_origin() {
    let client = Client::new(rocket()).unwrap();

    let valid_youtube_id = "8EPsnf_ZYU0";

    let request_url = format!(
        "/video_search_by_id/{}",
        valid_youtube_id,
    );

    let valid_origin = Header::new("Access-Control-Allow-Origin", "http://127.0.0.1:8000"); // 2.

    let mut res = client
        .get(&request_url)
        .header(Origin::new("http", "127.0.0.1:8080", None)) // 3.
        .header(valid_origin)
        .header(ContentType::JSON)
        .dispatch();

    println!("{:#?}", res.headers());

    assert_eq!(res.headers().len(), 4); // 4.

    assert_eq!(res.status(), Status::Ok);

    let body = res.body_string().unwrap();
    let video: Video = serde_json::from_str(&body).unwrap();

    let payload = &video.items.unwrap()[0];

    assert_eq!(payload.id, valid_youtube_id.to_string());
    assert!(payload.snippet.title.contains("Rust"));
}
```

It is very similar to the **valid_youtube_id** test funciton we made before and it was modified to be compatible with this code in Rust yew client.

```rust
// /web/src/lib.rs
let request = Request::builder()
    .method("GET")
    .uri("http://localhost:8000/video_search_by_id/8EPsnf_ZYU0")
    .header("Access-Control-Allow-Origin", "http://127.0.0.1:8000") // 2.
    .body(Nothing)
    .unwrap();
```

The differences are

**1.** Include **Header** and **Orgiin** API from [Rust Rocket] and [hyper] to test the route with more complicated headers.

**2.** Use this to be compatible with equivalent code in client.

**3.** This is the payload. You can manually set the origin of the request with it.

**4.** You should use 4 instead of 3 here.

Because this is included in headers also.

```console
Uncased {
    string: "Server",
}: [
    "Rocket",
],
```

You can use **println!("{:#?}", res.headers());** work with **$cargo test -- --nocapture**.

Test it with **$cargo test** at this point. Then, write more while you refer to [Rocket CORS fairng test example]. If you need more information, read [Rust Rocket] and [hyper] documenation.

## 4. Conclusion

We will learn how to use Fetch API with server and build simple vlog and blog example with it. We need to enable CORS/OPTIONS to make them work. Therefore, we learnt **How to use CORS/OPTIONS with Rust Rocket and test them**.

In the next [Rust blog posts], we will build a simple Rust vlog app with [YouTube API] and render blog posts with markdown file from GitHub.

Then, we will find how to include the database in our [Rust Full Stack] project, build CLI for, login page, JSON Web Token etc with Rust.

If you want the latest contents from Steadylearner, follow me at [Twitter].

Do you need **a Full Stack Rust Developer**? Contact me with [LinkedIn] and I will help you.

**Thanks and please share this post with others**.
