const logger = require("../../utils/logger");
const userDAO = require("../daos/user");

class UserService {
  listAllUsers() {
    return userDAO.listAllUsers();
  }

  listAllUserCities() {
    return userDAO.listAllUserCities();
  }

  getUserById(id) {
    return userDAO.getUserById(id);
  }

  createUser(userDto) {
    return userDAO.createUser(userDto);
  }

  createUserCity(userCityDto) {
    return userDAO.createUserCity(userCityDto);
  }

  updateUserById(id, userDto) {
    return userDAO.updateUserById(id, userDto);
  }

  deleteUserById(id) {
    return userDAO.deleteUserById(id);
  }

  deleteUserCityById(id) {
    return userDAO.deleteUserCityById(id);
  }
}

module.exports = new UserService();
