use yew::prelude::*;

pub struct Home {
    _link: ComponentLink<Self>,
}

pub enum Msg {}

impl Component for Home {
    type Message = Msg;
    type Properties = ();

    fn create(_props: Self::Properties, link: ComponentLink<Self>) -> Self {
        Self { _link: link }
    }

    fn update(&mut self, msg: Self::Message) -> ShouldRender {
        match msg {
            _ => (),
        };
        true
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        false
    }

    fn view(&self) -> Html {
        html! {
            <p>{ "Under bygging" }</p>
        }
    }
}
