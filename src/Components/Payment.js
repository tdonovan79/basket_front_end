// => imports
import React from 'react'
import StripeCheckout from 'react-stripe-checkout';


// => URLs
const BASE_URL = 'http://localhost:3000'
const CHARGES_URL = BASE_URL + '/charge_adapter'

// => app component
export default function Payment() {

    const price = 10
    const onToken = (token) => {

        const charge = {
            token: token.id
        };

        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ charge: charge, price: price * 100 })
        };

        fetch(CHARGES_URL, config)
            .then(res => res.json())
            //redirect to confirmation page after payment is made
            .then(data =>
                {console.log(data)})
    }

    return (
        <div>
            <StripeCheckout
                token={onToken}
                stripeKey={'pk_test_hu8PVV0R7B8kvBXe6dcMJzv900zdD0uCqV'}
            />
        </div>
    )
}