fn is_even(n: u32) -> bool {
    n % 2 == 0
}

fn main() {
    let s: u32 =
    (0..).map(|n| n * n)
    .take_while(|&n| n < 10000)
    .filter(|&n| is_even(n))
    .sum();

    println!("{}", s);
}