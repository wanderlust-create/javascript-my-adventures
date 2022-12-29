const express = require("express");
const router = express.Router();

// City Controller
const city = require("../controllers/city");

// Error Handler
const validateDto = require("../reqBodyValidation/middlewear/validate-dto");
const cityDto = require("../reqBodyValidation/dtos/city");
// Network CRUD routes

/**
 * @swagger
 * components:
 *   schemas:
 *     City:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - country
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the city
 *         name:
 *           type: string
 *           description: The city name
 *         country:
 *           type: string
 *           description: The country  the city is located in
 *         shows: 
 *           type: array
 *           description: An array of all events included in the city
 *       example:
 *         id: 4
 *         name: Porto
 *         country: 
 *         events: [{
                id: 14,
                title: Igreja de São Francisco"
            }]
 */

/**
 * @swagger
 * tags:
 *   name: Cities
 *   description: My Adventure Cities
 */

/**
 * @swagger
 * /api/v1/city:
 *   get:
 *     summary: Returns an array of all the cities
 *     tags: [Cities]
 *     responses:
 *       200:
 *         description: List of all the cities
 *         content:
 *           application/json:
 *             schema:
 *                 type: array
 *                 items:
 *                  $ref: '#/components/schemas/City'
 */
router.get("/api/v1/city", city.listAllCities);

/**
 * @swagger
 * /api/v1/city/{id}:
 *   get:
 *     summary: Get the city details by id
 *     tags: [Cities]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: The city id
 *     responses:
 *       200:
 *         description: The city description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/City'
 *       404:
 *         description: The city was not found
 *       500:
 *         description: An error occurred
 */
router.get("/api/v1/city/:id", city.getCityById);

/**
 * @swagger
 * /api/v1/city:
 *   post:
 *     summary: Create a new city
 *     tags: [Cities]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/City'
 *     responses:
 *       200:
 *         description: The city was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/City'
 *       404:
 *         description: The city was not found
 *       500:
 *         description: An error occurred
 */
router.post("/api/v1/city", validateDto(cityDto), city.createCity);

/**
 * @swagger
 * /api/v1/city/{id}:
 *  patch:
 *    summary: Update the city by the id
 *    tags: [Cities]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: number
 *        required: true
 *        description: The city id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/City'
 *    responses:
 *      200:
 *        description: The city was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/City'
 *      404:
 *        description: The city was not found
 *      500:
 *        description: An error occurred
 */
router.patch("/api/v1/city/:id", validateDto(cityDto), city.updateCityById);

/**
 * @swagger
 * /api/v1/city/{id}:
 *   delete:
 *     summary: Remove the city by id
 *     tags: [Cities]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: The city id
 *
 *     responses:
 *       200:
 *         description: The city was deleted
 *       404:
 *         description: The city was not found
 *       500:
 *         description: An error occurred
 */
router.delete("/api/v1/city/:id", city.deleteCityById);

module.exports = router;
