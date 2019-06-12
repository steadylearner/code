use std::fs::File;

fn main() {
    let f = File::open("test.txt");

    // variable shadowing here
    let f = match f {
        Ok(file) => file,
        Err(error) => {
            panic!("Something went wrong here! {:?}", error);
        }
    };

    println!("{:?}", &f);
}