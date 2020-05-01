use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use wasm_bindgen_futures::JsFuture;
use web_sys::{Request, RequestInit, RequestMode, Response};
use yew::prelude::*;
use yew_components::Select;

use crate::fetch::{FetchError, FetchState};
use crate::link_future::LinkFuture;
use crate::nilu::Area;

pub struct AreaSelect {
    link: ComponentLink<Self>,
    props: Props,
    areas: FetchState<Vec<Area>>,
    selected_area: Option<Area>,
}

#[derive(Debug)]
pub enum Msg {
    AreaInput(Area),
    SetFetchState(FetchState<Vec<Area>>),
}

#[derive(Clone, PartialEq, Properties)]
pub struct Props {
    pub on_change: Callback<Area>,
}

impl Component for AreaSelect {
    type Message = Msg;
    type Properties = Props;

    fn create(props: Self::Properties, link: ComponentLink<Self>) -> Self {
        Self {
            link,
            props,
            areas: FetchState::default(),
            selected_area: None,
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
            Msg::AreaInput(area) => {
                self.selected_area = Some(area.clone());
                self.props.on_change.emit(area);
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
    fn make_select(&self, areas: &[Area]) -> Html {
        let onchange = self.link.callback(Msg::AreaInput);
        html! {
            <div class="form-group">
                <label for="area-select">{ "Velg et område: " }</label>
                <Select<Area> on_change=onchange options=areas.to_vec() selected=&self.selected_area />
            </div>
        }
    }
}

async fn fetch_areas() -> Result<Vec<Area>, FetchError> {
    let mut opts = RequestInit::new();
    opts.method("GET");
    opts.mode(RequestMode::Cors);

    let request = Request::new_with_str_and_init("https://api.nilu.no/lookup/areas", &opts)?;

    let window = web_sys::window().unwrap();
    let resp_value = JsFuture::from(window.fetch_with_request(&request)).await?;
    assert!(resp_value.is_instance_of::<Response>());

    let resp: Response = resp_value.dyn_into().unwrap();

    let json: JsValue = JsFuture::from(resp.json()?).await?;
    let areas: Vec<Area> = json.into_serde()?;
    Ok(areas)
}
