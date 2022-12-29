const logger = require("../../utils/logger");
const City = require("../models/cities");
class CityDAO {
  async listAllCities() {
    return City.query()
      .column("id", "name", "country")
      .orderBy("created_at", "desc")
  }

  async getCityById(id) {
    return City.query()
      .findById(id)
      .column("id", "name", "country")
      .withGraphFetched("events");
  }

  async createCity(cityDto) {
    const newCity = await City.query().insert({
      name: cityDto.name,
      country: cityDto.country,
    });
    return newCity;
  }

  async updateCityById(id, cityDto) {
    const updatedCity = await City.query()
      .findById(id)
      .patch({
        name: cityDto.name,
        country: cityDto.country,
      })
      .returning("id", "name", "country");
    return updatedCity;
  }

  async deleteCityById(id) {
    const deletedCity = await City.query()
      .delete()
      .where({ id })
      .returning("*");
    return deletedCity;
  }
}

module.exports = new CityDAO();
