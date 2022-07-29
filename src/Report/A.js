import React, { useEffect, useState } from "react";
import "./Reportcase.css";
import Reportcrud from "./B";

function Reportcase() {
  const [reportcrudList, setReportcrudList] = useState([]);
  
  const [name, setName] = useState("");
  const [emailid, setEmailid] = useState("");
  const [mobilenumber, setMobilenumber] = useState(""); 
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [reasonofreporting, setReasonofreporting] = useState("");
  const addReport = () => {
    const newReportList = {
      name: name,
      emailid: emailid,
      mobilenumber: mobilenumber,
      date: date,
      address: address,
      district: district,
      state: state,
      pincode: pincode,
      reasonofreporting: reasonofreporting,
    };
    setReportcrudList([...reportcrudList, newReportList]);
    console.log(newReportList);
  };
  
    useEffect(() => {
      fetch("https://62e175f2e8ad6b66d84a2449.mockapi.io/reportlist",{
        method:"GET",
      })
        .then((data) => data.json())
        .then((rps) => setReportcrudList(rps));
    }, []);
  return (
    <div className="allreports">
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
          <button className="btn-reportcase" onClick={addReport}>
            Submit
          </button>
        </div>
      </div>
      <div className="reportcrudformlist">
        {reportcrudList.map((rp, index) => (
          <Reportcrud key={index} id={index} reportcrudform={rp} />
        ))}
      </div>
    </div>
  );
}
export default Reportcase;
