// #![feature(proc_macro)]

// extern crate envy;

// #[macro_use]
// extern crate serde_derive;
// extern crate dotenv;
extern crate wasm_bindgen;

// use dotenv::dotenv;
// use std::env;
use wasm_bindgen::prelude::*;
// use std::collections::HashMap;

#[wasm_bindgen]
extern {
    // fn alert(s: &str);

    type HTMLDocument;
    type Element;

    static document: HTMLDocument;

    #[wasm_bindgen(method)]
    fn createElement(this: &HTMLDocument, tagName: &str) -> Element;

    #[wasm_bindgen(method, getter)]
    fn body(this: &HTMLDocument) -> Element;

    #[wasm_bindgen(method, js_name = appendChild)]
    fn append(this: &Element, item: Element);

    #[wasm_bindgen(method, js_name = setAttribute)]
    fn set_attribute(this: &Element, key: &str, value: &str);

    // #[wasm_bindgen(method, setter = innerHTML)]
    // fn set_inner(this: &Element, html: &str);

// }


#[wasm_bindgen]
pub fn create_stuff() {

    // let div = document.createElement("div");
    // let p = document.createElement("p");
    // let _span = document.createElement("span");

    // p.set_inner("Hello from the Rust to JavaScript");
    // div.append(p);
    // document.body().append(div);

    let script = document.createElement("script");
    script.set_attribute("src", "https://apis.google.com/js/platform.js");
    script.set_attribute("id", "youtube-subscribe"); // to find element made by wasm file in javascript 

    document.body().append(script);
}

// #[wasm_bindgen]
// pub fn greet(name: &str) {
//     alert(&format!("Hello, from rust {}!", name));
// }
