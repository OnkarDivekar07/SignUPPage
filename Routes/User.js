const express = require("express");
const router = express.Router();
const controller = require("../Controller/User");

router.use("/signup", controller.SignUP);

module.exports = router;
