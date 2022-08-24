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
          <label>Select Amount </label><br/>
          <select className="select-amount">
            <option></option>
            <option>500</option>
            <option>1000</option>
            <option>1500</option>
            <option>2000</option>
            <option>3000</option>
            <option>5000</option>
          </select><br/><br/>
          <StripeCheckout
            token={onToken}
            amount="100000"
            currency="INR"
            stripeKey="pk_test_51LWghCSHpzC9oJoTJCtwtTbOCJ5HPoQdCdVYDg2apb05jRhBIy1vuVK5pvfjumcXX2ARRAhJDNlHbGqHkcVZB6IR00pHoNYTTS"
          />
        </form>
      </div>
    </div>
  );
};

export default DonateForm;
