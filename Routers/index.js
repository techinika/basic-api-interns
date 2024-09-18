const express = require("express");
const welcome = require("../Controllers/welcome");
const greet = require("../Controllers/greet");
const userRouter = require("./users");

const router = express.Router();

router.use("/users", userRouter);
router.get("/", welcome);

router.post("/", greet);

module.exports = router;
