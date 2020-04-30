use yew_router::prelude::*;
use yew_router::switch::Permissive;

pub mod luftkvalitet;

/// App routes
#[derive(Switch, Debug, Clone)]
pub enum AppRoute {
    #[to = "/page-not-found"]
    PageNotFound(Permissive<String>),
    #[to = "/"]
    Luftkvalitet,
}
