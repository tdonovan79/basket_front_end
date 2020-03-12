import React, { Component } from 'react'

export default class LoginForm extends Component {

    state = {
        login: "",
        password: "",
        name: ""
    }

    render() {
        const handleSubmit = (e) => {
            e.preventDefault();
            const endpoint = '/employees';
            const config = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.state)
            };
            fetch('http://localhost:3000/' + endpoint, config)
                .then(r => r.json())
                .then(data => {
                    console.log(data)
                    // localStorage.token = data.token;
                    // dispatch({
                    //     type: 'SET_USER',
                    //     payload: data.user
                    // });
                });
        }

        const handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            });
        }

        return (
            <div>
                <div className="form-page">
                    <h1>Test login</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="login"
                            value={this.state.username}
                            onChange={handleChange}
                            placeholder="Username"
                        />
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}/*  */
                            onChange={handleChange}
                            placeholder="Password"
                        />
                        <input
                            type="name"
                            name="name"
                            value={this.state.name}
                            onChange={handleChange}
                            placeholder="Name"
                        />
                        <input type="submit" />
                    </form>
                    {/* {changeFormButton()} */}
                </div>
            </div>
        )
    }
}
