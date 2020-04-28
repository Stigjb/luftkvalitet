use yew::prelude::*;
use yew_router::prelude::*;

use crate::routes::AppRoute;

/// Nav component
pub struct Nav;

#[derive(Properties, Clone, Default)]
pub struct Props {
    pub a: String,
}

impl Component for Nav {
    type Message = ();
    type Properties = Props;

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        Nav {}
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        true
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        false
    }

    fn view(&self) -> Html {
        html! {
            <nav>
                <ul>
                    <li><RouterAnchor<AppRoute> route=AppRoute::Home classes="app-link" >{ "Home" }</RouterAnchor<AppRoute>></li>
                    <li><RouterAnchor<AppRoute> route=AppRoute::About classes="app-link">{ "About" }</RouterAnchor<AppRoute>></li>
                </ul>
            </nav>
        }
    }
}
