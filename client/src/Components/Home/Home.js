import React, { Fragment, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import EmployeeList from "./EmployeeList";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import CustomizedAlert from "../CustomizedAlert/CustomizedAlert";

export default function Home() {
  return <>
  <h1 className="poetsen-one-regular">Employee List</h1>
  <Link to={'/home/addemployees'}>
  <Button variant="outlined" color="secondary" startIcon={<ControlPointIcon />}> Add Employee</Button>
  </Link>
  <EmployeeList/>
  </>;
};
