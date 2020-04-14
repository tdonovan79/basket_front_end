import React from 'react';
import { Switch, Route } from 'react-router-dom';
import OptionsPage from './OptionsPage.js'
import PaymentPage from './PaymentPage.js'
import HomePage from './HomePage.js'
import NavBar from '../Components/NavBar.js'
import ReportsPage from './ReportsPage.js'

export default function Routes() {
    return (
        <div>
            <NavBar/>
            <div>
                <Switch >
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/options" component={OptionsPage} />
                    <Route exact path="/payment" component={PaymentPage} />
                    <Route exact path="/reports" component={ReportsPage} />

                </Switch>
            </div>
        </div>
    );
}