use yew::prelude::*;

/// Home page
pub struct Home;

impl Component for Home {
    type Message = ();
    type Properties = ();

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        Home {}
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        true
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        false
    }

    fn view(&self) -> Html {
        html! {
            <div class="jumbotron">
                <header class="app-header">
                    <a
                        class="app-logo"
                        href="https://yew.rs"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    </a>
                    <p>
                        { "Edit " } <code>{ "src/components/home.rs" }</code> { " and save to reload." }
                    </p>
                    <a
                        id="learn_yew"
                        class="btn btn-primary"
                        href="https://yew.rs"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        { "Learn Yew" }
                    </a>
                </header>
            </div>
        }
    }
}
