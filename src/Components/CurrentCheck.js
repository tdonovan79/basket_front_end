import React from 'react'

export default function CurrentCheck(props) {
    const check = props.check
    let sum = 0
    return (
        <div>
            {console.log('currentCheck', check)}
            {check.id}
            {check.products.map(product => {
                sum += product.price
                return <div>
                    <h5>{product.name}</h5>
                    <h6>{product.price}</h6>
                </div>
            })}
            <h3>Total: {sum}</h3>
        </div>
    )
}
