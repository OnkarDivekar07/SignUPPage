const User = require("../Model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secreateKey = process.env.secreateKey;
console.log(secreateKey);

exports.SignUP = async (req, res) => {
  try {
    console.log(req.body);
    const { FirstName, LastName, Email, Password } = req.body;
    const user = await User.findOne({ where: { Email } });
    if (user) {
      return res.status(409).json({ message: "Account Already Exists" });
    } else {
      const hashPassword = await bcrypt.hash(Password, 10);
      const newuser = await User.create({
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Password: hashPassword,
      });
      console.log(secreateKey);
      const token = jwt.sign({ UserId: newuser.id }, secreateKey);
      res.cookie(token, {
        expiresIn: 3600000,
      });
      res.status(201).json({ Message: "User Account Created Sucessfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ Message: "Internal server Error" });
  }
};
