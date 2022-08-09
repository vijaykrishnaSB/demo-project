import React from "react";
import { useFormik } from "formik";
import "./Login.css";
import { Link } from "react-router-dom";
import * as yup from "yup";
const formValidationSchema = yup.object({
  email: yup.string().required("Required Emailid"),
  password: yup.string().required("Required Password"),
});
function LoginForm() {
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        console.log("onSubmit", values);
      },
    });
  //   console.log('form values', formik.values)
  return (
    <div className="login-container1">
      <div className="Login-container">
        <h2> Sign In </h2>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email ? (
            <div className="err-msg">{errors.email}</div>
          ) : null}

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && errors.password ? (
            <div className="err-msg">{errors.password}</div>
          ) : null}

          {/* <Link to="/"> */}
          <button type="submit" className="log-button">
            Login
          </button>
          {/* </Link> */}
          <p>
            {" "}
            No account ?{" "}
            <Link to="/register">
              {" "}
              <span style={{ color: "blue" }}>Register</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
