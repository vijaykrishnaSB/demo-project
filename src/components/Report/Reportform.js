import React from "react";
import { useFormik } from "formik";
import "./Reportform.css";
import { reportSchema } from "./Reportschema";

const Reportcaseform = () => {
  const getuser = (values) => {
    console.log(values);
    fetch("https://trust-t9wk.onrender.com/reports/report", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then((response) => {
        alert("Reported successfully");
      });
  };
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      emailid: "",
      mobilenumber: "",
      date: "",
      address: "",
      district: "",
      state: "",
      pincode: "",
      reasonofreporting: "",
    },
    validationSchema: reportSchema,
    onSubmit: (values, actions) => {
      getuser(values);
      actions.resetForm();
    },
  });

  return (
    <form onSubmit={handleSubmit} className="allreports">
      <div>
        <h3>Report a case here who needs Help, Care & Protection</h3>
        <div className="reportform">
          <div>
            <input
              className="input"
              name="name"
              type="text"
              placeholder="Enter Name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && touched.name && (
              <p className="error">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              className="input"
              name="emailid"
              type="email"
              placeholder="Enter email"
              value={values.emailid}
              onChange={handleChange}
            />
            {errors.emailid && touched.emailid && (
              <p className="error">{errors.emailid}</p>
            )}
          </div>
          <div>
            <input
              className="input"
              name="mobilenumber"
              type="number"
              placeholder="Contact number"
              value={values.mobilenumber}
              onChange={handleChange}
            />
            {errors.mobilenumber && touched.mobilenumber && (
              <p className="error">{errors.mobilenumber}</p>
            )}
          </div>
        </div>
        <div className="reportform">
          <div>
            <input
              className="input"
              name="date"
              type="date"
              value={values.data}
              onChange={handleChange}
            />
            {errors.date && touched.date && (
              <p className="error">{errors.date}</p>
            )}
          </div>
          <div>
            <input
              className="inputform"
              name="address"
              type="text"
              placeholder="H.no/Street name/Road name/area."
              value={values.address}
              onChange={handleChange}
            />
            {errors.address && touched.address && (
              <p className="error">{errors.address}</p>
            )}
          </div>
        </div>
        <div className="reportform">
          <div>
            <input
              className="input"
              name="district"
              type="text"
              placeholder="Enter District"
              value={values.district}
              onChange={handleChange}
            />
            {errors.district && touched.district && (
              <p className="error">{errors.district}</p>
            )}
          </div>
          <div>
            <input
              className="input"
              name="state"
              type="text"
              placeholder="Enter State"
              value={values.state}
              onChange={handleChange}
            />
            {errors.state && touched.state && (
              <p className="error">{errors.state}</p>
            )}
          </div>
          <div>
            <input
              className="input"
              name="pincode"
              type="number"
              placeholder="Enter Pincode"
              value={values.pincode}
              onChange={handleChange}
            />
            {errors.pincode && touched.pincode && (
              <p className="error">{errors.pincode}</p>
            )}
          </div>
        </div>
        <div className="textarea">
          <div>
            <textarea
              rows="1"
              cols="49"
              type="text"
              name="reasonofreporting"
              placeholder="Enter the details of the problem"
              value={values.reasonofreporting}
              onChange={handleChange}
            />
            {errors.reasonofreporting && touched.reasonofreporting && (
              <p className="error">{errors.reasonofreporting}</p>
            )}
          </div>
        </div>
        <div className="btn-report">
          <button className="btn-reportcase" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Reportcaseform;
