import React from "react";
import {HashRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Container from "react-bootstrap/Container";
import {Background} from "./components/header";
import {Portfolio} from "./components/portfolio";
import {NavBar} from "./components/navigation/navbar";
import {Contact} from "./components/contact";

function App() {
    return (
        <HashRouter basename="/">
            <Switch>
                <Route exact path="/">
                    <NavBar/>
                    <Background/>
                    <Container fluid>
                        <Portfolio/>
                        <Contact/>
                    </Container>
                </Route>
            </Switch>

        </HashRouter>
    );
}

export default App;
