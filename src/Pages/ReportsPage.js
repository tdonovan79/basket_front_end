import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ClosedCheck from '../Components/ClosedCheck.js'

export default function ReportsPage() {
    const checks = useSelector(state => state.checks)
    const currentEmployee = useSelector(state => state.employee)

    


    return (
        <div>
            <h1>Closed Checks</h1>
            {checks.length > 0 ?
                checks.map(oneCheck => {
                    if (!oneCheck.open) {
                        return <div>
                            <ClosedCheck key={oneCheck.id} check={oneCheck} />
                        </div>
                    }
                })
                :
                'no checks'}
        </div>
    )
}
