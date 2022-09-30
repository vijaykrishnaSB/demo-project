import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import "./Volunteer.css";
import { useNavigate, useParams } from "react-router-dom";

const Volunteerfrom = () => {
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    fetchdata();
  }, []);
  let fetchdata = async () => {
    let a = await axios.get(
      `https://vijay-trustproject.herokuapp.com/volunteer/posting/${params.id}`,
      {}
    );
    formik.setValues(a.data);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      city: "",
      state: "",
      pincode: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "please enter the name";
      }
      if (!values.email) {
        errors.email = "please enter the email";
      }
      if (!values.number) {
        errors.number = "please enter the number";
      }
      if (!values.city) {
        errors.city = "please enter the city";
      }
      if (!values.state) {
        errors.state = "please enter the state";
      }
      if (!values.pincode) {
        errors.pincode = "please enter the pincode";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        delete values._id;
        await axios.put(
          `https://vijay-trustproject.herokuapp.com/volunteer/posting/${params.id}`,
          values,
          {}
        );
        navigate("/Volunteertable");
      } catch (error) {}
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      autoComplete="off"
      className="allvolunteer"
    >
      <div>
        <h3>You can update your details here</h3>
        <div className="volunteerform">
          <div>
            <input
              className="input"
              name="name"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name ? <span>{formik.errors.name}</span> : null}
          </div>

          <div>
            <input
              className="input"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email ? <span>{formik.errors.email}</span> : null}
          </div>
          <div>
            <input
              className="input"
              name="number"
              type="number"
              value={formik.values.number}
              onChange={formik.handleChange}
            />
            {formik.errors.number ? <span>{formik.errors.number}</span> : null}
          </div>
        </div>
        <div className="volunteerform">
          <div>
            <input
              className="input"
              name="city"
              type="text"
              value={formik.values.city}
              onChange={formik.handleChange}
            />
            {formik.errors.city ? <span>{formik.errors.city}</span> : null}
          </div>
          <div>
            <input
              className="input"
              name="state"
              type="text"
              value={formik.values.state}
              onChange={formik.handleChange}
            />
            {formik.errors.state ? <span>{formik.errors.state}</span> : null}
          </div>
          <div>
            <input
              className="input"
              name="pincode"
              type="number"
              value={formik.values.pincode}
              onChange={formik.handleChange}
            />
            {formik.errors.pincode ? (
              <span>{formik.errors.pincode}</span>
            ) : null}
          </div>
        </div>
        <div className="btn-volunteer">
          <button
            className="btn-volunteerform"
            type="submit"
            valur="submit"
            disabled={!formik.isValid}
          >
            Update
          </button>
        </div>
      </div>
    </form>
  );
};

export default Volunteerfrom;
