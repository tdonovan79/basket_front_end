import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function CurrentCheck(props) {
    const check = props.check
    //delete item from check
    const deleteProduct = productId => {
        fetch('http://localhost:3000/payments', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })
            .then(r => r.json())
            .then(() => {

            }
    }
    //starting for check total
    let checkTotal = 0
    return (
        <div>
            {check.id}
            <ul>
            {check.products.map(product => {
                checkTotal += product.price
                return <li key={product.id}>
                    <h5 key={product.name}>{product.name}</h5>
                    <h6 key={product.price}>{product.price}</h6>
                    <button onClick={() => deleteProduct(product.id)}>Delete Product</button>
                </li>
            })}
            </ul>
            <h3>Total: {checkTotal}</h3>
        </div>
    )
}
