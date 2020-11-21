import React from "react";
import {HashRouter, Switch, Route} from "react-router-dom";
import './App.css';
import {Background} from "./components/header";

function App() {
    return (
        <HashRouter basename="/">

            <Switch>
                <Route exact path="/">
                    <Background/>
                </Route>
                <Route exact path="/portfolio">
                    <p>portfolio</p>
                </Route>
                <Route exact path="/resume">
                    <p>resume</p>
                </Route>
            </Switch>

        </HashRouter>
    );
}

export default App;
