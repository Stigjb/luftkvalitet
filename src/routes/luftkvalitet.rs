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
            AreaStation::Station(station) => station_view(station),
            AreaStation::Area(area) => html! { format!("Valgt område: {}", area) },
            AreaStation::Neither => html! {},
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
                    <p>
                        { "Dataene kommer fra Norsk institutt for luftforskning (Nilu). Se "}
                        <a href="http://luftkvalitet.info">{ "luftkvalitet.info" }</a>
                        { " og " }
                        <a href="https://nilu.no">{ "nilu.no" }</a>
                        { "." }
                    </p>
                </div>
            </>
        }
    }
}

fn station_view(station: &Station) -> Html {
    let visible = if station.is_visible {
        html! {
            <div class="list-group-item list-group-item-success">{ "Stasjonen er synlig" }</div>
        }
    } else {
        html! {
            <div class="list-group-item list-group-item-warning">
                { "Stasjonen er ikke synlig" }
            </div>
        }
    };
    let owner: Html = station
        .owner
        .as_ref()
        .map(|owner| {
            html! {
                <div class="list-group-item">{ format!("Eier: {}", owner) }</div>
            }
        })
        .unwrap_or_default();
    let status: Html = station
        .status
        .as_ref()
        .map(|status| {
            html! {
                <div class="list-group-item">{ format!("Status: {}", status) }</div>
            }
        })
        .unwrap_or_default();
    let description: Html = station
        .description
        .as_ref()
        .map(|description| {
            html! {
                <div class="list-group-item">{ format!("Beskrivelse: {}", description) }</div>
            }
        })
        .unwrap_or_default();
    html! {
        <>
        <h2>{ "Informasjon om målestasjonen" }</h2>
        <div class="list-group">
            <div class="list-group-item">{ format!("Målestasjon-ID: {}", station.id) }</div>
            <div class="list-group-item">{ format!("Sone: {}", station.area.zone) }</div>
            <div class="list-group-item">{ format!("Kommune: {}", station.area.municipality) }</div>
            <div class="list-group-item">{ format!("Område: {}", station.area.area) }</div>
            <div class="list-group-item">
                { format!("Posisjon: {}, {}", latitude(station.latitude), longitude(station.longitude)) }
            </div>
            <div class="list-group-item">
                { format!("Tid for første måling: {}", station.first_measurment) }
            </div>
            <div class="list-group-item">
                { format!("Tid for nyeste måling: {}", station.last_measurment) }
            </div>
            <div class="list-group-item">{ format!("Komponenter: {}", station.components) }</div>
            { owner }
            { status }
            { description }
            { visible }
        </div>
        </>
    }
}

fn longitude(long: f32) -> String {
    let ew = if long < 0. { 'W' } else { 'E' };
    let long = long.abs();
    let deg = long.trunc();
    let min = (long - deg) * 60.;

    format!("{}° {:.3}′ {}", deg, min, ew)
}

fn latitude(long: f32) -> String {
    let ns = if long < 0. { 'S' } else { 'N' };
    let long = long.abs();
    let deg = long.trunc();
    let min = (long - deg) * 60.;

    format!("{}° {:.3}′ {}", deg, min, ns)
}
