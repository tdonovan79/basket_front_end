import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

export default function Nav() {
    //current employee
    const currentEmployee = useSelector(state => state.employee)
    return (
        <div>
            <p>Logged in: {currentEmployee.name}</p>
            <nav>
                <Link to="/">Products</Link>
                <Link to="/options">Options    </Link>
                <Link to="/payment">Payment    </Link>
            </nav>
        </div>
    );
}