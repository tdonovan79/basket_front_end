import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Product from '../Components/Product.js'

export default function ItemContainer() {

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
        dispatch({
            type: 'ADD_PRODUCT_TO_CURRENT_CHECK',
            payload: newProduct
        })
    }

    return (
        <div>
            {products.map(product => {
                return <Product product={product} key={product.id} addProductToCurrentCheck={addProductToCurrentCheck}/>
            })}
        </div>
    )
}
