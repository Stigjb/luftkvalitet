use yew::prelude::*;

use crate::components::{area_select::AreaSelect, station_select::StationSelect};
use crate::nilu::{Area, Station};

pub struct Luftkvalitet {
    _link: ComponentLink<Self>,
    area_station: AreaStation,
    on_area_change: Callback<Area>,
    on_station_change: Callback<Station>,
}

pub enum Msg {
    AreaChange(Area),
    StationChange(Station),
}

enum AreaStation {
    Neither,
    Area(Area),
    Station(Station),
}

impl Default for AreaStation {
    fn default() -> Self {
        Self::Neither
    }
}

impl Component for Luftkvalitet {
    type Message = Msg;
    type Properties = ();

    fn create(_props: Self::Properties, link: ComponentLink<Self>) -> Self {
        let on_area_change = link.callback(Msg::AreaChange);
        let on_station_change = link.callback(Msg::StationChange);
        Self {
            _link: link,
            area_station: AreaStation::default(),
            on_area_change,
            on_station_change,
        }
    }

    fn update(&mut self, msg: Self::Message) -> ShouldRender {
        match msg {
            Msg::AreaChange(area) => {
                self.area_station = AreaStation::Area(area);
            }
            Msg::StationChange(station) => self.area_station = AreaStation::Station(station),
        };
        true
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        false
    }

    fn view(&self) -> Html {
        let text = match &self.area_station {
            AreaStation::Station(station) => html! {
                <>
                    <p>{ format!("Valgt stasjon {} i område {}", station, station.area) }</p>
                    <pre>{ format!("{:#?}", station) }</pre>
                </>
            },
            AreaStation::Area(area) => html! { format!("Valgt område: {}", area) },
            AreaStation::Neither => "Velg et område".into(),
        };
        let area = match &self.area_station {
            AreaStation::Neither => None,
            AreaStation::Area(ref area) => Some(area.clone()),
            AreaStation::Station(ref station) => Some(station.area.clone()),
        };
        html! {
            <>
                <h1>{ "Luftkvalitet" }</h1>
                <div>
                    <form>
                        <AreaSelect on_change=&self.on_area_change />
                        <StationSelect area=area on_change=&self.on_station_change />
                    </form>
                    <p>{ text }</p>
                </div>
            </>
        }
    }
}
