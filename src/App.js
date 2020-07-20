import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import About from "./About"
import WorkExperience from "./WorkExperience"
import Landing from './landing/Landing'

import "./styles/styles.scss"

export default function App() {
    return (
        <Router>
            {/* <Landing /> */}
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/About" component={About} />
                <Route path="/WorkExperience" component={WorkExperience} />
            </Switch>
        </Router>
    );
}