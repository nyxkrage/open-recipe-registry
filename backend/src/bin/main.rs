// Please change to the name of the project in the Cargo.toml
use backend_server;

#[tokio::main]
async fn main() {
    backend_server::rocket().launch().await.unwrap();
}