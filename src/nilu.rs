use serde::Deserialize;

#[derive(Deserialize, Debug)]
pub struct Area {
    pub zone: String,
    pub municipality: String,
    pub area: String,
}

#[derive(Deserialize, Debug)]
pub struct Areas(pub Vec<Area>);

#[derive(Deserialize, Debug)]
#[serde(rename_all = "camelCase")]
pub struct Station {
    pub id: u32,
    pub zone: String,
    pub municipality: String,
    pub area: String,
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
