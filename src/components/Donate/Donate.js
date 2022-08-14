import React from "react";
import { useFormik } from "formik";
import "./Donate.css";
import { donateSchema } from "./Donateschema";

const DonateForm = () => {

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      email: "",
      amount: "",
    },
    validationSchema: donateSchema,
    onSubmit: (values, actions) => {
      actions.resetForm();
    },
  });
  return (
    <div className="reg-container1">
      <div className="reg-container">
        {/* <h3>Enter Details</h3> */}
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
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount"
            value={values.amount}
            onChange={handleChange}
          />
          {errors.amount && touched.amount && (
            <p className="error">{errors.amount}</p>
          )}

          <button type="submit" className="reg-button">
            Process to Pay{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonateForm;
