//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
//include your index.scss file into the bundle
import "../styles/index.scss";
import "../styles/registro.scss";
import "../styles/jumbotron.scss";
import "../styles/salto.scss";
import "../styles/footer_navbar.scss";
import "../styles/search.scss";
import "../styles/dishresult.scss";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
