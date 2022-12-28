const logger = require("../../utils/logger");
const cityService = require("../services/city");

class CityController {
  async listAllCities(req, res, next) {
    try {
      const citys = await cityService.listAllCities();
      if (!citys) {
        res.sendStatus(404);
        return;
      } else {
        res.json(citys);
      }
    } catch (err) {
      logger.error(err);
      res.status(500).json(err);
    }
  }
  async getCityById(req, res, next) {
    try {
      const city = await cityService.getCityById(req.params.id);
      if (!city) {
        res.sendStatus(404);
        return;
      } else {
        res.json(city);
      }
    } catch (err) {
      logger.error(err);
      res.status(500).json(err);
    }
  }
  async createCity(req, res, next) {
    try {
      const city = await cityService.createCity(req.body);
      logger.info("Controller", city);
      res.json(city);
    } catch (err) {
      logger.error(err);
      res.status(500).json(err);
    }
  }

  async updateCityById(req, res, next) {
    try {
      const id = req.params.id;
      const city = await cityService.updateCityById(id, req.body);
      if (!city) {
        res.sendStatus(404);
        return;
      } else {
        res.json(city);
      }
    } catch (err) {
      logger.error(err);
      res.status(500).json(err);
    }
  }

  async deleteCityById(req, res, next) {
    try {
      const id = req.params.id;
      const deletedCity = await cityService.deleteCityById(id);
      if (deletedCity.length === 0) {
        res.sendStatus(404);
        return;
      } else {
        logger.info("City Deleted:", deletedCity);
        res.json({ alert: "City Deleted", deletedCity });
      }
    } catch (err) {
      logger.error(err);
      res.status(500).json(err);
    }
  }
}
module.exports = new CityController();
