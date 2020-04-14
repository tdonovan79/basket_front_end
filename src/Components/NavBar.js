import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

export default function Nav() {
    //current employee
    const currentEmployee = useSelector(state => state.employee)
    return (
        <div className= "nav-bar">
            <p class="item">Logged in: {currentEmployee.name}</p>
            <nav i>
                <Link  to="/"><button>Products</button></Link>
                <Link to="/options"><button>Options</button></Link>
                <Link to="/payment"><button>Payment</button></Link>
                <Link to="/reports"><button>Reports</button></Link>
            </nav>
        </div>
    );
}