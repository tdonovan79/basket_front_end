import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav>
            <Link to="/">Products</Link>
            <Link to="/options">Options</Link>
            <Link to="/payment">Payment</Link>
        </nav>
    );
}