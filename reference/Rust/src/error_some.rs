fn exit(x: Option<i32>) {
    match x {
        Some(0) => panic!("We got a 0"),
        Some(x) => println!("We got a {} things are fine!", x),
        None => println!("we got nothing"),
    }
}

fn main() {
    exit(Some(1));
    exit(Some(10));
    exit(None);
    exit(Some(0));
}