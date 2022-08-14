import React from "react";
import { useFormik } from "formik";
import "./Donate.css";
import { donateSchema } from "./Donateschema";
import StripeCheckout from "react-stripe-checkout";

const DonateForm = () => {
  const onToken = (token) => {
    console.log(token);
  };
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      number: "",
      amount: "",
    },
    validationSchema: donateSchema,
    onSubmit: (values, actions) => {
      actions.resetForm();
    },
  });
  return (
    <div className="donate-container1">
      <div className="donate-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && touched.name && (
            <p className="error">{errors.name}</p>
          )}
          <label>Mobile-Number</label>
          <input
            type="number"
            name="number"
            id="number"
            placeholder="Enter Number"
            value={values.number}
            onChange={handleChange}
          />
          {errors.number && touched.number && (
            <p className="error">{errors.number}</p>
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
          <StripeCheckout
            token={onToken}
            stripeKey="pk_test_51LWghCSHpzC9oJoTJCtwtTbOCJ5HPoQdCdVYDg2apb05jRhBIy1vuVK5pvfjumcXX2ARRAhJDNlHbGqHkcVZB6IR00pHoNYTTS"
          />
        </form>
      </div>
    </div>
  );
};

export default DonateForm;
