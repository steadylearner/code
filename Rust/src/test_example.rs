#[cfg(test)]
mod tests {
    use super::*; // * -> glob, bring functions from the ouside of the module
    #[test]
    fn it_works() {}

    #[test]
    fn check_two() {
        assert_eq!(1 + 1, 2);
    }
    #[test]
    fn check_what() {
        assert_ne!(1 + 1, 5);
    }
    #[test]
    // #[should_panic]
    fn check_str() { // You can just call specific test with $cargo check_str
        let x = 'f'.to_string();
        assert!("string".contains(&x), "It fails because 'string' don't contain the given word");
    }
}
