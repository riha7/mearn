import React from 'react'
import { Formik,Form,Field,ErrorMessage, FieldArray } from 'formik';
import ShoeErrorFormik from './ShowErrorFormik';
import * as yup from 'yup';
import ShowErrorFormik from './ShowErrorFormik';
function SampleFormik() {
    const initialValues={
        email:'',
        name:'',
        phone:'',
        state:'',
        address:'',
        socialmedia:{
            facebook:'',
            linkedin:''
        },
        mobilenumbers:["",""],
        phonenumbers:[""]
    }
    const validationSchema=yup.object({
        email:yup.string().email("please enter valid Email").required("Email required"),
        name:yup.string().required("Name Required"),
        phone:yup.number().required("Valid Mobile number"),
        state:yup.string().required("enter your state"),
        address:yup.string().required("Required...."),
        socialmedia:yup.object({
            facebook:yup.string().required("fb link required"),
            linkedin:yup.string().required("linked required")
        }),
        mobilenumbers:yup.array().required("mobile Number required"),
        phonenumbers:yup.array().required("required phone number...")
    })
    const onSubmit=(values)=>{
        console.log(values)
    }
    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
                <Form autoComplete="off">
                    <label htmlFor="email">email</label>
                    <Field type="email" name='email' id='email' placeholder="enter email..." />
                    <ErrorMessage name='email' component={ShoeErrorFormik} />
                    <label htmlFor="name">name</label>
                    <Field type="text" name='name' id='name' placeholder="enter name..." minLength='5' maxLength='10' />
                    <ErrorMessage name='name' component={ShoeErrorFormik} />
                    <label htmlFor="phone">phone</label>
                    <Field type="text" name='phone' id='phone' placeholder="enter phone number..."/>
                    <ErrorMessage name='phone' component={ShoeErrorFormik} />
                    <label htmlFor="state">state</label>
                    <Field type="text" name='state' id='state' placeholder="where are you located..." minLength='5' maxLength='10' />
                    <ErrorMessage name='state' component={ShowErrorFormik} />
                    <label htmlFor="facebook">facebook ID</label>
                    <Field type="text" name='socialmedia.facebook' id='socialmedia.facebook' placeholder="id..."/>
                    <ErrorMessage name='socialmedia.facebook' component={ShowErrorFormik} />
                    <label htmlFor="linkedin">linkedIN ID</label>
                    <Field type="text" name='socialmedia.linkedin' id='socialmedia.linkedin' placeholder="id..."/>
                    <ErrorMessage name='socialmedia.linkedin' component={ShowErrorFormik} />
                    <label htmlFor="mobile1">mobile1</label>
                    <Field type="text" name='mobilenumbers[0]' id='mobilenumbers[0]' placeholder="mobile1..."/>
                    <ErrorMessage name='mobilenumbers[0]' component={ShowErrorFormik} />
                    <label htmlFor="mobile2">mobile2</label>
                    <Field type="text" name='mobilenumbers[1]' id='mobilenumbers[1]' placeholder="mobile2..."/>
                    <ErrorMessage name='mobilenumbers[1]' component={ShowErrorFormik} />
                    <label htmlFor="address">your address</label><br></br>
                    <Field name='address' id='address'>
                        {
                            (props)=>{
                                const {field}=props;
                                console.log(props);
                                return <textarea {...field} style={{width:'390px',borderRadius:'5px'}} ></textarea>;
                            }
                        }
                    </Field>
                    <ErrorMessage name='address' component={ShowErrorFormik} />
                    <label htmlFor="phonenumbers">Phonenumbers add or remove</label>
                    <FieldArray name="phonenumbers">
                        {
                            (fieldArgs)=>{
                                console.log(fieldArgs)
                                const {form,push,remove}=fieldArgs;
                                const {values} = form;
                                const {phonenumbers} = values;
                                return <div>
                                        {
                                            phonenumbers.map((phonenumber,index)=>(
                                                <div key={index}  style={{display:'flex',justifyContent:'space-around',flexDirection:'row'}}>
                                                <Field name={`phonenumbers[${index}]`}/>
                                                {phonenumbers.length>1 && <button style={{width:'10px'}} onClick={()=>remove(index)}>-</button>}
                                                <button style={{width:'10px'}} onClick={()=>push(index)}>+</button>
                                                </div>
                                            ))
                                        }
                                </div>
                            }
                        }
                    </FieldArray>
                    <ErrorMessage name='phonenumbers[phonenumbers.length]' component={ShowErrorFormik} />
                    <button type="submit">submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default SampleFormik
