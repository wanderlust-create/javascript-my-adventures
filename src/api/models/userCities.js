const { Model } = require("objection");

class userCity extends Model {
  static get tableName() {
    return "userCity";
  }

  static get relationMappings() {
    const Users = require("./users");
    const Cities = require("./cities");
    return {
      user: {
        relation: Model.HasOneRelation,
        modelClass: Users,
        filter: (query) => query.select("id", "firstName", "lastName"),
        join: {
          from: "userCity.userId",
          to: "user.id",
        },
      },
      city: {
        relation: Model.HasOneRelation,
        modelClass: Cities,
        filter: (query) => query.select("id", "name"),
        join: {
          from: "userCity.cityId",
          to: "city.id",
        },
      },
    };
  }
}
module.exports = userCity;
