import React from 'react'

export default function Product(props) {
    //current product
    const product = props.product
    return (
        <div>
            <button
                key={product.id}
                onClick={() => props.addProductToCurrentCheck(product)}
            >{product.name}</button>
        </div>
    )
}
