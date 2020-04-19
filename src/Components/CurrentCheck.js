import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BASE_URL} from '../constants.js'

export default function CurrentCheck() {
    // const check = props.check
    const check = useSelector(state => state.currentCheck)
    const dispatch = useDispatch()
    //delete item from check
    const deleteProduct = product => {
        fetch(BASE_URL + '/delete_from_check', {
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
        <div className="current-check-container">
            <h2 className="current-check-id">{check.id === -1 ? "" : check.id}</h2>
            {console.log(check)}
            <ul className="check-items">
            {check.products.map(product => {
                checkTotal += product.price
                return <li key={product.id} className="check-item">
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
