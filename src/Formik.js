import { useFormik } from 'formik'
import React from 'react'

function Formik() {
    const initialValues={
        email:'',
        name:''
    }
    const validate=(values)=>{
        console.log(values);
    }
    const onSubmit=(values)=>{
        console.log(values)
    }
    const formic=useFormik({
        initialValues,
        validate,
        onSubmit
    })
    //console.log(formic);
    return (
        <div className="app">
          <form autoComplete="off" onSubmit={formic.handleSubmit}>
              <h1>Formik Feedback: </h1>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={formic.values.email} onChange={formic.handleChange} /> 
                <label htmlFor="name">name</label>
                <input type="text" name="name" id="name" value={formic.values.name} onChange={formic.handleChange} />
                <label htmlFor="text"></label>

                <button type="submit" >submit Now</button> 
                <p className='footer'>powered by Harikrishna</p>
            </form>  
        </div>
    )
}

export default Formik
