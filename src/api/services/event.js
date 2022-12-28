const eventDAO = require("../daos/event");

class EventService {
  listEvents() {
    return eventDAO.listAllEvents();
  }
  getEventById(id) {
    return eventDAO.getEventById(id);
  }
  filterEventsByCityId(cityId) {
    return eventDAO.filterEventsByCityId(cityId);
  }
  filterEventsByUserId(userId) {
    logger.debug(`SERVICE: filterEventsByUserId, ${userId}`);
    return eventDAO.filterEventsByUserId(userId);
  }
  createEvent(eventDto) {
    return eventDAO.createEvent(eventDto);
  }
  updateEventById(id, eventDto) {
    return eventDAO.updateEventById(id, eventDto);
  }
  deleteEventById(id) {
    return eventDAO.deleteEventById(id);
  }
}

module.exports = new EventService();
