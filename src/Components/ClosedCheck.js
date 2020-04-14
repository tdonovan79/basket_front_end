import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function ClosedCheck(props) {
    const dispatch = useDispatch()
    //control whether check information is shown
    const [show, setShow] = useState(false);
    const check = props.check
    //toggle showing check info
    const toggleShow = () => {
        setShow(!show)
    }
    //reopen check
    const openCheck = () => {
        const params = {
            check_id: check.id
        }
        fetch('https://basketapp-api.herokuapp.com//reopen_check', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })
            .then(r => r.json())
            .then(() => {
                dispatch({
                    type: 'SET_STATUS',
                    payload: {setCheck: check, status: true}
                })
            })
    }
    //starting for check total
    let checkTotal = 0
    return (
        <div>
            {check.id}
            <button onClick={() => toggleShow()}>Show Check</button>
            {
                show ?
                    <div>
                        <ul>
                            {check.products.map(product => {
                                checkTotal += product.price
                                return <li key={product.id}>
                                    <h5 key={product.name}>{product.name}</h5>
                                    <h6 key={product.price}>{product.price}</h6>
                                </li>
                            })}
                        </ul>
                        <h4>Total: {checkTotal}</h4>
                        <button class="ui button" onClick={() => openCheck()}>Reopen Check</button>
                    </div>
                    :
                    <div></div>
            }
        </div>
    )
}
