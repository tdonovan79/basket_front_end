import React from 'react'

export default function Check(props) {
    const check = props.check
    return (
        <div key={check.id} onClick={() => props.changeCurrentCheck(check)}>
            {check.id}
        </div>
    )
}
