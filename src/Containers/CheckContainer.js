import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Check from '../Components/Check.js'
import CurrentCheck from '../Components/CurrentCheck.js'

export default function CheckContainer() {
    const dispatch = useDispatch();
    const checks = useSelector(state => state.checks)
    const currentEmployee = useSelector(state => state.employee)
    const currentCheck = useSelector(state => state.currentCheck)
    useEffect(() => {
        if (currentCheck.id === -1 && checks.length > 0) {
            dispatch({
                type: 'SET_CURRENT_CHECK',
                payload: checks[0]
            })
        }
    }
        , [checks, currentCheck.id, dispatch])

    useEffect(() => {
        fetch('http://localhost:3000/get_checks', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ employee: currentEmployee })
        })
            .then(r => r.json())
            .then(checks => {
                const action = {
                    type: 'SET_CHECKS',
                    payload: checks
                };
                dispatch(action);
            })
    }, [currentEmployee]);
    //set the current check
    const changeCurrentCheck = (newCheck) => {
        dispatch({
            type: 'SET_CURRENT_CHECK',
            payload: newCheck
        })
    }
    return (
        <div>
            {currentCheck.id ===  -1?
                <div key={null}></div>
                :
                <CurrentCheck key={currentCheck.id} check={currentCheck} />
            }
            {checks.length > 0 ?
                checks.map(oneCheck => {
                    if (oneCheck.id !== currentCheck.id) {
                        return <Check key={oneCheck.id} check={oneCheck} changeCurrentCheck={changeCurrentCheck}/>
                    }
                })
                :
                'no checks'}
        </div>
    )
}
