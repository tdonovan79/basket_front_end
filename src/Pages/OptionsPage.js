import React from 'react'
import LoginForm from '../Components/LoginForm.js'
import { useSelector, useDispatch } from 'react-redux'
import ProductForm from '../Components/ProductForm.js'

export default function OptionsPage() {
    //current employee
    const currentEmployee = useSelector(state => state.employee)
    //checks
    const checks = useSelector(state => state.checks)
    //dispatch
    const dispatch = useDispatch()

    //create new check and make that current check
    const newCheck = () => {
        fetch('http://localhost:3000/checks', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ employee: currentEmployee })
        })
            .then(r => r.json())
            .then(newCheck => { 
                dispatch({
                    type: 'ADD_CHECK',
                    payload: newCheck
                })
                dispatch({
                    type: 'SET_CURRENT_CHECK',
                    payload: checks[checks.length-1]
                })
            })
    }
    return (
        <div class ="pusher">
            <button class="ui button" onClick={newCheck}>New Check</button>
            <LoginForm />
            <ProductForm/>
        </div>
    )
}