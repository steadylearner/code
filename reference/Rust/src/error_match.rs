use std::fs::File;
use std::io::ErrorKind;

fn main() {
    let f = File::open("test.txt");

    let f = match f {
        Ok(file) => file,
        Err(ref error) if error.kind() == ErrorKind::NotFound => {
            match File::create("text.txt") {
                Ok(fc) => fc,
                Err(e) => {
                    panic!(
                        "could not create file: {:?}",
                        e
                    )
                }
            }
        },
        Err(error) => {
            panic!(
                "could not find the file with error {:?}",
                error
            )
        }
    };

    println!("{:?}", f);
}
