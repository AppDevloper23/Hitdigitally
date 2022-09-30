import React from 'react';
import { useFormik } from 'formik';
import { FormSchema } from './schema';
// import axios from 'axios';

const initialValues = {
    name: "",
    email: "",
    Phone: "",
    subject: "",
    message: "",

}

const Form = () => {

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: FormSchema,
        onSubmit: (values, action) => {
            console.log(" ~ file: Form.jsx ~ line 11 ~ Form ~ values", values);
            action.resetForm();

            //success message
            document.getElementById('form-messege').innerHTML = '<div class="alert alert-success" style="margin-top:20px;"><strong>Success!</strong> You have successfully submitted the form.</div>';

            // axios.post(`/contact_submit`, { values })
            //     .then(res => {
            //         console.log(res);
            //         console.log(res.data);
            //     })
        },

    });

    return (
        <>
            <form id="contact-form1" onSubmit={handleSubmit} className="default-form" method='POST' >
                <div className="row">
                    <div className="col-lg-6 mb-20">
                        <div className="default-form-single-item">
                            <input name="name" id="name"
                                type="text"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Name" />

                            {errors.name && touched.name ? (<p className='form-error'> {errors.name} </p>) : null}
                        </div>
                    </div>
                    <div className="col-lg-6 mb-20">
                        <div className="default-form-single-item">
                            <input name="email" id="email"
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur} placeholder="Email" />

                            {errors.email && touched.email ? (<p className='form-error'> {errors.email} </p>) : null}
                        </div>
                    </div>
                    <div className="col-lg-6 mb-20">
                        <div className="default-form-single-item">
                            <input name="Phone" id="Phone"
                                type="tel" value={values.Phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Phone No." />

                            {errors.Phone && touched.Phone ? (<p className='form-error'> {errors.Phone} </p>) : null}
                        </div>
                    </div>
                    <div className="col-lg-6 mb-20">
                        <div className="default-form-single-item">
                            <input name="subject" id="subject"
                                type="text"
                                value={values.subject}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Subject" />

                            {errors.subject && touched.subject ? (<p className='form-error'> {errors.subject} </p>) : null}
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="default-form-single-item">
                            <textarea name="message" id='message'
                                value={values.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Write a message..."
                                rows="10"></textarea>

                            {errors.message && touched.message ? (<p className='form-error'> {errors.message} </p>) : null}
                        </div>
                    </div>
                    <div className="col-lg-12 text-center">
                        <button type="submit"
                            className="btn btn-lg btn-default icon-right submit-btn">
                            Submit Now <i className="icofont-double-right"></i></button>
                    </div>
                    <p id="form-messege"></p>
                </div>
            </form>
        </>
    )
}

export default Form;
