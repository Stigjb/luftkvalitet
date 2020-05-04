use serde::Deserialize;

#[derive(Clone, Debug, Deserialize, PartialEq)]
pub struct Gbfs<T> {
    pub last_updated: u64,
    pub ttl: u32,
    pub version: Option<String>,
    pub data: T,
}

#[derive(Clone, Debug, Deserialize, PartialEq)]
pub struct SystemInformation {
    pub system_id: String,
    pub language: String,
    pub name: String,
    pub operator: String,
    pub timezone: String,
    pub phone_number: String,
    pub email: String,
}
