use yew_router::prelude::*;
use yew_router::switch::Permissive;

pub mod bysykler;
pub mod home;
pub mod luftkvalitet;

/// App routes
#[derive(Clone, Debug, PartialEq, Switch)]
pub enum AppRoute {
    #[to = "/luftkvalitet"]
    Luftkvalitet,
    #[to = "/bysykler"]
    Bysykler,
    #[to = "/"]
    Home,
    #[to = "/page-not-found"]
    PageNotFound(Permissive<String>),
}
