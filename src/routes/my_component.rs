use std::fmt::{Error, Formatter};
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use wasm_bindgen_futures::JsFuture;
use web_sys::{Request, RequestInit, RequestMode, Response, Window};
use yew::prelude::*;
use yewtil::future::LinkFuture;

pub struct MyComponent {
    link: ComponentLink<Self>,
    areas: FetchState<Vec<String>>,
}

/// Something wrong has occurred while fetching an external resource.
#[derive(Debug, Clone, PartialEq)]
pub struct FetchError {
    err: JsValue,
}

impl std::fmt::Display for FetchError {
    fn fmt(&self, f: &mut Formatter<'_>) -> Result<(), Error> {
        std::fmt::Debug::fmt(&self.err, f)
    }
}

impl std::error::Error for FetchError {}

impl From<JsValue> for FetchError {
    fn from(value: JsValue) -> Self {
        FetchError { err: value }
    }
}

/// The possible states a fetch request can be in.
pub enum FetchState<T> {
    NotFetching,
    Fetching,
    Success(T),
    Failed(FetchError),
}

impl<T> Default for FetchState<T> {
    fn default() -> Self {
        Self::NotFetching
    }
}

pub enum Msg {
    SetFetchState(FetchState<Vec<String>>),
}

impl Component for MyComponent {
    type Message = Msg;
    type Properties = ();

    fn create(props: Self::Properties, link: ComponentLink<Self>) -> Self {
        Self {
            link,
            areas: FetchState::default(),
        }
    }

    fn rendered(&mut self, _first_render: bool) {
        let future = async {
            match fetch_areas().await {
                Ok(md) => Msg::SetFetchState(FetchState::Success(md)),
                Err(err) => Msg::SetFetchState(FetchState::Failed(err)),
            }
        };
        self.link.send_future(future);
        // LinkFuture::send_future(&self.link, future);
        self.link
            .send_message(Msg::SetFetchState(FetchState::Fetching));
    }

    fn update(&mut self, msg: Self::Message) -> ShouldRender {
        false
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        false
    }

    fn view(&self) -> Html {
        html! {}
    }
}

async fn fetch_areas() -> Result<Vec<String>, FetchError> {
    let mut opts = RequestInit::new();
    opts.method("GET");
    opts.mode(RequestMode::Cors);

    let request = Request::new_with_str_and_init(
        "https://raw.githubusercontent.com/yewstack/yew/master/README.md",
        &opts,
    )?;

    let window: Window = web_sys::window().unwrap();
    let resp_value = JsFuture::from(window.fetch_with_request(&request)).await?;
    assert!(resp_value.is_instance_of::<Response>());

    let resp: Response = resp_value.dyn_into().unwrap();

    let text = JsFuture::from(resp.text()?).await?;
    Ok(vec![text.as_string().unwrap()])
}
