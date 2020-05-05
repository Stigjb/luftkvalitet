use chrono::{offset::Utc, serde::ts_seconds, DateTime};
use serde::Deserialize;

#[derive(Clone, Debug, Deserialize, PartialEq)]
pub struct Gbfs<T> {
    #[serde(with = "ts_seconds")]
    pub last_updated: DateTime<Utc>,
    pub ttl: u32,
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
