const express = require("express");
const router = express.Router();
const controller = require("../Controller/User");

router.post("/signup", controller.SignUP);
router.post("/Login", controller.Login);

module.exports = router;
