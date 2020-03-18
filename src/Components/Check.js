import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Check(props) {
    const check = props.check
    return (
        <div onClick={() => props.changeCurrentCheck(check)}>
            {console.log('other check', check)}
            {check.id}
           
        </div>
    )
}
