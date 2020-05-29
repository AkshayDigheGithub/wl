import React, { Component } from 'react';
import { SwitchR, Router, Link } from './switch';

class NavigationLink extends Component {
    render() {
        return (
            <Router>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                <SwitchR />
            </Router>
        )
    }
}

export default NavigationLink;