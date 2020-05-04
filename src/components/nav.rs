use yew::prelude::*;
use yew_router::prelude::*;

use crate::routes::AppRoute;

/// Nav component
pub struct Nav {
    props: Props,
}

#[derive(Clone, PartialEq, Properties)]
pub struct Props {
    pub switch: AppRoute,
}

impl Component for Nav {
    type Message = ();
    type Properties = Props;

    fn create(props: Self::Properties, _: ComponentLink<Self>) -> Self {
        Nav { props }
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        true
    }

    fn change(&mut self, props: Self::Properties) -> ShouldRender {
        if self.props == props {
            false
        } else {
            self.props = props;
            true
        }
    }

    fn view(&self) -> Html {
        let bysykler_classes = match self.props.switch {
            AppRoute::Bysykler => "nav-link active",
            _ => "nav-link",
        };
        let luftkvalitet_classes = match self.props.switch {
            AppRoute::Luftkvalitet => "nav-link active",
            _ => "nav-link",
        };

        html! {
            <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
                <RouterAnchor<AppRoute> route=AppRoute::Home classes="navbar-brand">
                    { "Norske API-er" }
                </RouterAnchor<AppRoute>>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterAnchor<AppRoute> route=AppRoute::Bysykler classes=bysykler_classes>
                            { "Bysykler" }
                        </RouterAnchor<AppRoute>>
                    </li>
                    <li class="nav-item">
                        <RouterAnchor<AppRoute> route=AppRoute::Luftkvalitet classes=luftkvalitet_classes>
                            { "Luftkvalitet" }
                        </RouterAnchor<AppRoute>>
                    </li>
                </ul>
            </nav>
        }
    }
}
