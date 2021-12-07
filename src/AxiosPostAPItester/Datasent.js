import axios from 'axios';
import React,{useState} from 'react'

function Datasent() {
    const [data, setdata] = useState({
        id:'',
        name:''
    })
    const {id,name} = data;
    const submitHandler=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:5000/addproducts",data).then(()=>{
            setdata({...data,id:'',name:''})
            alert("addes successfully")
        }).catch(err=>console.log(err))
    }
    return (
        <div>
            <h1>Data sent to MearnStack Application</h1>
            <form onSubmit={submitHandler}>
                <input type="text" name="id" id="id"  value={id} onChange={(e)=>setdata({...data,id:e.target.value})} />
                <input type="text" name="name" id="name"  value={name} onChange={(e)=>setdata({...data,name:e.target.value})} />
                <input type="submit" value="Add Products"/>
            </form>
        </div>
    )
}

export default Datasent
