use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use wasm_bindgen_futures::JsFuture;
use web_sys::{Request, RequestInit, RequestMode, Response};
use yew::prelude::*;

use crate::fetch::{FetchError, FetchState};
use crate::link_future::LinkFuture;
use crate::nilu::Areas;

pub struct AreaSelect {
    link: ComponentLink<Self>,
    props: Props,
    areas: FetchState<Areas>,
}

#[derive(Debug)]
pub enum Msg {
    AreaInput(ChangeData),
    SetFetchState(FetchState<Areas>),
}

#[derive(Clone, PartialEq, Properties)]
pub struct Props {
    pub on_change: Callback<String>,
}

impl Component for AreaSelect {
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

        let future = async {
            match fetch_areas().await {
                Ok(md) => Msg::SetFetchState(FetchState::Success(md)),
                Err(err) => Msg::SetFetchState(FetchState::Failed(err)),
            }
        };
        self.link.send_future(future);
        self.link
            .send_message(Msg::SetFetchState(FetchState::Fetching));
    }

    fn update(&mut self, msg: Self::Message) -> ShouldRender {
        match msg {
            Msg::SetFetchState(areas) => {
                self.areas = areas;
                true
            }
            Msg::AreaInput(change_data) => {
                if let ChangeData::Select(select) = change_data {
                    self.props.on_change.emit(select.value())
                }
                false
            }
        }
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        false
    }

    fn view(&self) -> Html {
        match &self.areas {
            FetchState::NotFetching => html! { "Not fetching" },
            FetchState::Fetching => html! { "Fetching" },
            FetchState::Success(areas) => self.make_select(areas),
            FetchState::Failed(err) => html! { format!("Failed!\n{:#?}", err) },
        }
    }
}

impl AreaSelect {
    fn make_select(&self, areas: &Areas) -> Html {
        let options = areas.0.iter().map(|area| {
            html! { <option>{ &area.area }</option> }
        });
        let onchange = self.link.callback(Msg::AreaInput);
        html! {
            <div class="form-group">
                <label for="area-select">{ "Velg et område: " }</label>
                <select id="area-select" class="form-control" onchange=onchange>{ for options }</select>
            </div>
        }
    }
}

async fn fetch_areas() -> Result<Areas, FetchError> {
    let mut opts = RequestInit::new();
    opts.method("GET");
    opts.mode(RequestMode::Cors);

    let request = Request::new_with_str_and_init("https://api.nilu.no/lookup/areas", &opts)?;

    let window = web_sys::window().unwrap();
    let resp_value = JsFuture::from(window.fetch_with_request(&request)).await?;
    assert!(resp_value.is_instance_of::<Response>());

    let resp: Response = resp_value.dyn_into().unwrap();

    let json: JsValue = JsFuture::from(resp.json()?).await?;
    let areas: Areas = json.into_serde()?;
    Ok(areas)
}
