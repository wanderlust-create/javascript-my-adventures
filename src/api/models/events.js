const { Model } = require("objection");

class Event extends Model {
  static get tableName() {
    return "event";
  }

  static get relationMappings() {
    const Cities = require("./cities");
    return {
      city: {
        relation: Model.BelongsToOneRelation,
        filter: (query) => query.select("name", "country"),
        modelClass: Cities,
        join: {
          from: "event.cityId",
          to: "city.id",
        },
      },
    };
  }
}
module.exports = Event;
