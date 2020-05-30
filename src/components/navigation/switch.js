import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import { PrivateRoute } from '../PrivateRoute';
// Components loaded here
import Home from "../home/index";
import LoginComponent from "../login/login.component";
import Signupcomponent from "../signup/signup.component";
import ProfileComponent from '../home/profile/profile';

function SwitchR() {
    return (
        <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/profile" component={ProfileComponent} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/signup" component={Signupcomponent} />
        </Switch >
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