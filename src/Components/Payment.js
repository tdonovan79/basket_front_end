import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { useSelector, useDispatch } from 'react-redux'


// => URLs
const BASE_URL = 'https://basketapp-api.herokuapp.com/'
const CHARGES_URL = BASE_URL + '/charge_adapter'

// => app component
export default function Payment() {
    const dispatch = useDispatch()
    const currentCheck = useSelector(state => state.currentCheck)
    const checks = useSelector(state => state.checks)

    //get check total
    const getPrice = checkProducts => {
        return checkProducts.reduce(function (total, product) {
            return total + product.price;
        }, 0);
    }
    //set price
    const price = currentCheck.id === -1 ? 0 : getPrice(currentCheck.products)

    //record sale in ront and back end
    const recordSale = (saleData) => {
        const params = {
            check_id: currentCheck.id,
            amount: price,
            credit: true,
            last_four: saleData.payment_method_details.card.last4,
            stripe_id: saleData.id
        }
        fetch('https://basketapp-api.herokuapp.com/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })
            .then(r => r.json())
            //close current check and move to next if available
            .then(() => {
                const closeAction = 
                dispatch({
                    type: 'SET_STATUS_CURRENT_CHECK',
                    payload: false
                })
                dispatch({
                    type: 'SET_STATUS',
                    payload: {setCheck: currentCheck, status: false}
                })
                const nextCheckAction = checks.length > 0 ?
                    {
                        type: 'SET_CURRENT_CHECK',
                        payload: checks.find(check => check.open && check.id !== currentCheck.id)
                    }
                    :
                    {
                        type: 'SET_CURRENT_CHECK',
                        payload: { id: -1 }
                    }
                dispatch(nextCheckAction)
            })
    }

    //make Stripe payment
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
            .then(saleData => {
                recordSale(saleData)
            })
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