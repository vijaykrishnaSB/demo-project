import * as yup from "yup";

export const reportSchema = yup.object().shape({
  name: yup.string().required("Required name"),
  date: yup.string().required("Required date"),
  email: yup.string().email("please enter a valid email").required("Required email"),
  mobilenumber: yup.string().required("Required number"),
  address: yup.string().required("Required address"),
  district: yup.string().required("Required district"),
  state: yup.string().required("Required state"),
  pincode: yup.string().required("Required pincode"),
  reason: yup.string().required("This Feild is important"),

});