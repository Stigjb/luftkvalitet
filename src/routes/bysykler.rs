use log::info;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use wasm_bindgen_futures::JsFuture;
use web_sys::{Request, RequestInit, RequestMode, Response};
use yew::prelude::*;
use yew_components::Select;

use crate::fetch::{FetchError, FetchState};
use crate::gbfs::{Gbfs, SystemInformation};
use crate::link_future::LinkFuture;

const CLIENT_IDENTIFIER: &str = "stigjb-norske-api-er";

pub struct Bysykler {
    link: ComponentLink<Self>,
    system: Option<String>,
    system_info: FetchState<Gbfs<SystemInformation>>,
}

pub enum Msg {
    SystemChange(String),
    SetFetchState(FetchState<Gbfs<SystemInformation>>),
}

impl Component for Bysykler {
    type Message = Msg;
    type Properties = ();

    fn create(_props: Self::Properties, link: ComponentLink<Self>) -> Self {
        Self {
            link,
            system: None,
            system_info: FetchState::default(),
        }
    }

    fn update(&mut self, msg: Self::Message) -> ShouldRender {
        match msg {
            Msg::SystemChange(area) => {
                self.system = Some(area);
                let system = self.system.clone().unwrap_or("yo".into());

                let future = async move {
                    match fetch_system_info(&system).await {
                        Ok(sys_info) => Msg::SetFetchState(FetchState::Success(sys_info)),
                        Err(err) => Msg::SetFetchState(FetchState::Failed(err)),
                    }
                };
                self.link.send_future(future);
                self.link
                    .send_message(Msg::SetFetchState(FetchState::Fetching));
            }
            Msg::SetFetchState(fetch) => {
                self.system_info = fetch;
            }
        };
        true
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        false
    }

    fn rendered(&mut self, first_render: bool) {
        if !first_render {
            return;
        }

        let system = self.system.clone().unwrap_or("yo".into());

        let future = async move {
            match fetch_system_info(&system).await {
                Ok(sys_info) => Msg::SetFetchState(FetchState::Success(sys_info)),
                Err(err) => Msg::SetFetchState(FetchState::Failed(err)),
            }
        };
        self.link.send_future(future);
        self.link
            .send_message(Msg::SetFetchState(FetchState::Fetching));
    }

    fn view(&self) -> Html {
        let text = match &self.system_info {
            FetchState::NotFetching => html! { "Not fetching" },
            FetchState::Fetching => html! { "Fetching" },
            FetchState::Success(system) => html! {
                <pre>{ format!("{:#?}", system) }</pre>
            },
            FetchState::Failed(err) => html! { format!("Failed!\n{:#?}", err) },
        };
        let onchange = self.link.callback(Msg::SystemChange);
        let options: Vec<String> = vec![
            "oslobysykkel.no".into(),
            "bergenbysykkel.no".into(),
            "trondheimbysykkel.no".into(),
        ];
        html! {
            <>
                <h1>{ "Bysykler" }</h1>
                <div>
                    <form>
                        <div class="form-group">
                            <label for="area-select">{ "Velg et område: " }</label>
                            <Select<String> on_change=onchange options=options selected=&self.system />
                        </div>
                    </form>
                    <p>{ text }</p>
                </div>
            </>
        }
    }
}

async fn fetch_system_info(system: &str) -> Result<Gbfs<SystemInformation>, FetchError> {
    let mut opts = RequestInit::new();
    opts.method("GET");
    opts.mode(RequestMode::Cors);

    let url = format!(
        "https://gbfs.urbansharing.com/{}/system_information.json",
        system
    );
    info!("{:?}", url);

    let request: Request = Request::new_with_str_and_init(&url, &opts)?;
    request.headers().set("Accept", "application/json")?;
    // It seems that Urban Sharing's server doesn't send an appropriate
    // Access-Control-Allow-Headers in their preflight response
    // request
    //     .headers()
    //     .set("Client-Identifier", CLIENT_IDENTIFIER)?;

    web_sys::console::log_1(&request);

    let window = web_sys::window().unwrap();
    let resp_value = JsFuture::from(window.fetch_with_request(&request)).await?;
    assert!(resp_value.is_instance_of::<Response>());

    let resp: Response = resp_value.dyn_into().unwrap();
    web_sys::console::log_1(&resp);
    info!("Response status {:?}", resp.status());
    info!("Response headers: {:?}", resp.headers());

    let json: JsValue = JsFuture::from(resp.json()?).await?;

    info!("{:?}", json);

    let system_info: Gbfs<SystemInformation> = json.into_serde()?;
    Ok(system_info)
}
