const express = require('express')
const router = express.Router()

const city = require('../controllers/city')

router.get("/api/v1/city", city.listAllCities);
router.get("/api/v1/city/:id", city.getCityById);
router.post("/api/v1/city", city.createCity);
router.patch("/api/v1/city/:id", city.updateCityById);
router.delete("/api/v1/city/:id", city.deleteCityById);

module.exports = router;