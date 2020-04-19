import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CheckButton from '../Components/CheckButton.js'
import CurrentCheck from '../Components/CurrentCheck.js'
import {BASE_URL} from '../constants.js'

export default function CheckContainer() {
    const dispatch = useDispatch();
    const checks = useSelector(state => state.checks)
    const currentEmployee = useSelector(state => state.employee)
    const currentCheck = useSelector(state => state.currentCheck)

    //create new check and make that current check
    const newCheck = () => {
        fetch(BASE_URL + '/checks', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ employee: currentEmployee })
        })
            .then(r => r.json())
            .then(newCheck => { 
                dispatch({
                    type: 'ADD_CHECK',
                    payload: newCheck
                })
                dispatch({
                    type: 'SET_CURRENT_CHECK',
                    payload: (checks.length > 1 ? checks[checks.length-1] : checks[0])
                })
            })
    }
    //set initial current check
    useEffect(() => {
        if (currentCheck.id === -1 && checks.length > 0) {
            dispatch({
                type: 'SET_CURRENT_CHECK',
                payload: checks.find(check => check.open)
            })
        }
    }
        , [checks, dispatch, currentCheck.id])
    //get checks on mount
    useEffect(() => {
        fetch(BASE_URL + '/get_checks', {
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
    }, [currentEmployee, dispatch]);
    //set the current check
    const changeCurrentCheck = (newCheck) => {
        dispatch({
            type: 'SET_CURRENT_CHECK',
            payload: newCheck
        })
        console.log(newCheck)
    }
    return (
        <div className="sidebar">
            {currentCheck.id === -1 ?
                <div key={-1}>No Open Checks</div>
                :
                <CurrentCheck key={currentCheck.id} className="current-check" />
            }
            <div className="check-button-container">{
                checks.length > 0 ?
                checks.map(oneCheck => {
                    if (oneCheck.id !== currentCheck.id && oneCheck.open) {
                        return <div className="check-button" key = {oneCheck.id}>
                    <CheckButton key={oneCheck.id} check={oneCheck} changeCurrentCheck={changeCurrentCheck} class="item" />
                </div>
                    }
                    else {
                        return <></>
                    }
                })
                :
                'no checks'
                }</div>
                <button className="button" onClick={newCheck}>New Check</button>
        </div>
    )
}
