import { Formik,Form,Field,ErrorMessage, FieldArray, FastField} from 'formik'
import React from 'react'
import * as yup from 'yup';
import DisplayErrors from './DisplayErrors';
import './style.css';
function Sampleform() {
    const initialValues={
        email:'',
        name:'',
        number:'',
        address:'',
        area:'',
        socialmedia:'',
        mobilenumbers:[""]
    }
    const validationSchema=yup.object({
        email:yup.string().email("please enter valid email").required("enter email"),
        name:yup.string().required("enter name.."),
        number:yup.number().required("please enter mobile number...."),
        address:yup.string().required("enter address here...."),
        area:yup.string().required("select area..."),
        socialmedia:yup.object({
            facebook:yup.string().required("entr fb id...."),
            linkedin:yup.string().required("enter linked id....")
        }),
        mobilenumbers:yup.array().required("please enter mobile number.....")
    }) 
    const onSubmit=(values)=>{
       // console.log(values)
    }
    return (
        <div className="form">
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnChange={false} validateOnBlur={false} >
                {
                    (formikvalidation)=>{
                        console.log(formikvalidation.errors)
                 return (<Form> 
                    <label htmlFor="email">email</label>
                    <Field type="email" name="email" id="email" />
                    <ErrorMessage name="email" component={DisplayErrors}/>

                    <label htmlFor="name">name</label>
                    <Field type="text" name="name" id="name" />
                    <ErrorMessage name="name" component={DisplayErrors}/>

                    <label htmlFor="number">number</label>
                    <Field type="text" name="number" id="nunmber" />
                    <ErrorMessage name="number" component={DisplayErrors}/>

                    <label htmlFor="facebook">your fb id..</label>
                    <Field type="text" name="socialmedia.facebook" id="socialmedia.facebook" />
                    <ErrorMessage name="socialmedia.facebook" component={DisplayErrors}/>

                    <label htmlFor="number">your linked id....</label>
                    <Field type="text" name="socialmedia.linkedin" id="socialmedia.linkedin" />
                    <ErrorMessage name="socialmedia.linkedin" component={DisplayErrors}/>


                    <label htmlFor="address">you address...</label>
                    <FastField type="text" name="address" id="address">
                            {
                               (props)=>{
                                //console.log("address")
                                const {field} = props;
                                return <textarea {...field}></textarea>;
                                }
                            }
                    </FastField>
                    <ErrorMessage name="address" component={DisplayErrors}/>
                    
                    <label htmlFor="Mobile">your mobile numbers...</label>
                    <FieldArray name="mobilenumbers">
                            {
                                (fielsArgs)=>{
                                    //console.log(fielsArgs);
                                    const {form,push,remove} = fielsArgs;
                                    const {values} = form;
                                    const {mobilenumbers} = values;
                                    return <div>
                                        {
                                            mobilenumbers.map((index)=>(
                                                <div key={index} style={{display:'flex',justifyContent:'space-between'}}>
                                                    <Field name={`mobilenumbers[${index}]`} />
                                                   {mobilenumbers.length>1 && <button  className="remove" onClick={()=>remove(index)}>-</button> } 
                                                    <button className="add" onClick={()=>push("")}>+</button>
                                                </div>
                                                
                                            ))
                                        }
                                    </div>
                                }
                            }
                    </FieldArray>
                    <ErrorMessage name="mobilenumbers[0]" component={DisplayErrors}/>
                    <Field name="area">
                        {
                            (props)=>{
                                //console.log("select area",props);
                                const {field} = props;
                                return <select {...field}>
                                    <option value="#">==select===</option>
                                    <option value="nalgonda">nalgonda</option>
                                    <option value="chityal">chityal</option>
                                    <option value="nerada">nerada</option>
                                </select>
                            }
                        }
                    </Field>
                    <ErrorMessage name="area" component={DisplayErrors}/>
                    <Field type="button" value="Save" style={{backgroundColor:'orange'}} />
                </Form>)
                    }
                }   
            </Formik>

        </div>
    )
}

export default Sampleform
