import React from 'react'
import { createContext,useState } from 'react'
import Counting from './Counting'
import Displaying from './Displaying'
export const store=createContext()
function CreateMainCart() {
    const [data, setdata] = useState([
        {brand:'LG'},{brand:'SANSUI'},{brand:'SONY'}
    ])
    return (
        <div>
            <store.Provider value={[data,setdata]}>
                    <Counting/>
                    <Displaying/>
            </store.Provider>

        </div>
    )
}

export default CreateMainCart
