use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use wasm_bindgen_futures::JsFuture;
use web_sys::{Request, RequestInit, RequestMode, Response};
use yew::prelude::*;

use crate::fetch::{FetchError, FetchState};
use crate::link_future::LinkFuture;
use crate::nilu::Station;

pub struct StationSelect {
    link: ComponentLink<Self>,
    props: Props,
    areas: FetchState<Vec<Station>>,
}

pub enum Msg {
    SetFetchState(FetchState<Vec<Station>>),
    StationUpdate(ChangeData),
}

#[derive(Clone, PartialEq, Properties)]
pub struct Props {
    pub area: Option<String>,
    pub on_change: Callback<String>,
}

impl Component for StationSelect {
    type Message = Msg;
    type Properties = Props;

    fn create(props: Self::Properties, link: ComponentLink<Self>) -> Self {
        Self {
            link,
            props,
            areas: FetchState::default(),
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
            Msg::StationUpdate(change_data) => {
                if let ChangeData::Select(select) = change_data {
                    self.props.on_change.emit(select.value());
                }
            }
        };
        true
    }

    fn change(&mut self, props: Self::Properties) -> ShouldRender {
        if props.area == self.props.area {
            web_sys::console::log_1(&"No change in area or callback".into());
            return false;
        }
        web_sys::console::log_1(&"Prop change".into());

        self.props = props;
        let area = self.props.area.clone();

        match area {
            Some(area) => {
                let future = async move {
                    match fetch_stations(&area).await {
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
    fn make_select(&self, areas: &[Station]) -> Html {
        let options = areas.iter().map(|station| {
            html! { <option>{ &station.station }</option> }
        });
        let onchange = self.link.callback(Msg::StationUpdate);
        html! {
            <div class="form-group">
                <label for="station-select">{ "Velg en stasjon: " }</label>
                <select id="station-select" class="form-control" onchange=onchange>{ for options }</select>
            </div>
        }
    }
}

fn not_fetching() -> Html {
    let option = html! {
        <option>{ "Velg et område først" }</option>
    };
    html! {
        <div class="form-group">
            <label for="station-select">{ "Velg en stasjon: " }</label>
            <select id="station-select" class="form-control">{ option }</select>
        </div>
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
