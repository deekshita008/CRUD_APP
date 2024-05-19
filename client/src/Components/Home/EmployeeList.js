import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
// import { Alert, Button } from "@mui/material";


export default function EmployeeList() {
  const { employees, removeEmployee, editEmployee } = useContext(GlobalContext);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Designation</TableCell>
              <TableCell align="center">Serial Number</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.designation}</TableCell>
                <TableCell align="center">{row.SN}</TableCell>
                <TableCell align="center">
                  <Fab size="small" aria-label="add">
                    <Link to={`/home/edit/${row.id}`}>
                      <IconButton color="primary">
                        <EditIcon />
                      </IconButton>
                    </Link>
                  </Fab>
                </TableCell>
                <TableCell align="center">
                  <Fab size="small" aria-label="add">
                    {/* <Link to={`/home/remove/${row.id}`}> */}
                    <IconButton color="primary" onClick={()=>{
                      removeEmployee(row.id)
                    }}>
                      <DeleteIcon />
                    </IconButton>
                    {/* </Link> */}
                  </Fab>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
