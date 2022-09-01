import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  name: yup.string().required("This Field is Required"),
  email: yup
    .string()
    .email("please enter a valid email")
    .required("This Field is Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a strong password" })
    .required("This Field is Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("This Field is Required"),
});
