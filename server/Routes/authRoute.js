const express = require("express");
const bcrypt = require('bcryptjs')
const User = require("../Models/userModel");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("auth.js");
});
router.post("/register", async (req, res) => {
  // console.log(req.body)
  const { name, email, password, cpassword } = req.body;
  // console.log(' name, email, password, cpassword  =>',  name, email, password, cpassword )
  if (!name || !email || !password || !cpassword) {
    return res.status(422).json({ error: "All fields are required." });
  }
  try {
    const existingUser = await User.findOne({ email: email });
    // console.log(existingUser)

    if (existingUser) {
      return res.status(422).json({ error: "Email already exists." });
    }
    if(password===cpassword){

        const newUser = new User({ name, email, password, cpassword });
        
        const userRegister = await newUser.save();
        
        if (userRegister) {
            res.status(201).json({ message: "User Registered Successfully" });
            return;
        } else {
            res.status(422).json({ error: "Failed to register" });
            return;
        }
    }
    else{
        res.status(422).json({ error: "Enter the same password in both the fields!" });
            return;
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email,password)
  if (!email || !password) {
    return res.status(422).json({ error: "All fields are required." });
  }
  try {
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
        const isMatch = await bcrypt.compare(password,userLogin.password)
        if(isMatch){
            // console.log(userLogin.name)
            return res.status(200).json({message:`Welcome ${userLogin.name}`,status:200})
        }
        else{
            return res.status(422).json({error:`Incorrect Credentials`,status:422})

        }
    }
    else{
        return res.status(422).json({error:`Invalid Credentials`,status:422})

    }
  } catch (err) {
    console.error(error);
    res.status(500).json({ message: "Server Error" ,status:500});
  }
});
// router.post('/', passport.authenticate('local'), (req, res) => {
//     res.status(200).json({ message: 'Login successful.', user: req.user.username });
// });

module.exports = router;
