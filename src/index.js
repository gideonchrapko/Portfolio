import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";

import "./styles/styles.scss";

const rootElement = document.getElementById("root");
// const customHistory = createBrowserHistory({
// });

{/* <Route
      component={({ history }) => {
        window.appHistory = history;
        return <App />;
      }}
    /> */}

ReactDOM.render(
  <App />,
  rootElement
);