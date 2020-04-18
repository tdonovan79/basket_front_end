import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {BASE_URL} from '../constants.js'

export default function ProductForm() {
    const [form, setForm] = useState({ name: '', price: '', tax: '' });

    const dispatch = useDispatch()

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        };
        fetch(BASE_URL + '/products', config)
            .then(r => r.json())
            .then(data => {
                console.log('data', data)
                dispatch({
                    type: 'ADD_PRODUCT',
                    payload: data
                });
            })
    }

    return (
            <div className="item-form">
                <h1>New Product</h1>
                <form onSubmit={handleSubmit}>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Name"
                    />
                    Price:
                    <input
                        type="text"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        placeholder="Price"
                    />
                    Tax:
                    <input
                        type="text"
                        name="tax"
                        value={form.tax}
                        onChange={handleChange}
                        placeholder="8875"
                    />
                    <input type="submit" />
                </form>
        </div>
    )
}
