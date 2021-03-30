// Please change to the name of the project in the Cargo.toml
use orr_server;
use rocket_lamb::RocketExt;

#[tokio::main]
async fn main() {
    orr_server::rocket().lambda().launch().await;
}