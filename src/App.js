import React from "react";
import {HashRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Container from "react-bootstrap/Container";
import {Background} from "./components/header";
import {Portfolio} from "./components/portfolio";
import {Navigation} from "./components/navigation";

function App() {
    return (
        <HashRouter basename="/">
            <Switch>
                <Route exact path="/">
                    <Navigation/>
                    <Background/>
                    <Container fluid>
                        <Portfolio/>
                    </Container>
                </Route>
            </Switch>

        </HashRouter>
    );
}

export default App;
