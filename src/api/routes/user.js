const express = require("express");
const router = express.Router();

// User Controller
const user = require("../controllers/user");

// Error Handlers
const validateDto = require("../reqBodyValidation/middlewear/validate-dto");
const userDto = require("../reqBodyValidation/dtos/user");
const userCityDto = require("../reqBodyValidation/dtos/userCity");

// User CRUD routes

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - id
 *         - email
 *         - first_name
 *         - last_name
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the user
 *         email:
 *           type: string
 *           description: The user's email
 *         first_name: 
 *           type: string
 *           description: the user's first name
 *         last_name: 
 *           type: string
 *           description: the user's last name
 *         city: 
 *           type: array
 *           description: cities the user has visited
 *       example:
 *         id: 2
 *         first_name: Sinead
 *         last_name: Seto
 *         email: Sinead@email.com
 *         city: [{
            name: Delhi,
            country: India
        }]
 *     UserCity:
 *       type: object
 *       required:
 *         - id
 *         - user_id
 *         - city_id
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the user_city
 *         user_id:
 *           type: number
 *           description: The user id to add to the joins table
 *         city_id: 
 *           type: number
 *           description: The city id to add to the joins table
 *       example:
 *         id: 16
 *         user_id: 1
 *         city_id: 12
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: My Adventure Users
 */

/**
 * @swagger
 * tags:
 *   name: User-City
 *   description: My Adventure User Citys
 */

/**
 * @swagger
 * /api/v1/user:
 *   get:
 *     summary: Returns an array of all the users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of all of the users
 *         content:
 *           application/json:
 *             schema:
 *                 type: array
 *                 items:
 *                  $ref: '#/components/schemas/Users'
 */
router.get("/api/v1/user", user.listAllUsers);

/**
 * @swagger
 * /api/v1/user/{id}:
 *   get:
 *     summary: Get the user details by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       404:
 *         description: The user was not found
 *       500:
 *         description: An error occurred
 */
router.get("/api/v1/user/:id", user.getUserById);

/**
 * @swagger
 * /api/v1/user:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: The user was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       404:
 *         description: The user was not found
 *       500:
 *         description: An error occurred
 */
router.post("/api/v1/user", validateDto(userDto), user.createUser);

/**
 * @swagger
 * /api/v1/user/{id}:
 *  patch:
 *    summary: Update the user by the id
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: number
 *        required: true
 *        description: The user id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Users'
 *    responses:
 *      200:
 *        description: The user was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Users'
 *      404:
 *        description: The user was not found
 *      500:
 *        description: An error occurred
 */
router.patch("/api/v1/user/:id", user.updateUserById);

/**
 * @swagger
 * /api/v1/user/{id}:
 *   delete:
 *     summary: Delete the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: The user id
 *
 *     responses:
 *       200:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 *       500:
 *         description: An error occurred
 */
router.delete("/api/v1/user/:id", user.deleteUserById);

/* User-City Routes */
/**
 * @swagger
 * /api/v1/user_city:
 *   get:
 *     summary: Returns an array of all the user_cities
 *     tags: [User-City]
 *     responses:
 *       200:
 *         description: List of all of the user_cities
 *         content:
 *           application/json:
 *             schema:
 *                 type: array
 *                 items:
 *                  $ref: '#/components/schemas/UserCity'
 */
router.get("/api/v1/user_city", user.listAllUserCities);
/**
 * @swagger
 * /api/v1/user_city:
 *   post:
 *     summary: Adds a city to a user
 *     tags: [User-City]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserCitys'
 *     responses:
 *       200:
 *         description: The city was successfully added to the user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserCity'
 *       404:
 *         description: The user and/or city was not found
 *       500:
 *         description: An error occurred
 */
router.post("/api/v1/user_city", validateDto(userCityDto), user.createUserCity);

/**
 * @swagger
 * /api/v1/user_city/{id}:
 *   delete:
 *     summary: Delete the user_city by id
 *     tags: [User-City]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: The user_city id
 *
 *     responses:
 *       200:
 *         description: The user_city was deleted
 *       404:
 *         description: The user_city was not found
 *       500:
 *         description: An error occurred
 */
router.delete("/api/v1/user_city/:id", user.deleteUserCityById);


module.exports = router;
