mod utils;

#[macro_use]
extern crate rocket;

use utils::*;
use rocket::{http::ContentType, response::Content, Rocket};

// /rocket returns binary data (a PNG image)
#[get("/")]
fn hello_world() -> Content<&'static [u8]> {
    let bytes = include_base_bytes!("public/rocket.png");
    let content_type = ContentType::new("image", "png");
    Content(content_type, bytes)
}

pub fn rocket() -> Rocket {
    rocket::ignite().mount("/", routes![hello_world])
}