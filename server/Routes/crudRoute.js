const express = require("express");

const Employee = require("../Models/employeeModel");

const router = express.Router();

router.post("/addemployees", async (req, res) => {
  // console.log(req.body)
  const { name, SN, designation, id } = req.body;
  if (!name || !SN || !designation || !id) {
    return res.status(422).json({ error: "All fields are required." });
  }
  try {
    const existingEmployee = await Employee.findOne({ id: id });
    // console.log(existingUser)

    if (existingEmployee) {
      return res.status(422).json({ error: "Employee already exists." });
    }
    else{
    const newEmployee = new Employee({ name, SN, designation, id });

    const addEmployee = await newEmployee.save();

    if (addEmployee) {
      res
        .status(201)
        .json({ message: "Employee Added Successfully", status: 201 });
      return;
    } else {
      res.status(422).json({ error: "Could not Add", status: 422 });
      return;
    }
  }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error", status: 500 });
  }
});
router.post("/edit", async (req, res) => {
  // console.log(req.body)
  const { name, SN, designation, id } = req.body;
  if (!name || !SN || !designation || !id) {
    return res.status(422).json({ error: "All fields are required." });
  }
  try {
    const existingEmployee = await Employee.findOne({ id: id });
    // console.log(existingUser)

    if (!existingEmployee) {
      return res.status(422).json({ error: "Employee doesn't exists." });
    } else {
      existingEmployee.name = name;
      existingEmployee.designation = designation;
      existingEmployee.SN = SN;

      const updateEmployee = await existingEmployee.save();

      if (updateEmployee) {
        res
          .status(201)
          .json({ message: "Employee Updated Successfully", status: 201 });
        return;
      } else {
        res.status(422).json({ error: "Could not Add", status: 422 });
        return;
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error", status: 500 });
  }
});
router.post("/", async (req, res) => {
  // console.log(req.body)
  const { id } = req.body;

  try {
    const existingEmployee = await Employee.findOneAndDelete({ id: id });
    // console.log(existingUser)

    if (!existingEmployee) {
      return res.status(422).json({ error: "Employee doesn't exists." });
    } else {
      return res
        .status(201)
        .json({ message: "Employee Deleted Successfully", status: 201 });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Server Error - ${error}`, status: 500 });
  }
});

router.get("/", async (req, res) => {
  const employees = await Employee.find();
  // console.log(employees,"...");
  res.send(employees);
});
module.exports = router;
