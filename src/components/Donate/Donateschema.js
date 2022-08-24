import * as yup from "yup";

export const donateSchema = yup.object().shape({
  name: yup.string().required("Required"),
  number: yup
    .string()
    .matches(
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
      "Not a Phone number"
    )
    .required("Required"),
});
