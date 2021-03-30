#[macro_export]
macro_rules! include_base_str {
    ($path:literal) => {
        include_str!(concat!(env!("CARGO_MANIFEST_DIR"), "/", $path))
    };
}

#[macro_export]
macro_rules! include_base_bytes {
    ($path:literal) => {
        include_bytes!(concat!(env!("CARGO_MANIFEST_DIR"), "/", $path))
    };
}