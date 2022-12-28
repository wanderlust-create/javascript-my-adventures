const express = require("express");
// Routes
const city = require("./routes/city");

const router = express.Router();

router.use(city)

module.exports = router;
