use std::fmt::Display;

use serde::Deserialize;

#[derive(Clone, Debug, Deserialize, PartialEq)]
pub struct Area {
    pub zone: String,
    pub municipality: String,
    pub area: String,
}

#[derive(Clone, Debug, Deserialize, PartialEq)]
#[serde(rename_all = "camelCase")]
pub struct Station {
    pub id: u32,
    #[serde(flatten)]
    pub area: Area,
    pub station: String,
    pub eoi: Option<String>,
    pub latitude: f32,
    pub longitude: f32,
    pub owner: Option<String>,
    pub status: Option<String>,
    pub description: Option<String>,
    pub first_measurment: String, // ISO Timestamp
    pub last_measurment: String,  // ISO Timestamp
    pub components: String,
    pub is_visible: bool,
}

impl Display for Area {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.area)
    }
}

impl Display for Station {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.station)
    }
}
