const { Model } = require("objection");

class User extends Model {
  static get tableName() {
    return "user";
  }
  static get relationMappings() {
    const City = require("./cities");
    return {
      city: {
        relation: Model.ManyToManyRelation,
        modelClass: City,
        filter: (query) =>
          query.select("name", "country"),
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
