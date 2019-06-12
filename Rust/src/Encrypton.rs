extern crate data_encoding;
extern crate ring;

use data_encoding::HEXUPPER;
use ring::{digest, pbkdf2, rand};
use ring::rand::SecureRandom;

fn run() -> Result<()> {
    const CREDENTIAL_LEN: usize = digest::SHA512_OUTPUT_LEN;
    const N_ITER: u32 = 100_000;
    let rng = rand::SystemRandom::new();

    let mut salt = [0u8; CREDENTIAL_LEN];
    rng.fill(&mut salt)?;
    let password = "password here";
    let mut pbkdf2_hash = [0u8; CREDENTIAL_LEN];
    pbkdf2::derive(
        &digest::SHA512,
        N_ITER,
        &salt,
        password.as_bytes(),
        &mut pbkdf2_hash,
    )
}