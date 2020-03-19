import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function LoginForm() {
    const employee = useSelector(state => state.employee);
    const [login, setLogin] = useState(true);
    const [form, setForm] = useState({ login: '', password: '', name: '' });

    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault();
        const endpoint = login ? '/login' : '/employees';
        const config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        };
        fetch('http://localhost:3000/' + endpoint, config)
            .then(r => r.json())
            .then(data => {
                if (data.employee) {
                    localStorage.token = data.token;
                    localStorage.employee = JSON.stringify(data.employee)
                    dispatch({
                        type: 'SET_EMPLOYEE',
                        payload: data.employee
                    });
                }
                else {
                    alert(data.error)
                }
            })
    }

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

    return (
        <div>
            <div className="form-page">
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
        </div>
    )
}

export default LoginForm;
