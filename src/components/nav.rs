use yew::prelude::*;
use yew_router::prelude::*;

use crate::routes::AppRoute;

/// Nav component
pub struct Nav;

impl Component for Nav {
    type Message = ();
    type Properties = ();

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
            <nav class="navbar navbar-expand-lg">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterAnchor<AppRoute> route=AppRoute::Home classes="nav-link" >
                            { "Home" }
                        </RouterAnchor<AppRoute>>
                    </li>
                    <li class="nav-item">
                        <RouterAnchor<AppRoute> route=AppRoute::Luftkvalitet classes="nav-link">
                            { "Luftkvalitet" }
                        </RouterAnchor<AppRoute>>
                    </li>
                    <li class="nav-item">
                        <RouterAnchor<AppRoute> route=AppRoute::About classes="nav-link">
                            { "About" }
                        </RouterAnchor<AppRoute>>
                    </li>
                </ul>
            </nav>
        }
    }
}
