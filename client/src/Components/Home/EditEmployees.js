import React, { Fragment, useState, useContext, useEffect } from "react";
import { Box, TextField, Button } from "@mui/material";
import { GlobalContext } from "../context/GlobalState";
import { useNavigate, Link, useParams } from "react-router-dom";

export default function Editemployee(route) {
  let navigate = useNavigate();
  const { employees, editEmployee } = useContext(GlobalContext);
  const [selectedUser, setSeletedUser] = useState({
    id: null,
    name: "",
    SN: "",
    designation: "",
  });
  let { id } = useParams();

  useEffect(() => {
    const employeeId = id;
    const selectedUser = employees.find(
      (emp) => emp.id === parseInt(employeeId)
    );
    setSeletedUser(selectedUser);
    // eslint-disable-next-line
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    editEmployee(selectedUser);
    navigate("/home");
  };

  const handleOnChange = (userKey, value) =>
    setSeletedUser({ ...selectedUser, [userKey]: value });

  if (!selectedUser || !selectedUser.id) {
    return <div>sdf</div>;
  }

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
          value={selectedUser.name}
          onChange={(e) => handleOnChange("name", e.target.value)}
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
          value={selectedUser.SN}
          onChange={(e) => handleOnChange("SN", e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="designation"
          label="Designation"
          type="designation"
          id="designation"
          value={selectedUser.designation}
          onChange={(e) => handleOnChange("designation", e.target.value)}
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
