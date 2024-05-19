const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: String,
  SN: Number,
  designation: String,
  id: Number
});



const Employee = mongoose.model("EMPLOYEE", employeeSchema);

module.exports = Employee;