// import { TouchAppRounded } from "@mui/icons-material";
import { useFormik } from "formik";
import React from "react";
import "./Register.css";
import { basicSchema } from "./schema";

const RegisterForm = () => {
  const getuser = (values) => {
    fetch("http://localhost:4000/users/signup", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then((response) => {
        alert(response.message);
      });
  };
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit: (values, actions) => {
      if (values.password === values.confirmPassword) {
        alert("Registration Successfull");
      }
      getuser(values);
      actions.resetForm();
    },
  });
  return (
    <div className="reg-container1">
      <div className="reg-container">
        <h3>Enter Details</h3>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>UserName</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && touched.username && (
            <p className="error">{errors.username}</p>
          )}
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && touched.email && (
            <p className="error">{errors.email}</p>
          )}

          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && touched.password && (
            <p className="error">{errors.password}</p>
          )}

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm password"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}

          <button type="submit" className="reg-button">
            Register{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
