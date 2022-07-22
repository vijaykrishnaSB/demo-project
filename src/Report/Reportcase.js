import React from "react";
import "./Reportcase.css";
import Reportcrud from "../Report/Reportcrud";

function Reportcase (){
  return (
    <div>
      <form>
        <div className="reportform">
          <div>
            <label> Name:</label>
            <input
              className="input"
              type="text"
              placeholder="Enter Fullname"
            ></input>
          </div>
          <div>
            <label>Email ID:</label>
            <input
              className="input"
              type="email"
              placeholder="Enter email"
            ></input>
          </div>
          <div>
            <label>Mobile Number:</label>
            <input className="input" type="number" placeholder="number"></input>
          </div>
        </div>
        <div className="reportform">
          <div>
            <label>Date:</label>
            <input className="input" type="date"></input>
          </div>
          <div>
            <label>Address:</label>
            <input
              className="inputform"
              type="text"
              placeholder="H.no/Street name/Road name/area."
            ></input>
          </div>
        </div>
        <div className="reportstate">
          <div>
            <label> District:</label>
            <input
              className="input"
              type="text"
              placeholder="Enter District"
            ></input>
          </div>
          <div>
            <label> State:</label>
            <input
              className="input"
              type="text"
              placeholder="Enter State"
            ></input>
          </div>
          <div>
            <label> Pincode:</label>
            <input
              className="input"
              type="text"
              placeholder="Enter Pincode"
            ></input>
          </div>
        </div>
        <div className="textarea">
          <div>
            <label> Reason of Reporting:</label>
            <textarea rows="1" cols="49" type="text" />
          </div>
        </div>
        <div className="btn-report"><button className="btn-reportcase">Submit</button></div>
      </form>
        <Reportcrud />
    </div>
  );
};

export default Reportcase;
