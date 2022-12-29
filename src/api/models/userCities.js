const { Model } = require("objection");

class userCity extends Model {
  static get tableName() {
    return "userCity";
  }

  static get relationMappings() {
    const User = require("./users");
    const City = require("./cities");
    return {
      user: {
        relation: Model.HasOneRelation,
        modelClass: User,
        filter: (query) => query.select("id", "email", "firstName", "lastName"),
        join: {
          from: "userCity.userId",
          to: "user.id",
        },
      },
      city: {
        relation: Model.HasOneRelation,
        modelClass: City,
        filter: (query) => query.select("id", "name", "country"),
        join: {
          from: "userCity.cityId",
          to: "city.id",
        },
      },
    };
  }
}
module.exports = userCity;
