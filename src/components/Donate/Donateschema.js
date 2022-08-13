import * as yup from "yup";

export const donateSchema = yup.object().shape({
  username: yup.string().required("Required"),
  email: yup.string().email("please enter a valid email").required("Required"),
  //   number: yup.number().positive().integer().max(10).required("Required"),
  number: yup
    .string()
    .matches(
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
      "Not a Phone number"
    )
    .required("Required"),
});
