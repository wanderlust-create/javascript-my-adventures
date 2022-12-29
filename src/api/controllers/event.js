const logger = require("../../utils/logger");
const eventService = require("../services/event");
class EventController {
  async listAllEvents(req, res, next) {
    try {
      const events = await eventService.listEvents();
      if (!events) {
        res.sendStatus(404);
        return;
      } else {
        res.json(events);
      }
    } catch (err) {
      logger.error(err);
      res.status(500).json(err);
    }
  }

  async getEventById(req, res, next) {
    try {
      const event = await eventService.getEventById(req.params.id);
      if (!event) {
        res.sendStatus(404);
        return;
      } else {
        res.json(event);
      }
    } catch (err) {
      logger.error(err);
      res.status(500).json(err);
    }
  }

  async filterEventsByCityId(req, res, next) {
    try {
      const events = await eventService.filterEventsByCityId(
        req.params.city_id
      );
      if (!events) {
        res.sendStatus(404);
        return;
      } else {
        res.json(events);
      }
    } catch (err) {
      logger.error(err);
      res.status(500).json(err);
    }
  }

  async filterEventsByUserId(req, res, next) {
    try {
      let userId = req.params.user_id;
      const events = await eventService.filterEventsByUserId(userId);
      if (!events) {
        res.sendStatus(404);
        return;
      } else {
        res.json(events);
      }
    } catch (err) {
      logger.error(err);
      res.status(500).json(err);
    }
  }

  async createEvent(req, res, next) {
    try {
      const event = await eventService.createEvent(req.body);
      res.json(event);
    } catch (err) {
      logger.error(err);
      res.status(500).json(err);
    }
  }

  async updateEventById(req, res, next) {
    try {
      const id = req.params.id;
      const event = await eventService.updateEventById(id, req.body);
      if (!event) {
        res.sendStatus(404);
        return;
      } else {
        res.json(event);
      }
    } catch (err) {
      logger.error(err);
      res.status(500).json(err);
    }
  }

  async deleteEventById(req, res, next) {
    try {
      const id = req.params.id;
      const deletedEvent = await eventService.deleteEventById(id);
      if (deletedEvent.length === 0) {
        res.sendStatus(404);
        return;
      } else {
        logger.info("Event Deleted:", deletedEvent);
        res.json({ alert: "Event Deleted", deletedEvent });
      }
    } catch (err) {
      logger.error(err);
      res.status(500).json(err);
    }
  }
}

module.exports = new EventController();
