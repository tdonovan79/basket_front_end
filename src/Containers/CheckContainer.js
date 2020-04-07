import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CheckButton from '../Components/CheckButton.js'
import CurrentCheck from '../Components/CurrentCheck.js'

export default function CheckContainer() {
    const dispatch = useDispatch();
    const checks = useSelector(state => state.checks)
    const currentEmployee = useSelector(state => state.employee)
    const currentCheck = useSelector(state => state.currentCheck)
    //set initial current check
    useEffect(() => {
        if (currentCheck.id === -1 && checks.length > 0) {
            dispatch({
                type: 'SET_CURRENT_CHECK',
                payload: checks.find(check => check.open)
            })
        }
    }
        , [checks, dispatch])
    //get checks on mount
    useEffect(() => {
        fetch('https://basketapp-api.herokuapp.com//get_checks', {
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
        <div class="ui visible left sidebar">
            {currentCheck.id ===  -1?
                <div key={-1}>No Open Checks</div>
                :
                <CurrentCheck key={currentCheck.id} check={currentCheck} class="item" />
            }
            {checks.length > 0 ?
                checks.map(oneCheck => {
                    if (oneCheck.id !== currentCheck.id && oneCheck.open) {
                        return <CheckButton key={oneCheck.id} check={oneCheck} changeCurrentCheck={changeCurrentCheck} class="item" />
                    }
                })
                :
                'no checks'}
        </div>
    )
}
