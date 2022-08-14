import * as yup from "yup";

export const reportSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("please enter a valid email").required("Required"),
  mobilenumber: yup.string().required("Required"),
  address: yup.string().required("Required"),
  district: yup.string().required("Required"),
  state: yup.string().required("Required"),
  pincode: yup.string().required("Required"),
  reason: yup.string().required("Required"),

});