import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup';
function CrashCourseformic()
 {
     const initialValues={
         email:'',
         name:''
     }
     const validationSchema=yup.object({
             email:yup.string().email("invalid email format").required("required"),
             name:yup.string().required("Required")
         })
     const onSubmit=(values)=>{
         console.log(values)
     }
    const formik=useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })
    console.log(formik)
    return (
        <div>
            <div className="form">
                <form autoComplete="off" onSubmit={formik.handleSubmit}>
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" id='email' {...formik.getFieldProps('email')}/>
                    <p style={{color:'tomato'}}>{formik.touched.email && formik.errors.email ? formik.errors.email:null}</p>
                    <label htmlFor="name">name</label>
                    <input type="text" name="name" id='name' {...formik.getFieldProps('name')} />
                    <p style={{color:'tomato'}}>{formik.touched.name && formik.errors.name ? formik.errors.name:null}</p>
                    <button type="submit">submit</button>
                </form>
            </div>
        </div>
    )
}

export default CrashCourseformic
