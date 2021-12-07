import React,{useContext} from 'react'
import { store } from './CreateMainCart'
function Counting() {
    const [data] = useContext(store)
    return (
        <div>
            <div className="card alert-success">
                <div className="card-title">
                    {data.length}
                </div>
            </div>
        </div>
    )
}

export default Counting
