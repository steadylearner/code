fn main() {
    let s = Some('c');

    // match s {
    //     Some(i) => println!("{}", i),
    //     _ => ()
    // }

    if let Some(i) = s {
        println!("{}", i)
    }
}