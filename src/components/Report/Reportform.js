import React, { useState } from "react";
import './Reportform.css'

const Reportcaseform = (props) => {

  const [name, setName] = useState("");
  const [emailid, setEmailid] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [reasonofreporting, setReasonofreporting] = useState("");
  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      name,
      emailid,
      mobilenumber,
      date,
      address,
      district,
      state,
      pincode,
      reasonofreporting,

    };
    props.func(val);
    clearState();
  };

  const clearState = () => {
    setName("");
    setEmailid("");
    setMobilenumber("");
    setDate("");
    setAddress("");
    setDistrict("");
    setState("");
    setPincode("");
    setReasonofreporting("");
  };

  return (
    <form className="allreports">
    <div>
      <div className="reportform">
        <div>
          <label> Name:</label>
          <input
            className="input"
            type="text"
            placeholder="Enter Fullname"
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div>
          <label>Email ID:</label>
          <input
            className="input"
            type="email"
            placeholder="Enter email"
            onChange={(event) => setEmailid(event.target.value)}
          />
        </div>
        <div>
          <label>Mobile Number:</label>
          <input
            className="input"
            type="number"
            placeholder="number"
            onChange={(event) => setMobilenumber(event.target.value)}
          />
        </div>
      </div>
      <div className="reportform">
        <div>
          <label>Date:</label>
          <input
            className="input"
            type="date"
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            className="inputform"
            type="text"
            placeholder="H.no/Street name/Road name/area."
            onChange={(event) => setAddress(event.target.value)}
          />
        </div>
      </div>
      <div className="reportform">
        <div>
          <label> District:</label>
          <input
            className="input"
            type="text"
            placeholder="Enter District"
            onChange={(event) => setDistrict(event.target.value)}
          />
        </div>
        <div>
          <label> State:</label>
          <input
            className="input"
            type="text"
            placeholder="Enter State"
            onChange={(event) => setState(event.target.value)}
          />
        </div>
        <div>
          <label> Pincode:</label>
          <input
            className="input"
            type="number"
            placeholder="Enter Pincode"
            onChange={(event) => setPincode(event.target.value)}
          />
        </div>
      </div>
      <div className="textarea">
        <div>
          <label> Reason of Reporting:</label>
          <textarea
            rows="1"
            cols="49"
            type="text"
            onChange={(event) => setReasonofreporting(event.target.value)}
          />
        </div>
      </div>
      <div className="btn-report">
        <button className="btn-reportcase" onClick={transferValue}>
          Submit
        </button>
      </div>
    </div>
  </form>
  );
};

export default Reportcaseform;
