const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  cpassword: String,
});

// userSchema.plugin(passportLocalMongoose);

userSchema.pre("save", async function (next) {
    console.log('...')
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.password, 12);
        
    }
    next();
});

const User = mongoose.model("USER", userSchema);

module.exports = User;