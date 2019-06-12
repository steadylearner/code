use std::ops::Mul;

trait Shape<T> {
    fn area(&self) -> T;
}

struct Rectangle<T: Mul> {
    x: T,
    y: T,
}

impl <T: Copy> Shape<T> for Rectangle<T> {
    where T: Mul<Output = T> {
        fn area(&self) -> T {
            self.x * self.y
        }
    }
}
