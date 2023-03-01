import { Formik, Form, Field, ErrorMessage , FieldArray } from 'formik'
import * as Yup from 'yup'
import Textmsg from './Textmsg'

function NewSimpleform() {

    const initialValues = {
        name: '',
        email: '',
        channel: '',
        comments: '',
        address: '',
        social:{
            facebook:'',
            instagram:''

        },
        phoneNumbers:['',''],
        phNumbers:['']
    }
    const onSubmit = values => {
        console.log("Formik values",values);
    }


    const validationSchema = Yup.object({
        name: Yup.string().required('Required field'),
        email: Yup.string().required('Required field').email('Invalid email format'),
        channel: Yup.string().required('Required field')
    })


    return (
        <>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
                <div className="container mt-4">
                    <Form >
                        <div className="row mb-3">
                            <label htmlFor="name" className="col-sm-2 col-form-label" >Name</label>
                            <div className="col-sm-10">
                                <Field  className="form-control" id="name " name="name"/>
                                <ErrorMessage name="name" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="email" className="col-sm-2 col-form-label" >Email</label>
                            <div className="col-sm-10">
                                <Field  className="form-control" id="email " name="email" />
                                <ErrorMessage name="email" />

                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="facebook" className="col-sm-2 col-form-label" >Facebook</label>
                            <div className="col-sm-10">
                                <Field  className="form-control"  name="social.facebook" />

                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="instagram" className="col-sm-2 col-form-label" >Instagram</label>
                            <div className="col-sm-10">
                                <Field  className="form-control"  name="social.instagram" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="comments" className="col-sm-2 col-form-label" >Comments</label>
                            <div className="col-sm-10">
                                <Field as="textArea" className="form-control" id="comments " name="comments" />


                            </div>
                        </div>
                        {/* <div className="row mb-3">
                            <label htmlFor="address" className="col-sm-2 col-form-label" >Address</label>
                            <div className="col-sm-10">
                                <Field  className="form-control"  name="address">
                                    {(props) => {
                                        console.log(props)
                                    }}
                                </Field>

                            </div>
                        </div> */}

                        <div className="row mb-3">
                            <label htmlFor="channel" className="col-sm-2 col-form-label" >Channel</label>
                            <div className="col-sm-10">
                                <Field type="text" className="form-control" id="channel" name="channel" />
                                <ErrorMessage name="channel" />

                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="phoneNumbers[0]" className="col-sm-2 col-form-label" >Primary Number</label>
                            <div className="col-sm-10">
                                <Field  className="form-control"  name="phoneNumbers[0]" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="phoneNumbers[1]" className="col-sm-2 col-form-label" >Secondry Number</label>
                            <div className="col-sm-10">
                                <Field  className="form-control"  name="phoneNumbers[1]" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-sm-10">
                            <FieldArray name="phNumbers" >
                               {
                                   (FieldArrayProps)=>{
                                      const { form , push, remove}=FieldArrayProps;
                                      const {values} = form;
                                      const {phNumbers} = values;
                                      console.log(phNumbers);

                                       return (
                                           <>
                            <label  className="col-sm-2 col-form-label" >List of Phone Numbers</label>
                            {phNumbers.map((element,index)=>{
                                return(
                                    <>

                                <div key={index}>
                                {console.log(element)}
                                <Field name={`phNumbers[${index}]`} className="form-control" />
                                {index>0 && (
                                    <button type="button " className="btn btn-primary" onClick={()=>{remove(index)}}>{''} - {''} </button>
                                )}
                                <button type="button " className="btn btn-primary" onClick={()=>{push('')}}>{''} + {''} </button>
                               
                                </div>  
                           </>
                                )
                            })}
                            
                                        
                                           </>
                                       )

                                   }
                               }
                            </FieldArray>
                            </div>
                        </div>



                        <div className="text-center mb-3">
                            <button className="btn btn-danger" type="submit">Submit</button>
                        </div>
                    </Form>
                </div>
            </Formik>
        </>
    );
}

export default NewSimpleform;