import React from "react";
import "./Reportcrud.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";


function Reportcrud({ reportcrudform }) {

  return (
    <TableContainer className="reportcrudform">
      <Table sx={{ minWidth: 1300 }} aria-label="simple table">
        <TableHead>
          <TableRow className="demorow">
            <TableCell>name</TableCell>
            <TableCell align="center">emailid</TableCell>
            <TableCell align="center">mobilenumber</TableCell>
            <TableCell align="center">date</TableCell>
            <TableCell align="center">address</TableCell>
            <TableCell align="center">district</TableCell>
            <TableCell align="center">state</TableCell>
            <TableCell align="center">pincode</TableCell>
            <TableCell align="center">reasonofreporting</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {.map((reportcrudform) => (
            <TableRow
              key={reportcrudform.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            > */}
              <TableCell component="th" scope="row">
                {reportcrudform.name}
              </TableCell>
              <TableCell align="center">{reportcrudform.emailid}</TableCell>
              <TableCell align="center">{reportcrudform.mobilenumber}</TableCell>
              <TableCell align="center">{reportcrudform.date}</TableCell>
              <TableCell align="center">{reportcrudform.address}</TableCell>
              <TableCell align="center">{reportcrudform.district}</TableCell>
              <TableCell align="center">{reportcrudform.state}</TableCell>
              <TableCell align="center">{reportcrudform.pincode}</TableCell>
              <TableCell align="center">
                {reportcrudform.reasonofreporting}
              </TableCell>
            {/* </TableRow> */}
           {/* ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



export default Reportcrud


















// function Reportcrud({ reportcrudform }) {
//   return (
//     <div className="reportcrudform">
//       <h5 className="reportcrud-name">{reportcrudform.name}</h5>
//       <div>
//         <h5  className="reportcrud-emailid" label="emailid">
//           {reportcrudform.emailid}
//         </h5>
//         <h5  className="reportcrud-mobilenumber">
//           {reportcrudform.mobilenumber}
//         </h5>
//         <h5  className="reportcrud-pincode">
//           {reportcrudform.pincode}
//         </h5>
//         <h5  className="reportcrud-date">
//           {reportcrudform.date}
//         </h5>
//         <h5  className="reportcrud-address">
//           {reportcrudform.address}
//         </h5>
//         <h5  className="reportcrud-district">
//           {reportcrudform.district}
//         </h5>
//         <h5  className="reportcrud-state">
//           {reportcrudform.state}
//         </h5>
//         <p  className="reportcrud-reasonofreporting">
//           {reportcrudform.reasonofreporting}
//         </p>
//       </div>
//     </div>
//   );
// }
// export default Reportcrud;