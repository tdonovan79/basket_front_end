import React from 'react'
import { useSelector} from 'react-redux'
import ClosedCheck from '../Components/ClosedCheck.js'

export default function ReportsPage() {
    const checks = useSelector(state => state.checks)

    


    return (
        <div className="page">
            <h1>Closed Checks</h1>
            {checks.length > 0 ?
                checks.map(oneCheck => {
                    if (!oneCheck.open) {
                        return <div>
                            <ClosedCheck key={oneCheck.id} check={oneCheck} />
                        </div>
                    }
                    else {
                        return <></>
                    }
                })
                :
                <></>}
        </div>
    )
}
