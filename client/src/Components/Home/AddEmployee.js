import React, { Fragment, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Box, TextField, Button } from "@mui/material";

export default function Addemployee() {
  const { employees, addEmployee } = useContext(GlobalContext);
  let navigate = useNavigate();


  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const SN = data.get("SN");
    const designation = data.get("designation");
    const id = employees.length + Math.floor(Math.random()*10000);
    const newEmployee = {
      name,
      SN,
      designation,
      id,
    };
    console.log(newEmployee);
    addEmployee(newEmployee);
    // handle_add(employees);
    navigate("/home");
  };
  return (
    <>
      <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="SN"
          label="Employee Serial Number"
          name="SN"
          autoComplete="SN"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="designation"
          label="Designation"
          type="designation"
          id="designation"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
}
