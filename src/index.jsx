/* @refresh reload */
import { render } from "solid-js/web";
import "./index.css";
import App from "./App.jsx";
import "virtual:uno.css";
import Introduction from "../pages/Introduction.jsx";
import { Router, Route } from "@solidjs/router";
import Projects from "../pages/Project.jsx";
import Contacts from "../pages/Contacts.jsx";

const root = document.getElementById("root");

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Introduction} />
      <Route path="/projects" component={Projects} />
      <Route path="/contacts" component={Contacts} />
    </Router>
  ),
  root,
);
