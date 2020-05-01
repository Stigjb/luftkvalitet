use yew::prelude::*;

use crate::components::{area_select::AreaSelect, station_select::StationSelect};
use crate::nilu::{Area, Station};

pub struct Luftkvalitet {
    _link: ComponentLink<Self>,
    area: Option<Area>,
    station: Option<Station>,
    on_area_change: Callback<Area>,
    on_station_change: Callback<Station>,
}

pub enum Msg {
    AreaChange(Area),
    StationChange(Station),
}

impl Component for Luftkvalitet {
    type Message = Msg;
    type Properties = ();

    fn create(_props: Self::Properties, link: ComponentLink<Self>) -> Self {
        let on_area_change = link.callback(Msg::AreaChange);
        let on_station_change = link.callback(Msg::StationChange);
        Self {
            _link: link,
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
            (Some(area), Some(station)) => html! {
                <>
                <p>{ format!("Selected station {} in area {}", station, area) }</p>
                <pre>{ format!("{:#?}\n\n{:#?}", area, station) }</pre>
                </>
            },
            (Some(area), None) => html! { format!("Selected area {}", area) },
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
