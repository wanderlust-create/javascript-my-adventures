const logger = require("../../utils/logger");
const User = require("../models/users");
const UserCity = require("../models/userCities");

class UserDAO {
  async listAllUsers() {
    return User.query()
      .column("id", "email", "first_name", "last_name")
      .orderBy("created_at", "desc");
  }

  async listAllUserCities() {
    return UserCity.query()
      .column("id", "city_id", "user_id")
      .orderBy("created_at", "desc");
  }

  async getUserById(id) {
    return User.query()
      .findById(id)
      .column("id", "email", "first_name", "last_name")
      .withGraphFetched("city");
  }

  async createUser(userDto) {
    const newUser = User.query().insert({
      email: userDto.email,
      firstName: userDto.first_name,
      lastName: userDto.last_name,
    });
    return newUser;
  }

  async createUserCity(userCityDto) {
    const newUserCity = await UserCity.query().insert({
      userId: userCityDto.user_id,
      cityId: userCityDto.city_id,
    });
    return newUserCity;
  }

  async updateUserById(id, userDto) {
    const updatedUser = await User.query()
      .findById(id)
      .patch({
        email: userDto.email,
        firstName: userDto.first_name,
        lastName: userDto.last_name,
      })
      .returning("email", "first_name", "last_name");
    return updatedUser;
  }

  async deleteUserById(id) {
    const deletedUser = await User.query()
      .delete()
      .where({ id })
      .returning("*");
    return deletedUser;
  }

  async deleteUserCityById(id) {
    const deletedUserCity = await UserCity.query()
      .delete()
      .where({ id })
      .returning("*");
    return deletedUserCity;
  }
}

module.exports = new UserDAO();
