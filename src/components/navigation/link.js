import React, { Component } from 'react';
import { SwitchR, Router } from './switch';

class NavigationLink extends Component {
    render() {
        return (
            <Router>
                <SwitchR />
            </Router>
        )
    }
}

export default NavigationLink;