const express = require("express");
const router = express.Router();

// City Controller
const city = require("../controllers/city");

// Error Handler
const validateDto = require("../reqBodyValidation/middlewear/validate-dto");
const cityDto = require("../reqBodyValidation/dtos/city");

router.get("/api/v1/city", city.listAllCities);
router.get("/api/v1/city/:id", city.getCityById);
router.post("/api/v1/city", validateDto(cityDto), city.createCity);
router.patch("/api/v1/city/:id", validateDto(cityDto), city.updateCityById);
router.delete("/api/v1/city/:id", city.deleteCityById);

module.exports = router;
