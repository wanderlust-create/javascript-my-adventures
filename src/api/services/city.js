const logger = require("../../utils/logger");
const cityDAO = require("../daos/city");

class CityService {
  listAllCities() {
    return cityDAO.listAllCities();
  }

  getCityById(id) {
    return cityDAO.getCityById(id);
  }

  createCity(cityDto) {
    return cityDAO.createCity(cityDto);
  }

  updateCityById(id, cityDto) {
    return cityDAO.updateCityById(id, cityDto);
  }

  deleteCityById(id) {
    return cityDAO.deleteCityById(id);
  }
}
module.exports = new CityService();
