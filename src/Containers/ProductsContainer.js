import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Product from '../Components/Product.js'

export default function ItemContainer() {

    //currentCheck
    const currentCheck = useSelector(state => state.currentCheck)
    //dispatch
    const dispatch = useDispatch()
    //products
    const products = useSelector(state => state.products)
    //fetch products from backend on render
    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(r => r.json())
            .then(products => {
                // console.log(products)
                const action = {
                    type: 'SET_PRODUCTS',
                    payload: products
                };
                dispatch(action);
            })
    }

        , [])

    //Add product to products in current check, front end and back end
    const addProductToCurrentCheck = (newProduct) => {
        console.log(newProduct.id)
        fetch('http://localhost:3000/sales', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                check_id: currentCheck.id,
                product_id: newProduct.id
            })
        })
            .then(r => r.json())
            .then(data => {
                const currentAction = {
                    type: 'ADD_PRODUCT_TO_CURRENT_CHECK',
                    payload: newProduct
                }
                dispatch(currentAction)
                const checkAction = {
                    type: 'ADD_PRODUCT_TO_CHECKS',
                    payload: {newCheck: currentCheck, newProduct: newProduct}
                }
                dispatch(checkAction)
            })
    }

    return (
        <div>
            {products.map(product => {
                return <Product product={product} key={product.id} addProductToCurrentCheck={addProductToCurrentCheck} />
            })}
        </div>
    )
}
