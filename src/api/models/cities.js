const { Model } = require("objection");

class City extends Model {
  static get tableName() {
    return "city";
  }

  static get relationMappings() {
    const Events = require("./events");
    const Users = require("./users");
    return {
      events: {
        relation: Model.HasManyRelation,
        modelClass: Events,
        filter: (query) => query.select("id", "title", "date"),
        join: {
          from: "event.cityId",
          to: "city.id",
        },
      },
      packages: {
        relation: Model.ManyToManyRelation,
        modelClass: Users,
        filter: (query) => query.select("id", "firstName", "lastName"),
        join: {
          from: "city.id",
          through: {
            from: "userCity.userId",
            to: "userCity.cityId",
          },
          to: "user.id",
        },
      },
    };
  }
}
module.exports = City;
