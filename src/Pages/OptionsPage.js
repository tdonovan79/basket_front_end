import React from 'react'
import LoginForm from '../Components/LoginForm.js'
import ProductForm from '../Components/ProductForm.js'

export default function OptionsPage() {
    
    return (
        <div className="page">
            <LoginForm />
            <ProductForm/>
        </div>
    )
}