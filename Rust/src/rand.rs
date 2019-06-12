extern crate rand;

use rand::distributions::{Alphanumeric, Distribution, Standard, Uniform};
use rand::thread_rng;

fn main() {
    let mut rng = thread_rng();

    // Vec of 16 x f32:
    let v: Vec<f32> = Standard.sample_iter(&mut rng).take(16).collect();

    // -> Use it to make key for prop-passer with Rust bound with JavaScript
    let s: String = Alphanumeric.sample_iter(&mut rng).take(7).collect();

    println!("{:?}, {:?}", &v, &s);
}
