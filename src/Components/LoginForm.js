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
                console.log('data', data)
                localStorage.token = data.token;
                // localStorage.login = data.employee.login;
                // localStorage.name = data.employee.name
                localStorage.employee = JSON.stringify(data.employee)
                console.log('local storage', localStorage)
                dispatch({
                    type: 'SET_EMPLOYEE',
                    payload: data.employee
                });
            })
    }

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <div className="form-page">
                <h1>Welcome {employee.name}</h1>
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
                    <input type="submit" />
                </form>
                {/* {changeFormButton()} */}
            </div>
        </div>
    )
}

export default LoginForm;
