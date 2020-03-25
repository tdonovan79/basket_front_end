import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

export default function Nav() {
    //current employee
    const currentEmployee = useSelector(state => state.employee)
    return (
        <div id= "nav-bar">
            <p class="item">Logged in: {currentEmployee.name}</p>
            <nav i>
                <Link  to="/"><button class="ui button item nav-button">Products</button></Link>
                <Link to="/options"><button class="ui button item nav-button">Options</button></Link>
                <Link to="/payment"><button class="ui button item nav-button">Payment</button></Link>
                <Link to="/reports"><button class="ui button item nav-button">Reports</button></Link>
            </nav>
        </div>
    );
}