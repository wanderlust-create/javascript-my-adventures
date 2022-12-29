const logger = require("../../utils/logger");
const userDAO = require("../daos/user");

class UserService {
  listAllUsers() {
    return userDAO.listAllUsers();
  }
  getUserById(id) {
    return userDAO.getUserById(id);
  }
  createUser(userDto) {
    return userDAO.createUser(userDto);
  }
  updateUserById(id, userDto) {
    return userDAO.updateUserById(id, userDto);
  }
  deleteUserById(id) {
    return userDAO.deleteUserById(id);
  }
  /* User-City Routes */
  listAllUserCities() {
    return userDAO.listAllUserCities();
  }
  createUserCity(userCityDto) {
    return userDAO.createUserCity(userCityDto);
  }
  deleteUserCityById(id) {
    return userDAO.deleteUserCityById(id);
  }
}

module.exports = new UserService();
