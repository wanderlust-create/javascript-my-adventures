const express = require("express");
const router = express.Router();

// Event Controller
const event = require("../controllers/event");

// Error Handlers
const validateDto = require("../reqBodyValidation/middlewear/validate-dto");
const eventDto = require("../reqBodyValidation/dtos/event");

// Show CRUD routes

/**
 * @swagger
 * components:
 *   schemas:
 *     Events:
 *       type: object
 *       required:
 *         - id
 *         - cityId
 *         - title
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the event
 *         cityId:
 *           type: number
 *           description: The foreign key for the city
 *         title: 
 *           type: string
 *           description: The event title
 *         city: 
 *           type: array
 *           description: The city the event belongs to
 *       example:
 *         id: 23
 *         title: Van Gogh Museum
 *         city: [{
            name: Amsterdam,
            country: the Netherlands
        }]
 */

/**
 * @swagger
 * tags:
 *   name: Events
 *   description: My Adventure Events
 */

/**
 * @swagger
 * /api/v1/event:
 *   get:
 *     summary: Returns an array of all the events
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: List of all the events
 *         content:
 *           application/json:
 *             schema:
 *                 type: array
 *                 items:
 *                  $ref: '#/components/schemas/Events'
 */
router.get("/api/v1/event", event.listAllEvents);

/**
 * @swagger
 * /api/v1/event/{id}:
 *   get:
 *     summary: Get the event details by id
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: The event id
 *     responses:
 *       200:
 *         description: The event description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Events'
 *       404:
 *         description: The event was not found
 *       500:
 *         description: An error occurred
 */
router.get("/api/v1/event/:id", event.getEventById);

/**
 * @swagger
 * /api/v1/event:
 *   post:
 *     summary: Create a new event
 *     tags: [Events]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Events'
 *     responses:
 *       200:
 *         description: The event was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Events'
 *       404:
 *         description: The event was not found
 *       500:
 *         description: An error occurred
 */
router.post("/api/v1/event", validateDto(eventDto), event.createEvent);

/**
 * @swagger
 * /api/v1/event/{id}:
 *  patch:
 *    summary: Update the event by the id
 *    tags: [Events]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: number
 *        required: true
 *        description: The event id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Events'
 *    responses:
 *      200:
 *        description: The event was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Events'
 *      404:
 *        description: The event was not found
 *      500:
 *        description: An error occurred
 */
router.patch("/api/v1/event/:id", event.updateEventById);

/**
 * @swagger
 * /api/v1/event/{id}:
 *   delete:
 *     summary: Remove the event by id
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: The event id
 *     responses:
 *       200:
 *         description: The event was deleted
 *       404:
 *         description: The event was not found
 *       500:
 *         description: An error occurred
 */
router.delete("/api/v1/event/:id", event.deleteEventById);

// Filter events by cities || users

/**
 * @swagger
 * /api/v1/events_by_city/{city_id}:
 *   get:
 *     summary: Filter events by city
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: city_id
 *         schema:
 *           type: number
 *         required: true
 *         description: The city id used to filter shows
 *     responses:
 *       200:
 *         description: The shows filtered by city
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Events'
 *       404:
 *         description: The city was not found
 *       500:
 *         description: An error occurred
 */
router.get("/api/v1/events_by_city/:city_id", event.filterEventsByCityId);

/**
 * @swagger
 * /api/v1/events_by_user/{user_id}:
 *   get:
 *     summary: Filter events by user
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         schema:
 *           type: number
 *         required: true
 *         description: Filter events by user id
 *     responses:
 *       200:
 *         description: The events filtered by user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Events'
 *       404:
 *         description: The user was not found
 *       500:
 *         description: An error occurred
 */
router.get("/api/v1/events_by_user/:user_id", event.filterEventsByUserId);

module.exports = router;