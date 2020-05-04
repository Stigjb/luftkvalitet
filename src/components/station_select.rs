use log::info;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use wasm_bindgen_futures::JsFuture;
use web_sys::{Request, RequestInit, RequestMode, Response};
use yew::prelude::*;

use super::select::Select;
use crate::fetch::{FetchError, FetchState};
use crate::link_future::LinkFuture;
use crate::nilu::{Area, Station};

pub struct StationSelect {
    link: ComponentLink<Self>,
    props: Props,
    selected_station: Option<Station>,
    areas: FetchState<Vec<Station>>,
}

pub enum Msg {
    SetFetchState(FetchState<Vec<Station>>),
    StationUpdate(Station),
}

#[derive(Clone, PartialEq, Properties)]
pub struct Props {
    pub area: Option<Area>,
    pub on_change: Callback<Station>,
}

impl Component for StationSelect {
    type Message = Msg;
    type Properties = Props;

    fn create(props: Self::Properties, link: ComponentLink<Self>) -> Self {
        Self {
            link,
            props,
            areas: FetchState::default(),
            selected_station: None,
        }
    }

    fn rendered(&mut self, first_render: bool) {
        if !first_render {
            return;
        }
    }

    fn update(&mut self, msg: Self::Message) -> ShouldRender {
        match msg {
            Msg::SetFetchState(areas) => self.areas = areas,
            Msg::StationUpdate(station) => {
                self.selected_station = Some(station.clone());
                self.props.on_change.emit(station);
            }
        };
        true
    }

    fn change(&mut self, props: Self::Properties) -> ShouldRender {
        if props.area == self.props.area {
            info!("No change in area or callback");
            return false;
        }
        info!("Prop change");

        self.props = props;
        let area = self.props.area.clone();

        match area {
            Some(area) => {
                let future = async move {
                    match fetch_stations(&area.to_string()).await {
                        Ok(md) => Msg::SetFetchState(FetchState::Success(md)),
                        Err(err) => Msg::SetFetchState(FetchState::Failed(err)),
                    }
                };
                self.link.send_future(future);
                self.link
                    .send_message(Msg::SetFetchState(FetchState::Fetching));
                false
            }
            None => {
                self.link
                    .send_message(Msg::SetFetchState(FetchState::NotFetching));
                true
            }
        }
    }

    fn view(&self) -> Html {
        match &self.areas {
            FetchState::NotFetching => not_fetching(),
            FetchState::Fetching => html! { "Fetching" },
            FetchState::Success(areas) => self.make_select(areas),
            FetchState::Failed(err) => html! { format!("Failed!\n{:#?}", err) },
        }
    }
}

impl StationSelect {
    fn make_select(&self, stations: &[Station]) -> Html {
        let onchange = self.link.callback(Msg::StationUpdate);
        html! {
            <div class="form-group">
                <label for="station-select">{ "Velg en stasjon: " }</label>
                <Select<Station> id="station-select" class="form-control"
                    on_change=onchange options=stations.to_vec() selected=&self.selected_station
                />
            </div>
        }
    }
}

fn not_fetching() -> Html {
    html! {
        <div class="alert alert-info">{ "Velg en stasjon først" }</div>
    }
}

async fn fetch_stations(area: &str) -> Result<Vec<Station>, FetchError> {
    let mut opts = RequestInit::new();
    opts.method("GET");
    opts.mode(RequestMode::Cors);

    let url = format!("https://api.nilu.no/lookup/stations?area={}", area);

    let request = Request::new_with_str_and_init(&url, &opts)?;

    let window = web_sys::window().unwrap();
    let resp_value = JsFuture::from(window.fetch_with_request(&request)).await?;
    assert!(resp_value.is_instance_of::<Response>());

    let resp: Response = resp_value.dyn_into().unwrap();

    let json: JsValue = JsFuture::from(resp.json()?).await?;
    let areas: Vec<Station> = json.into_serde()?;
    Ok(areas)
}
