const express = require("express");
// Routes
const city = require("./routes/city");
const event = require("./routes/event");

const router = express.Router();

router.use(city)
router.use(event)

module.exports = router;
