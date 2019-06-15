#[cfg(target_os = "linux")]
fn are_you_on_linux() {
    println!("running linux!");
}
#[cfg(not(target_os = "linux"))]
fn are_you_on_linux() {
    println!("not running linux!")
}

// #![allow(dead_code)]
// fn dead_func() {
//     println!("what?";)
// }

fn main() {
    are_you_on_linux();

    println!("Show your OS");
    if cfg!(target_os = "linux") {
        println!("linux");
    } else {
        println!("not linux");
    }
}