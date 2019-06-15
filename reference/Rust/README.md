# This is to learn RUST

### Link

 1. How to learn($ cargo doc --std)

  * [Learning Rust](https://learning-rust.gitbook.io/book/)
  * [Read More](https://doc.rust-lang.org/book/first-edition/glossary.html)
  * [Learn By Example](https://doc.rust-lang.org/stable/rust-by-example/)
  * [Information](https://doc.rust-lang.org/book/second-edition/index.html)
  * [Practice](https://github.com/rustlings/rustlings)
  * [Crates](https://rust-lang-nursery.github.io/rust-cookbook/)
  * [Test](https://doc.rust-lang.org/book/second-edition/ch11-00-testing.html)
  * [Useful Article to learn Rust](https://medium.com/learning-rust)
  * [Rust API Guide](https://rust-lang-nursery.github.io/api-guidelines/documentation.html)
  * [Reference](https://doc.rust-lang.org/reference/tokens.html#raw-string-literals)

 2. Others

  * [Package Manager Here](https://doc.rust-lang.org/cargo/)
  * [Package Search Here](https://crates.io/)
  * [Server side webframework](https://github.com/SergioBenitez/Rocket)
  * [Compare and using with JS Code](https://www.youtube.com/watch?v=Pfbw4YPrwf4)
  * [Web assembly](https://rustwasm.github.io/book/background-and-concepts.html)
  * [Bind](https://rustwasm.github.io/wasm-bindgen/)
  * [Advacned](https://doc.rust-lang.org/beta/nomicon/send-and-sync.html)
  * [Rust Linter - Install and Just use $cargo clippy](https://github.com/rust-lang-nursery/rust-clippy)
  * stdweb(aleternative to use webassembly bindgen) 
  
    $cargo install -f cargo-web -> cargo web build --target=wasm32-unknown-unknown
    -> generate complete application(larget size)
    -> You don't need a webpack, just use live-server in visual sutido code to verify it work or not

### Command Line

 * cargo -> NPM or YARN alike(cargo install [cargo-edit](https://github.com/killercup/cargo-edit) -> You can use yarn like command)
 * rustup -> To intall
 * rustc $FILENAME -> ./$FILENAME
 * cargo new $filename --bin -> Make a folder for new project
 * rustup doc -> Shows Doc list to help learn but needs internet connection to use it fully.
 * cargo check, cargo build, cargo run, cargo test, cargo update(n <= X < n+1)
 * cargo build --release, cargo run --relase to decrease compiled file size
 * [cargo install relevant command](https://github.com/killercup/cargo-edit)
 * $set RUST_BACKTRACE=1(0) for more verbose error message. or RUST_BACKTRACE=1(0) cargo run
### To use snippet and other useful thigns with Rust(With VSCode)

 * [Rust with VSCode](https://github.com/editor-rs/vscode-rust)
 * [Rust Code Completion Utiily](https://github.com/racer-rust/racer)
 * [Rust Language Server](https://github.com/rust-lang-nursery/rls)
 * [Rust fmt](https://github.com/rust-lang-nursery/rustfmt) $cargo install rustfmt-nightly --force
 * racer -> $cargo install racer --force
 * cargo install rustsym -> LD_LIBRARY_PATH=$(rustc --print sysroot)/lib:$LD_LIBRARY_PATH
 
### What to do after writing depencdencies to use(How to use external package or module)

**1.** [dependencies]
   rand = "0.3.14"(From crates.io, external package)
   phrases = {path = "../Phrases"}(relative path, module inside local directory, You have to write 'pub' for every function and module to be accessible outside and main module inside src/lib.rs folder and you can split if you want with other file names)

**2.** cargo build

**ex)**

```
extern crate rand;
extern crate pharses;

use phrases::greetings::french; (french module from phrases::greetings)

use rand::Rng;

fn main () // follow the api
 {
  let mut rng = rand::thread_rng();
  let b:bool = rng.gen();

  println!("English: {}, {}", phrases::greetings::english::hello(),
phrases::greetings::english::goodbye()
);
 println!("French: {}, {}", french::hello(), french::goodbye()
) // It becomes simpler using use keyword
 }
```


#### Stack and Heap

**1.** stack: fast, limited, short-term, last-In -> First-Out

**ex)**

  ```
  let x = 5; -> pritnln!("{}", x);
  ```

**2.** heap: long-term

 **ex)**

  ```
  let x = Box::new(5); -> println!("{}", *x); use * to assign value point from heap
  ```

### Test Example($cargo build -> $cargo test)

**1.** If you need module with test

```
pub mod greeting
{
 pub mod english;
 pub mod french
 {
   pub fn hello() -> String { "bonjour".to_string()}
   pub fn goodbye() -> String { "au revoir".to_string()}
 }
}

#[test]
#[should_panic] // expect to test fail happen
#[ignore] // ignore problems
{
  assert_eq!("hello", greetings::english::hello());
  assert_eq!("hellllo", greetings::english::hello());
}
```

**2.** if you separate test module

```
#[cfg(test)]
mod tests
{

extern crate phrases;

#[test]
#[should_panic] // expect to test fail happen
#[ignore] // ignore problems
fn english_greeting_correct()
{
 assert_eq!("heelo", pharses::greetings::english::hello());
}

}
```

### Documentation and Comments - Documentation format along with file itself

**1.** Comments -> **//**  for single line and "/* */" for multi line comments

**2.** Documentation(Markdown) -> **///** For function and **//!** For code example

```
Write Validate Code under between ``` -> rustdoc $filename -> Make index.html file for documenation
```

**ex)**
```
//! This module contains English phrases.
//!
//! # Examples
//! ```
//! let username = "John";
//! println!("{}", {}!",
//!    phrases::greeting::english::hello(),
//!    username);
//! ```

/// Applies to code that follow it.

/// In this case, It is our `hello()` function
pub fn hello() -> String { "hello".to_string() /* here */ }
pub fn goodbye() -> String { "goodbye".to_string() }

```

### Test

1. Unit Test

___

 1. #[cfg(test)]
    mod tests -> similar to describe in javascript test
 2. use super::* -> to import functions to test
 3. #[test] -> similar to test or it in javascript test

 ```
 $cargo test to start Rust test for all test file or $cargo test <Filename> -> It matches to files that has <Filename>
 ```

 4. Use #[should_panic] or #[should_panice(expected="custom error message")] below #[test] when test include panic!
 5. Use #[ignore] below #[test] for ignore tests($cargo test -> ignores them and $cargo test -- --ignored -> test them)
 6. macros to use

  * assert!(expression) - panics if expression evaluates to false.
  * assert_eq!(left, right) and assert_ne!(left, right) - testing left and right expressions for equality and inequality respectively.

 7. You can test codes inside doccomments with **doccoments**::<function>(attributes)
___

 2. Intergration Test(use extern crate, mod, pub fn etc)

  * $cargo test runs test inside tests folder such as folder/integration.rs
    -> [Example](https://doc.rust-lang.org/rust-by-example/testing/integration_testing.html)
  * [You can include test helpers inside [dev-dependencies] in cargo.toml](https://doc.rust-lang.org/rust-by-example/testing/dev_dependencies.html)
