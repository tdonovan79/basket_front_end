import React, { useState } from 'react'
import {useDispatch } from 'react-redux'
import {BASE_URL} from '../constants.js'

function LoginForm() {
    const [login, setLogin] = useState(true);
    const [form, setForm] = useState({ login: '', password: '', name: '' });

    const dispatch = useDispatch()

    //create or login/auth
    function handleSubmit(e) {
        e.preventDefault();
        const endpoint = login ? '/login' : '/employees';
        const config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        };
        fetch(BASE_URL + endpoint, config)
            .then(r => r.json())
            .then(data => {
                if (data.employee) {
                    localStorage.token = data.token;
                    localStorage.employee = JSON.stringify(data.employee)
                    dispatch({
                        type: 'SET_EMPLOYEE',
                        payload: data.employee
                    });
                    dispatch({
                        type: 'SET_CURRENT_CHECK',
                        payload: { id: -1 }
                    })
                }
                else {
                    alert(data.error)
                }
            })
    }
    //controlled form
    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function changeFormButton() {
        return login ? (
            <button onClick={() => setLogin(false)}>Set new employee</button>
        ) : (
                <button onClick={() => setLogin(true)}>
                    Employee log in
            </button>
            );
    }
    //clear current employee and clear local storage
    function handleLogout() {
        dispatch({
            type: 'CLEAR_EMPLOYEE'
        });
        localStorage.clear()
    }

    return (
        <div>
            <div className="form-page">
                {/* if login true render login */}
                <h1>{login ? 'Log In' : 'New Employee'}</h1>
                <form onSubmit={handleSubmit}>
                    Login:
                    <input
                        type="text"
                        name="login"
                        value={form.login}
                        onChange={handleChange}
                        placeholder="Login"
                    />
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                    {
                        // only render when creating employee
                        !login &&
                        <div>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Name"
                            />
                        </div>
                    }
                    <input type="submit" />
                </form>
                {changeFormButton()}
            </div>
            {/* logout button */}
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default LoginForm;
