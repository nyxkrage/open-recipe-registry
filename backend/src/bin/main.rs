// Please change to the name of the project in the Cargo.toml
use orr_server;

#[tokio::main]
async fn main() {
    orr_server::rocket().launch().await.unwrap();
}