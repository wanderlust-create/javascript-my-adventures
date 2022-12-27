const { Model } = require("objection");

class User extends Model {
  static get tableName() {
    return "user";
  }
  static get relationMappings() {
    const Cities = require("./cities");
    return {
      cities: {
        relation: Model.ManyToManyRelation,
        modelClass: Cities,
        filter: (query) =>
          query.select("name", "travelType", "startDate", "endDate"),
        join: {
          from: "user.id",
          through: {
            from: "userCity.userId",
            to: "userCity.cityId",
          },
          to: "city.id",
        },
      },
    };
  }
}
module.exports = User;
