import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

import Home from "../home/index";
import LoginComponent from "../login/login.component";
import Signupcomponent from "../signup/signup.component";

function SwitchR() {
    return (
        <Switch>
            <Route path="/login">
                <LoginComponent />
            </Route>
            <Route path="/signup">
                <Signupcomponent />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
}

export {
    SwitchR,
    Router,
    Link,
    Redirect,
    useHistory,
    useLocation
}