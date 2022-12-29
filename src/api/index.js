const express = require("express");
// Routes
const city = require("./routes/city");
const event = require("./routes/event");
const user = require("./routes/user");

const router = express.Router();

router.use(city);
router.use(event);
router.use(user);

module.exports = router;
