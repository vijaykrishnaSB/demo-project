import React, { useState, useEffect } from "react";
import Reportcaseform from "./Reportform";
import "./Reportcase.css";

const Reportcase = () => {
  const [tabdata, setTabdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/reports")
      .then((response) => response.json())
      .then((json) => setTabdata(json));
  }, []);

  const tableRows = tabdata.map((info) => {
    return (
      <tr>
        <td>{info.name}</td>
        <td>{info.emailid}</td>
        <td>{info.mobilenumber}</td>
        <td>{info.date}</td>
        <td>{info.address}</td>
        <td>{info.district}</td>
        <td>{info.state}</td>
        <td>{info.pincode}</td>
        <td>{info.reasonofreporting}</td>
      </tr>
    );
  });

  const addRows = (data) => {
    const totalReportlist = tabdata.length;
    data.id = totalReportlist + 1;
    const updatedReportlistData = [...tabdata];
    updatedReportlistData.push(data);
    setTabdata(updatedReportlistData);
  };

  return (
    <div>
      <Reportcaseform func={addRows} /> <br />
      <table id="table-data">
        <tr>
          <th>Name</th>
          <th>Emailid</th>
          <th>Mobile number</th>
          <th>Date of Reporting</th>
          <th>Address</th>
          <th>District</th>
          <th>State</th>
          <th>Pincode</th>
          <th>Reason of reporting</th>
        </tr>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};
export default Reportcase;
