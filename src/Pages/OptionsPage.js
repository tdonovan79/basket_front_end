import React from 'react'
import LoginForm from '../Components/LoginForm.js'
import { useSelector, useDispatch } from 'react-redux'
import ProductForm from '../Components/ProductForm.js'

export default function OptionsPage() {
    //current employee
    const currentEmployee = useSelector(state => state.employee)
    
    return (
        <div className="page">
            <LoginForm />
            <ProductForm/>
        </div>
    )
}