fn main() {
    let a = L { x: "Hello" };

    let s: &'static str = "The String";
    // Will live entire lifetime of the programm, It makes file run slow but help you solve dangling problem.
}
