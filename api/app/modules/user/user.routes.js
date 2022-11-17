const express = require("express");
const router = express.Router();

const UserController = require("./user.controller");

router.get("/getUsers", UserController.getUsers);

module.exports = router;
