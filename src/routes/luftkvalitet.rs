use yew::prelude::*;

use crate::components::{area_select::AreaSelect, station_select::StationSelect};

pub struct Luftkvalitet {
    link: ComponentLink<Self>,
    area: Option<String>,
    station: Option<String>,
    on_area_change: Callback<String>,
    on_station_change: Callback<String>,
}

pub enum Msg {
    AreaChange(String),
    StationChange(String),
}

impl Component for Luftkvalitet {
    type Message = Msg;
    type Properties = ();

    fn create(_props: Self::Properties, link: ComponentLink<Self>) -> Self {
        let on_area_change = link.callback(Msg::AreaChange);
        let on_station_change = link.callback(Msg::StationChange);
        Self {
            link,
            area: None,
            station: None,
            on_area_change,
            on_station_change,
        }
    }

    fn update(&mut self, msg: Self::Message) -> ShouldRender {
        match msg {
            Msg::AreaChange(area) => {
                self.area = Some(area);
                self.station = None
            }
            Msg::StationChange(station) => self.station = Some(station),
        };
        true
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        false
    }

    fn view(&self) -> Html {
        let text = match (&self.area, &self.station) {
            (Some(area), Some(station)) => format!("Selected station {} in area {}", station, area),
            (Some(area), None) => format!("Selected area {}", area),
            (None, None) => "No area or station selected".into(),
            _ => unreachable!(),
        };
        html! {
            <div>
                <form>
                <AreaSelect on_change=&self.on_area_change />
                <StationSelect area=&self.area on_change=&self.on_station_change />
                </form>
                <p>{ text }</p>
            </div>
        }
    }
}
