import * as Yup from "yup";

export const FormSchema = Yup.object({
    name: Yup.string().min(5).max(15).required("Please Enter Your Name"),
    email: Yup.string().email().required("Please Enter Your Email"),
    Phone: Yup.string().min(8).max(30).required("Please Enter Your Number"),
    subject: Yup.string().min(5).max(30).required("Please Enter Your Subject"),
    message: Yup.string().min(15).max(100).required("Please Enter Your Message"),
})