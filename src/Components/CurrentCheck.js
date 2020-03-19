import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function CurrentCheck(props) {
    const check = props.check
    const dispatch = useDispatch()
    //delete item from check
    const deleteProduct = product => {
        fetch('http://localhost:3000/delete_from_check', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                check_id: check.id,
                product_id: product.id
            })
        })
            .then(r => r.json())
            .then(data => {
                    console.log()
                    dispatch({
                        type: 'DELETE_PRODUCT',
                        payload: {selCheck: check, delProduct: product}
                    })
                    dispatch({
                        type: 'DELETE_PRODUCT_FROM_CURRENT_CHECK',
                        payload: product
                    })

            })
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
                    <button onClick={() => deleteProduct(product)}>Delete Product</button>
                </li>
            })}
            </ul>
            <h3>Total: {checkTotal}</h3>
        </div>
    )
}
