import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table1.css";

function createData(Branch, Studentsreg,studentattended, totaloffers,averagesalary,mediansalary,totalselected,highestsalary,placementperc) {
  return { Branch, Studentsreg,studentattended, totaloffers,averagesalary,mediansalary,totalselected,highestsalary,placementperc };
}

const rows202221 = [
 
  createData("CSE", 105, 102,153,"17.76 LPA","16.2 LPA",100,"61.5 LPA","98.04%"),
  createData("ECE", 65, 62,80,"10.67 LPA","8.5 LPA",56,"32 LPA","90.32%"),
  createData("OVERALL", 170,164,233,"15.34 LPA","14 LPA",156,"61.5 LPA","95.12%"),
 
 
];
const rows202120 = [
 
  createData("CSE", 40,"" ,47,"11.59 LPA","10.2 LPA",35,"32 LPA","87.5%"),
  createData("ECE", 21, "",16,"6.48 LPA","6.26 LPA",14,"9 LPA","66.67%"),
  createData("OVERALL", 61,"",63,"10.13 LPA","9 LPA",49,"32 LPA","80.33%"),
 
 
];
const rows202019 = [
 
  createData("CSE", 25,"" ,30,"11.59 LPA","6.5 LPA",22,"17 LPA","88.0%"),
  createData("ECE", 20, "",16,"8.1 LPA","5.0 LPA",12,"12 LPA","60.0%"),
  createData("OVERALL", 45,"",46,"10.2 LPA","5.5 LPA",34,"17 LPA","76.00%"),
 
 
];
const rows201918 = [
 
  createData("CSE", 32,"" ,49,"12.75 LPA","6.5 LPA",25,"21(D) 56(I) LPA","83.0%"),
  createData("ECE", 27, "",11,"5.19 LPA","4.0 LPA",10,"7(D) LPA","37.0%"),
  createData("OVERALL", 59,"",60,"10.1 LPA","6.0 LPA",35,"56(I) LPA","60.00%"),
 
 
];
const rows201817 = [
 
  createData("CSE", 32,"" ,30,"6.7 LPA","",22,"","78.1%"),
  createData("ECE", 26, "",13,"6.56 LPA","",11,"","65.4%"),
  createData("OVERALL", 58,"",43,"6.68 LPA","",33,"","72.4%"),
 
 
];
const rows201716 = [

  createData("CSE", "", "", "", "", "", "", "", ""),
  createData("ECE", "", "", "", "", "", "", "", ""),
  createData("OVERALL", 54, "", "", "5.64 LPA", "", 30, "", "62.50%"),


];


const makeStyle=(Branch)=>{
  if(Branch === 'CSE')
  {
    return {
      background:'#DD0004',
     color:'white'
    }
  }
  else if(Branch === 'ECE')
  {
    return{
      background:'#1e90ff',
      color:'white',
    }
  }
  else{
    return{
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
}

export default function BasicTable() {
  return (
      <div className="Table">
      <h3>Deatiled Report </h3>
        <TableContainer
        component={Paper} className="tableradius"
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Branch</TableCell>
                <TableCell align="left">Students Registered</TableCell>
                <TableCell align="left">Students Attended</TableCell>
                <TableCell align="left">Total Offers</TableCell>
                <TableCell align="left">Average Salary</TableCell>
                <TableCell align="left">Median Salary</TableCell>
                <TableCell align="left">Total Selected</TableCell>
                <TableCell align="left">Highest Salary</TableCell>
                <TableCell align="left">Placement Percentage</TableCell>
                
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
          <TableBody  style={{ color: "white" }}>
         
              {rows202221.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <span className="status" style={makeStyle(row.Branch)}>{row.Branch}</span> </TableCell>

                    
                 
                  <TableCell align="left">{row.Studentsreg}</TableCell>
                  <TableCell align="left">{row.studentattended}</TableCell>
                  <TableCell align="left">{row.totaloffers} </TableCell>
                 
                  <TableCell align="left">{row.averagesalary}</TableCell>
                  <TableCell align="left">{row.mediansalary}</TableCell>
                  <TableCell align="left">{row.totalselected}</TableCell>
                  <TableCell align="left">{row.highestsalary}</TableCell>
                  <TableCell align="left">{row.placementperc}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
