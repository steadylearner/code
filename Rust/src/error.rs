use std::fs::File;
use std::io::ErrorKind;

use std::io;
use std::io::Read;

fn read_file() -> Result<String, io::Error> {
    let mut s = String::new();
    File::open("text.txt")?.read_to_string(&mut s)?;
    Ok(s)
}

fn main() {
    // You can't use ? operator inside main() function
    // can return ()
}
