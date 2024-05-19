require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");


const authRoutes = require("./Routes/authRoute");
const crudRoutes = require("./Routes/crudRoute");
const app = express();
const port = process.env.PORT || 8000;

app.use(cors({
  origin: 'http://localhost:3000',
}));

app.use(
  session({
    secret: "SIFBJKHFGUSFBUFLSF",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const User = require("./Models/userModel");
const employee = require("./Models/employeeModel");

mongoose
  .connect(
    "mongodb+srv://nisargpatil03:RJxKVOXRL0KzYv4y@gcdb0.7tml8w2.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/", authRoutes);
app.use("/home",crudRoutes)
app.get("/", (req, res) => {
  res.send("backend");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
