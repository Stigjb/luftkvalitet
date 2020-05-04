use yew_router::prelude::*;
use yew_router::switch::Permissive;

pub mod bysykler;
pub mod luftkvalitet;

/// App routes
#[derive(Switch, Debug, Clone)]
pub enum AppRoute {
    #[to = "/luftkvalitet"]
    Luftkvalitet,
    #[to = "/bysykler"]
    Bysykler,
    #[to = "/page-not-found"]
    PageNotFound(Permissive<String>),
}
