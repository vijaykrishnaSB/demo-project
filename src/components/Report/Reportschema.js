import * as yup from "yup";

export const reportSchema = yup.object().shape({
  name: yup.string().required("Required name"),
  date: yup.string().required("Required date"),
  emailid: yup
    .string()
    .email("please enter a valid email")
    .required("Required Emailid"),
  // mobilenumber: yup.string().required("Required number"),
  mobilenumber: yup
    .string()
    .matches(
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
      "This is not a Phone number"
    )
    .required("Required conatct number"),
  address: yup.string().required("Required address"),
  district: yup.string().required("Required District"),
  state: yup.string().required("Required State"),
  pincode: yup.string().required("Required Pincode"),
  reasonofreporting: yup.string().required("This Feild is important"),
});
