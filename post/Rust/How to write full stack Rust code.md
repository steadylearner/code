<!--
    Post{
        subtitle: "Learn how to write server and client side code for Rust",
        image: "post/web/how-to-write-full-stack-rust-code.png",
        image_decription: "Image by Steadylearner",
        tags: "How wrtie Rust code",
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

[How to use Python in JavaScript]: https://www.steadylearner.com/blog/read/How-to-use-Python-in-JavaScript

<!-- / -->

<!-- Steadylearner Twitter and LinkedIn  -->

[Twitter]: https://twitter.com/steadylearner_p
[LinkedIn]: https://www.linkedin.com/in/steady-learner-3151b7164/

<!--  -->

In the previous post [How to modulize your Rust Frontend], we learnt how to use **impl**, **functions** and [Yew] components. They help you to find errors and organize your Rust frontend project.

In this post, we will include server side code with [ws-rs]. It will help us to build complete [Rust Full Stack] chat app similar to what we made at [How to start Rust Chat App].

You will find writing full stack Rust code is not difficult. You can even just **copy and paste** [server side Rust code](https://github.com/steadylearner/Rust-Full-Stack/blob/master/server/src/http_model/websocket_json.rs) to [Rust frontend](https://github.com/steadylearner/Rust-Full-Stack/blob/master/web/src/http_model/websocket_json.rs) also.

**You will verify that they work.**

<br />

<h2 class="red-white">[Prerequisite]</h2>

1. [How to install Rust]
2. [Yew]
3. [ws-rs]
4. [sere]
5. [How to start Rust Chat App]
6. [How to use Rust Yew]
7. [Fullstack Rust with Yew]

---

I want you already have Rust installed in your machine. The blog post [How to install Rust] will help you for that.

If you haven't setup development environment for [Yew], please read the previous post [How to use Rust Yew]. Then, visit [Fullstack Rust with Yew] and [How to use NPM packages with Rust Frontend].

I hope you already read the previous [Rust blog posts] and especially [How to start Rust Chat App]. They will help you to find this post better.

We will use [serde] to serialize and deserialize many times in both server and client and [ws-rs] to build **websocket server** and connect it from client.

The source code of [The simulated Rust chat app without web socket](https://github.com/steadylearner/Rust-Full-Stack/blob/master/web/before/component/) will help you if you find the current [Rust Full Stack] code complicated or want example wihtout websocket.

If you could build your [Rust Full Stack] project, you can deploy it with [How to deploy Rust Web App].

<br />

<h2 class="blue">Table of Contents</h2>

1. **websocket_json.rs** to connect server and client
2. WebSocket Server with [ws-rs]
3. Client with [Rust]
4. **Conclusion**

---

<br />

## 1. websocket_json.rs to connect server and client

For our goal is to write [Rust Full Stack] code, we should write code that help you to use **Rust** in both server and frontend. We will write **websocket_json.rs** in **server/src/http_model** folder.

It will be similar this and you can find equivalent code in **web/src/http_model**.

```rust
// https://serde.rs/derive.html
use serde_derive::{Deserialize, Serialize};

// Into WebSocket - Message
#[derive(Serialize, Deserialize, Debug)]
pub struct WebSocketRequest {
    pub value: String, // 1.
    pub message_type: String, // 2.
    pub client: Option<String>, // 3.
}

// From WebSocket Server - Broadcast
#[derive(Serialize, Deserialize, Debug)]
pub struct WebSocketResponse {
    pub value: String,
    pub message_type: String,
    pub client: Option<String>,

    // from websocket
    pub number_of_connection: u32, // 4.
}
```

In **WebSocket client**, We use **WebSocketRequest** to send the message and **WebSocketResponse** to receive the messages from all the users connected with **WebSocket server** including **the user** and will be vice versa in **WebSocket server**

I hope you read and test the entire project to find how they work better.

We will only foucs why we use each data types here for simplicity.

1. The client will send the data in text format and server will interpret it.

2. You can send a text, image, video and code separately with it.

3. Before the client connect to websocket, there is no data(None) for client so use this type.

4. Only server have information for the total number of user.

You may use only use Serialize or Deserialze depending on the location of this file(inside server or web folder). We will not care for it to help you copy and paste them easily between server and client.

Later we will use [serde] and its api to send and receive datas with them. You can think that you should use **serialize** when you send the data and **deserialize** when you want to use their members.

<br />

## 2. WebSocket Server with ws-rs

If you compare **ws_rs.rs** from [How to start Rust Chat App] and [Rust Full Stack], you will find that there are a few differences.

Its payload will be similar to

```rust
use super::super::http_model; // 1.

use self::{
    http_model::{
        websocket_json::{
            WebSocketRequest,
            WebSocketResponse,
        },
    },
};

impl Handler for WebSocket {
    fn on_open(&mut self, handshake: Handshake) -> Result<()> {
        let client = handshake.peer_addr.expect("Websocket failed to locate the client").to_string();

        let ws_resp = WebSocketResponse {
            value: format!("I want to use a chat app completely built in Rust.").to_string(),
            message_type: "text".to_string(), // 2.
            client: Some(client), // 3.
            number_of_connection,
        };

        // 4.
        println!("{:#?}", &ws_resp);
        let serialized = serde_json::to_string(&ws_resp).unwrap();
        println!("serialized = {}", serialized);

        self.out.broadcast(serialized)
    }

    fn on_message(&mut self, message: Message) -> Result<()> {
        let number_of_connection = self.count.get();

        let raw_message = message.into_text()?;
        println!("The message from the client is {:#?}", &raw_message);

        // 5.
        let ws_request: WebSocketRequest = serde_json::from_str(&raw_message).unwrap();
        println!("ws_request = {:?}", &ws_request);
        let WebSocketRequest { value, message_type, client } = ws_request;

        let client = if value == "!clearall" {
            None
        } else {
            client
        };

        let ws_resp = WebSocketResponse {
            value,
            message_type,
            client,
            number_of_connection,
        };

        // 6.
        println!("{:#?}", &ws_resp);
        let serialized = serde_json::to_string(&ws_resp).unwrap();
        println!("serialized = {}", serialized);

        self.out.broadcast(serialized)
    }
}
```

We won't care for much with **on_request**, **on_close** and **on_error** and it will be the same for frontend client part.

You shouldn't edit code at **on_request** if you are not expert with this topic. Just use the code the author of [ws-rs] prepared for its users.

**on_close** and **on_error** part will be only useful when you already have code for **the real users**.

It will be much simpler to find what this file do.

**1.** We need it to use in **websocket_json.rs** we made before. The module system in **Rust** may confuse you. Then, you should verify **pub mod** or **mod**(lib.rs) for the file you want to import and use **super** keyword well.

It will be better for you to refer to [Rust Full Stack] than to write every detail for that here or find other documentation for it.

**2.** on_open is used when **WebSocket** server send the first message to its cient. The default message type will be **text** in both server and client. You can use on_open later more with login, oauth etc and the databases you have.

**3.** There is no user part to differenciate users here yet because what we want is just local chat app. If you read the previous post [How to start Rust Chat App], we can solve it with this.

**4.** We made JSON data with **WebSocketResponse** and we should **serialize** it with **serde_json::to_string(&ws_resp).unwrap();** api before we send it to client and you can use it in client with **deserialize** later with ease.

**5.** on_message will be the most important part for your [Rust Full Stack] chat app to work.

You can see that we use **serde_json::from_str(&raw_message).unwrap();** to use the data from websocket clients. Then, you can write some handlers and conditional statements for them.

**6.** We need to serialize them again before we send it to clients.

It will be easy to find what they do if you read and test [Rust Full Stack].

You may edit it more whenever you write more code at frontned that affect it because it is full stack project.

You can write code for login, database and etc later.

It is the **single source of truth for messages user will receive and render in the next part**

<br />

## 3. Client with Rust

We will improve the previous Rust frontend code from [Full Stack Rust]. If you visited it already, you can fidn that it is not that simple as it was in [How to use Rust Yew] or [Yew Counter].

Therefore, we will care for only important files for this post. They will be **lib.rs**, **state.rs**, **ws_rs.rs**, **message.rs** and websocket_json.rs.

We already know that **websocket_json.rs** file is equal in both Rust server and client code. So we don't need to handle it here.

You can compare them to each part of ws_rs.rs **server** and what you read before. We will start with **state.rs**.

```rust
#[derive(Debug)]
pub struct State {
  pub ws_responses: Vec<Option<String>>, // 1.
  pub message_type: String, // 2.
  pub client: Option<String>, // 3.
}

// 4.
impl State {
    pub fn lost(&mut self) {
        self.client = None;
    }
}
```

**1.** We need to save the responses from the server and learn how to render them with one of [Yew Example] later.

**2.** You can use this to each message the client send to the WebSocket server to have different message_type("text", "image", "video", "code").

**3.** Before users connect to the websocket, there will be no data about client, so it will be better use it with None and Some("client"). We use client here to easily compare with server side code but you can also user_id, author etc if you want.

**4.** I let this **impl** parts in **state.rs and ws_rs.rs** to make **lib.rs** file simpler. We use this instead of function because you won't need to reuse it in other parts.

It won't be difficult to find what they do and find how to use them later is more important.

Then, **ws_rs.rs** will be similar to

```rust
use yew::services::websocket::{WebSocketService, WebSocketTask};
use yew::services::Task;
use yew::format::{Json};

use super::{
    http_model::{
        websocket_json::{
            WebSocketRequest,
        }
    },
};

pub struct WebSocket {
    pub ws_service: WebSocketService,
    pub ws: Option<WebSocketTask>,
}

// 1.
pub enum WebSocketAction {
    Connect,
    Disconnect,
    Lost,
}

// 2.
impl WebSocket {
    pub fn connect(&mut self, task: WebSocketTask) {
        self.ws = Some(task);
    }

    // 1.
    pub fn send(&mut self, test: Json<&WebSocketRequest>) {
        self.ws.as_mut().unwrap().send_binary(test);
    }

    pub fn disconnect(&mut self) {
        self.ws.take().unwrap().cancel(); // You can use it with Task
    }

    pub fn lost(&mut self) {
        self.ws = None;
    }
}
```

I separate **ws_rs.rs** file similar to **state.rs** to make the [Yew exmaple with websocket](https://github.com/DenisKolodin/yew/blob/master/examples/dashboard/src/lib.rs) simple.

You can see that there are a few differences.

**1.** There is no **Send** part here and use it inside **impl WebSocket**.

If you read the example, you could find that **Connect**, **Disconnect**, **Lost** and its correspondent contents of **connect**, **disconnect** and **lost** function will be always similar.

But you can easily use **send** whenever you want and you can find that it is not easy to please Rust compiler when it is used in **WebSocketAction**.

If you find the better way, please contribute to [Rust Full Stack].

**2.** You can compare it with code in **impl Handler for WebSocket** in **ws_rs.rs**.

We use those files are to handle the state of user and websocket conenction in client.

The rest are the payload file **lib.rs** to use all of other files and **message.rs** to render **messages** from websocket.

You can see that the code snippets for them are not short. That is why we learnt [How to modulize your Rust Frontend].

We will handle simplified version of **lib.rs** first. You can briefly read it and test it in your local machine.

```rust
pub struct Model {
    state: State,
    ws_rs: WebSocket,
    link: ComponentLink<Model>, // 1.
    console: ConsoleService,
    emoji: EmojiService,
}

pub enum Msg { // 2.
    WebSocketAction(WebSocketAction),
    WebSocketReady(Result<WebSocketResponse, Error>),
    Ignore,
}

impl From<WebSocketAction> for Msg { // 2. 
    fn from(action: WebSocketAction) -> Self {
        Msg::WebSocketAction(action)
    }
}

const WEBSOCKET: &'static str = "ws://127.0.0.1:7777/ws";

impl Component for Model {
    type Message = Msg;
    type Properties = ();

    fn create(_: Self::Properties, link: ComponentLink<Self>) -> Self { 
        // 3.
        let state = State {
            ws_responses: Vec::new(),
            message_type: "text".to_string(),
            client: None,
        };

        let ws_rs = WebSocket {
            ws_service: WebSocketService::new(),
            ws: None,
        };

        Model {
            state,
            ws_rs,
            link,
            console: ConsoleService::new(),
            emoji: EmojiService::new()
        }
    }

    fn update(&mut self, msg: Self::Message) -> ShouldRender {
        match msg {
            Msg::WebSocketAction(action) => {
                match action {
                    // 4.
                    WebSocketAction::Connect => {
                        let callback = self.link.send_back(|Json(data)| Msg::WebSocketReady(data));  
                        let notification = self.link.send_back(|status| {
                            match status {
                                WebSocketStatus::Opened => Msg::Ignore,
                                WebSocketStatus::Closed | WebSocketStatus::Error => WebSocketAction::Lost.into(),
                            }
                        });
                        let task = self.ws_rs.ws_service.connect(WEBSOCKET, callback, notification);
                        self.ws_rs.connect(task);
                    }
                    WebSocketAction::Disconnect => {
                        self.state.lost();
                        self.ws_rs.disconnect();
                        // self.console.log("No connection to WebSocket anymore");
                    }
                    WebSocketAction::Lost => {
                        self.state.lost();
                        // self.console.log("No connection to WebSocket anymore");
                        self.ws_rs.lost();
                    }
                }
            }

            // 5. 
            Msg::WebSocketReady(response) => { // payload, should edit here most of the time
                self.console.log("Websocket is ready. Start to chat with others.");
                let ws_response = response.map(|data| data).ok();

                let serialized = serde_json::to_string(&ws_response).unwrap(); // value in view_response
                self.console.log(&serialized);

                let ws_response: WebSocketResponse = serde_json::from_str(&serialized).unwrap();
                let WebSocketResponse { value, message_type, client, number_of_connection, } = ws_response;

                // should use login page or oauth later instead of this
                // and self.state.client = None when disconnect
                if self.state.client == None {
                    self.state.client = client;
                    let user = self.state.client.clone();
                    let ws_response = WebSocketResponse {
                        value: format!("Your id is {:#?} and {} in total for this page", &user.unwrap(), &number_of_connection),
                        message_type,
                        client: None,
                        number_of_connection,
                    };

                    let serialized = serde_json::to_string(&ws_response).unwrap();
                    self.state.ws_responses.push(Some(serialized));
                } else {
                    // write equivalent condtional for all users from server here server/src/chat/ws_rs.rs
                    match value.as_ref() {
                        "!clearall" => {
                            self.state.ws_responses.clear();
                        }
                        _ => {
                            self.state.ws_responses.push(Some(serialized));
                        }
                    }
                }
            }

            Msg::Ignore => {
                return false;
            }

            // Client

            // 6.
            Msg::Submit(val) => {
                match val.as_ref() {
                    "" => {}
                    "!clear" => {
                        // similar to !clearall in Msg::WebSocketReady(response)
                        self.state.ws_responses.clear();
                    }
                    "!exit" => {
                        // Equal to WebSocketAction::Disconnect
                        self.state.lost();
                        self.ws_rs.disconnect();
                    }
                    _ => {
                        let State { ws_responses: _ , message_type, client } = &self.state;

                        let emojified = self.emoji.emojify(val.to_string());

                        self.console.log(&emojified);

                        let message_type = message_type.clone();
                        let client = client.clone();

                        let request = WebSocketRequest {
                            value: emojified,
                            message_type,
                            client
                        };

                        self.ws_rs.send(Json(&request));

                        if &self.state.message_type != "text" {
                            self.state.message_type = "text".to_string();
                        }
                    }
                }
            }
            Msg::Type(val) => {
                self.state.message_type = val
            }
        }
        true
    }
}

// Make Enter and Exit components later
impl Renderable<Model> for Model {
    fn view(&self) -> Html<Self> {
        let State { ws_responses, message_type, client: _ } = &self.state;
        let WebSocket { ws, ws_service: _ } = &self.ws_rs;
        html! {
            <>
                <Connect: disabled={ws.is_some()}, onsignal=|_| WebSocketAction::Connect.into(), />
                {
                    // 7.
                    for ws_responses
                    .iter()
                    .enumerate()
                    .map(|(idx, response)| {
                            let message = response.clone();
                            let deserialized: WebSocketResponse = serde_json::from_str(&message.unwrap()).unwrap();
                            let WebSocketResponse { value, message_type, client, number_of_connection: _, } = deserialized;
                            // To be explicit here, you can use other variable name or just pass &self.state.client
                            let user = self.state.client.clone();
                            view_message(
                                &idx,
                                &value,
                                &message_type,
                                &client,
                                &user,
                            )
                        }
                    )
                }
            </>
        }
    }
}
```

The important parts will be

**1.** Use **ComponentLink** to asynchronously update the yew component. We use messages from websocket server for that.

**2.** You can see that you already had **WebSocketAction** in **ws_rs.rs** file. 

We code `impl From<WebSocketAction>` part and **from** function inside it. 

It helps you to use **WebSocketAction::Connect.into()** in

`<Connect: onsignal=|_| WebSocketAction::Connect.into(), />` 

Read the [documentation from the Rust for From trait](https://doc.rust-lang.org/std/convert/trait.From.html).

**3.** We start data for the **ws_rs.rs** and **state.rs** for the **Model** here. It will be used to render the entire app in **main.rs**.

**4.** WebSocketAction::Connect is the payload to connect your WebSocket client to WebSocket server. You won't need to edit code here and compare it with **ws_rs.rs** in server folder.

**5.** This is the payload to handle responses from WebSocket Server after connection to it. 

You can write correspondent code for **on_message** in **ws_rs.rs** here. You can see that they are very similar except that you give id to user with the response from the server when there is no id for the client yet.

It will be easy to find what they do if you already read [How to start Rust Chat App]. You can see that the code here is more organized.

It is the **single source of truth for messages(server responses) user will receive and render in the next part**.

**6.** You can write some conditionals here before user send message to the server. You can write code only available for this specific client(user).

If you are familar with system programming, you may think it is similar to **shell**. Then websocket server will be **kernel** and clients will be processes.

**7.** Use this to use **ws_responses** we defined in **state.rs**. You can see that this syntax is used many times in [Yew Example]. 

We use this because there is already almost same variable(self.state.client and client). We used them to make server and client easily compatible but you can use other variable name also.

That was all important part for **lib.rs** file. If you need more information, please read [Full Stack Rust] code and [Rust blog posts].

We yet have **message.rs** to render messages and to make all we prepared to be meaningful.

It will be similar to 

```rust
pub fn view_message(
    _idx: &usize, 
    response: &str, 
    message_type: &str, 
    client: &Option<String>, 
    user: &Option<String>,
) -> Html<Model> {
    // 1.
    if !response.is_empty() {
        // 2.
        let message = match message_type {
            "image" => {
                view_image(&response)
            }
            "video" => {
                view_video(&response)
            }
            "code" => {
                view_code(&response)
            }
            _ => {
                view_text(&response)
            }
        };

        // 3.
        if let Some(client_id) = client {
            // 4.
            if let Some(user_id) = user  {
                if client_id == user_id {
                    html! {
                        <li>
                            { author() }
                            { message }
                        </li>
                    }
                } else {
                    html! {
                        <li class="red-white", >
                            { others(&client_id) }
                            { message }
                        </li>
                    } 
                }
            } else {
                html! {
                    { "" }
                }
            }
        } else {
            // 5.
            if let Some(_user_id) = user  { // Use this not to show any message when user leave the chat
                html! {
                    <li class="blue", >
                        { message } 
                    </li>
                }
            } else {
                html! {
                    { "" }
                }
            }
        }
    } else {
        html! {
            { "" }
        }
    }
}
```

You can first see that there are many **html! { { "" } }** part. Use them to render nothing but be compatible with Html<Model> return type. 

**1.** We will return when had **""** empty message. You may remove it if you think it is unnecessary.

**2.** Each message has its own data type that was cloned from the client state when user send the message. The default is text and we use **view_text** function for that.

**3.** If the message is sent from the user. It will always with client(user_id). We can suppose that it is from the server when the response is sent without it.

**4.** When the client and the user_id is equal, use **You** instead and some CSS for it. Otherwise, use it with some CSS for it.

**5.** When user is connected to websocket server. The user could see the message from the server with some CSS. Otherwise or when user is without connection or after leave the chat, user shouldn't available to read any messages from the server.

Write code for database, user, login, redirect page and other business logics you want to include on your own or for your company. Then, remove conditionals here and use them instead. 

That was all to write full stack Rust code and you have all the code to test your [Rust Full Stack] chat app.

<br />

## 4. Conclusion

I intentionally repeated similar words in this post to show you how similar Rust frontend and server side code can be. 

You can see that many Rust code in both side are used for the same purpose.

**We can write frontend Rust code and its correspondent one in server**. 

We could find that we can just copy and paste server side code to frontend or vice versa with **websocket_json.rs**.

If you made [Rust Full Stack] project work in your machine and verified that it is true, we may challenge the phrase 'JavaScript is the only programming language that can be used in both server side and frontned.'

**Rust** will be better at speed at least and you may say that **we are already web**.

If I haven't heard **'Do you know HTML, CSS, JavaScript, Node and other frameworks and you are not ready to work because you don't have professional expereience at the company with those'** I may not have written these posts and code for [Rust Full Stack].

I am not a senior developer yet. But I think that we can use "Full Stack Rust Web Developer" if we invest more time to it before we complain or let others that what they use is the only or best way.

I just wanted to say "It is not the problem of the type of framework and language" but "programmer and hardware and codes are just instructions for machines." but wrote these instead.  

Hope they were helpful. 

We will learn how to make **JSON web service** in the next [Rust blog posts]. Then, we will learn how to use datas in whatever technology you use to render them in view part for frontend.

If you want the latest contents from [Steadylearner], you may follow me at [Twitter].

**Do you need a Full Stack Rust and JavaScript Developer**? You may contact me with [LinkedIn] or be one of them.

**Thanks and please share this post with others.**
