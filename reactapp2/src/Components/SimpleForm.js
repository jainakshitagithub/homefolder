import react from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'

function Simpleform(){

   const initialValues = {
    name:'',
    email:'',
    channel:'',
   }
   const onSubmit =  values=>{
    // console.log('FormData',values)
    console.log(values);
}
const validate = values=>{
    const errors={}
    if(!values.name)
    {
        errors.name = "Required";
    }
    
    if(!values.email)
    {
        errors.email = "Required";
    }else if(!/jkdlf/.test(values.email)){
        errors.email = "Invalid email";
    }
    
    if(!values.channel)
    {
        errors.channel = "Required";
    }
    return errors;
        }
    
        const validationSchema = Yup.object({
            name:Yup.string().required('Required field'),
            email:Yup.string().required('Required field').email('Invalid email format'),
            channel:Yup.string().required('Required field')
        })
const Formik = useFormik({
    initialValues,
    onSubmit,
    // validate 
    validationSchema
})
return(
<>
<div className="container mt-4">
                <form onSubmit = {Formik.handleSubmit}>
                    <div className="row mb-3">
                        <label htmlFor="name" className="col-sm-2 col-form-label" >Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="name "  name="name" onChange={Formik.handleChange} onBlur={Formik.handleBlur} value={Formik.values.name}/>
                        {Formik.errors.name && Formik.touched.name ? <div className="text-danger">{Formik.errors.name}</div> : null}
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="email" className="col-sm-2 col-form-label" >Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="email " name="email" onChange={Formik.handleChange} value={Formik.values.email} onBlur={Formik.handleBlur} />
                        {Formik.errors.email && Formik.touched.email ? <div className="text-danger">{Formik.errors.email}</div> : null}
                           
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label htmlFor="channel" className="col-sm-2 col-form-label" >Channel</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="channel" name="channel" onChange={Formik.handleChange} values={Formik.values.channel} onBlur={Formik.handleBlur}  />
                            {Formik.errors.channel && Formik.touched.channel  <div className="text-danger">{Formik.errors.channel}</div> : null}

                        </div>
                    </div>

                    <div className="text-center mb-3">
                        <button className="btn btn-danger" type="submit">Submit</button>
                    </div>
                    </form>
                    </div>
</>
);
}

export default Simpleform