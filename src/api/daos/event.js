const logger = require("../../utils/logger");
const Event = require("../models/events");
const User = require("../models/users");

class EventDAO {
  listAllEvents() {
    return Event.query()
      .column("id", "title")
      .orderBy("created_at", "desc")
      .withGraphFetched("city");
  }

  getEventById(id) {
    return Event.query()
      .findById(id)
      .column("id", "title")
      .withGraphFetched("city");
  }

  filterEventsByCityId(cityId) {
    return Event.query().select("id", "title").where("city_id", cityId);
  }

  filterEventsByUserId(userId) {
    return User.query()
      .findById(userId)
      .column("id", "first_name", "last_name")
      .withGraphFetched("city.[events]");
  }

  async createEvent(eventDto) {
    const newEvent = await Event.query().insert({
      title: eventDto.title,
      cityId: eventDto.city_id,
    });
    return newEvent;
  }

  async updateEventById(id, eventDto) {
    const updatedEvent = await Event.query()
      .findById(id)
      .patch({
        title: eventDto.title,
        cityId: eventDto.city_id,
      })
      .returning("id", "title", "cityId");
    return updatedEvent;
  }

  async deleteEventById(id) {
    const deletedEvent = await Event.query()
      .delete()
      .where({ id })
      .returning("*");
    return deletedEvent;
  }
}

module.exports = new EventDAO();
