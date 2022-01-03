import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import App from "./components/App";
import ScrollToTop from "./components/ScrollToTop";
import "./assets/scss/fonts.scss";
import "./assets/scss/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
