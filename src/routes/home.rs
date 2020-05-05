use yew::prelude::*;

pub struct Home;

impl Component for Home {
    type Message = ();
    type Properties = ();

    fn create(_props: Self::Properties, _link: ComponentLink<Self>) -> Self {
        Self
    }

    fn update(&mut self, _msg: Self::Message) -> ShouldRender {
        false
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        false
    }

    fn view(&self) -> Html {
        html! {
            <>
                <h1>{ "Norske API-er" }</h1>
                <p>
                    { "Denne appen demonstrerer et utvalg av API-er for å hente data fra norske datakilder. Kildekoden til prosjektet finner du på " }
                    <a href="https://github.com/stigjb/norske-api-er">{ "Github" }</a>
                    { "." }
                </p>
                <p>
                    { "Appen er skrevet i rammeverket "}
                    <a href="https://yew.rs">{ "Yew" }</a>
                    { ". Den er programmert i "}
                    <a href="https://rust-lang.org">{ "Rust" }</a>
                    { " og kompileres til Webassembly." }
                </p>
            </>
        }
    }
}
