import React from 'react';
import { Switch, Route } from 'react-router-dom';
import OptionsPage from './OptionsPage.js'
import PaymentPage from './PaymentPage.js'
import HomePage from './HomePage.js'

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/options" component={OptionsPage} />
            <Route exact path="/payment" component={PaymentPage} />
        </Switch>
    );
}