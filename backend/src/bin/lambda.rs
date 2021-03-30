// Please change to the name of the project in the Cargo.toml
use backend_server;
use rocket_lamb::RocketExt;

#[tokio::main]
async fn main() {
    backend_server::rocket().lambda().launch().await;
}