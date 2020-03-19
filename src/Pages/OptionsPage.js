import React from 'react'
import LoginForm from '../Components/LoginForm.js'
import { useSelector, useDispatch } from 'react-redux'

export default function OptionsPage() {
    //current employee
    const currentEmployee = useSelector(state => state.employee)
    //dispatch
    const dispatch = useDispatch()

    //create new check and make that current check
    const newCheck = () => {
        console.log('general kenobi')
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
                const action = {
                    type: 'ADD_PRODUCT_TO_CURRENT_CHECK',
                    payload: newCheck
                }
                dispatch(action)
            })
    }
    return (
        <div>
            <button onClick={newCheck}>New Check</button>
            <LoginForm />
        </div>
    )
}