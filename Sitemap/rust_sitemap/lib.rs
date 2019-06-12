#[macro_use]
extern crate diesel;

#[macro_use]
extern crate serde_derive;

extern crate console;
extern crate pulldown_cmark;

pub mod models;
pub mod schema;

// env for database connection
extern crate dotenv;
use dotenv::dotenv;
use std::env;

use diesel::pg::PgConnection;
use diesel::r2d2::{ConnectionManager, Pool, PooledConnection};

type PgPool = Pool<ConnectionManager<PgConnection>>;
pub fn init_pool() -> PgPool {
    dotenv().ok();

    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    let manager = ConnectionManager::<PgConnection>::new(database_url);
    Pool::new(manager).expect("db pool")
}
