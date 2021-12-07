import React from 'react'
import { store } from './CreateMainCart';
import { useContext,useState } from 'react';
function Displaying() { 
    const [data,setdata] = useContext(store)
    const [name, setname] = useState('')
    const handleChange=(e)=>{
        e.preventDefault()
        setdata([...data,{brand:name}])  
    }
    return (
        <div>
            <div className="card" style={{color:'orange'}}>
                
                    <h1>{data.map((item,index)=>(<p className="card-body" key={index}>{item.brand}</p>))}</h1>
            </div>
            <div className="form">
                <form onSubmit={handleChange}>
                    <input type="text" name="name" value={name} onChange={(e)=>setname(e.target.value)}/>
                    <input type="submit" value="Add" />
                </form>
            </div>
        </div>
    )
}

export default Displaying
