const express = require("express");
const { addUser, getAllUsers } = require("../Controllers/userController");

const router = express.Router();

router.post("/", addUser);
router.get("/", getAllUsers);

module.exports = router;
