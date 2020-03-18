import React from 'react'

export default function CurrentCheck(props) {
    const check = props.check
    let checkTotal = 0
    console.log(check)
    return (
        <div>
            {check.id}
            <ul>
            {check.products.map(product => {
                checkTotal += product.price
                return <li key={product.id}>
                    <h5 key={product.name}>{product.name}</h5>
                    <h6 key={product.price}>{product.price}</h6>
                </li>
            })}
            </ul>
            <h3>Total: {checkTotal}</h3>
        </div>
    )
}
