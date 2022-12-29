const logger = require("../../utils/logger");
const userService = require("../services/user");

class UserController {
  async listAllUsers(req, res, next) {
    try {
      const users = await userService.listAllUsers();
      if (!users) {
        res.sendStatus(404);
        return;
      } else {
        res.json(users);
      }
    } catch (err) {
      logger.error(err);
      res.status(500).json(err);
    }
  }
  async getUserById(req, res, next) {
    try {
      const userData = await userService.getUserById(req.params.id);
      if (!userData) {
        res.sendStatus(404);
        return;
      } else {
        res.json(userData);
      }
    } catch (err) {
      logger.error(err);
      res.status(500).json(err);
    }
  }
  async createUser(req, res, next) {
    try {
      const userData = await userService.createUser(req.body);
      res.json(userData);
    } catch (err) {
      logger.error(err);
      res.status(500).json(err);
    }
  }
  async updateUserById(req, res, next) {
    try {
      const id = req.params.id;
      const userData = await userService.updateUserById(id, req.body);
      if (!userData) {
        res.sendStatus(404);
        return;
      } else {
        res.json(userData);
      }
    } catch (err) {
      logger.error(err);
      res.status(500).json(err);
    }
  }
  async deleteUserById(req, res, next) {
    try {
      const id = req.params.id;
      const deletedUser = await userService.deleteUserById(id);
      if (deletedUser.length === 0) {
        res.sendStatus(404);
        return;
      } else {
        logger.info("User deleted:", deletedUser);
        res.json({ alert: "User Deleted", deletedUser });
      }
    } catch (err) {
      logger.error(err);
      res.status(500).json(err);
    }
  }

  /* User-City Routes */
  async listAllUserCities(req, res, next) {
    try {
      const userCities = await userService.listAllUserCities();
      if (!userCities) {
        res.sendStatus(404);
        return;
      } else {
        res.json(userCities);
      }
    } catch (err) {
      logger.error(err);
      res.status(500).json(err);
    }
  }

  async createUserCity(req, res, next) {
    try {
      const userCity = await userService.createUserCity(req.body);
      res.json(userCity);
    } catch (err) {
      logger.error(err);
      res.status(500).json(err);
    }
  }
  async deleteUserCityById(req, res, next) {
    try {
      const id = req.params.id;
      const deletedUserCity = await userService.deleteUserCityById(id);
      if (deletedUserCity.length === 0) {
        res.sendStatus(404);
        return;
      } else {
        logger.info("User-City deleted:", deletedUserCity);
        res.json({ alert: "User-City Deleted", deletedUserCity });
      }
    } catch (err) {
      logger.error(err);
      res.status(500).json(err);
    }
  }
}

module.exports = new UserController();
