if (process.env.NODE_ENV === "production") {
  throw new Error("Can not run seeds in production enviroment");
}
const eventData = require("../sources/events");
const userData = require("../sources/users");
const cityData = eventData
  .map((event) => event.city)
  .filter((value, index, self) => self.indexOf(value) === index);

exports.seed = function (knex) {
  // Deletes existing entries
  return (
    knex("event")
      .del()
      .then(() => {
        return knex("userCity").del();
      })
      .then(() => {
        return knex("user").del();
      })
      .then(() => {
        return knex("city").del();
      })
      // Creates new entries in db: uses helper functions below
      .then(() => {
        let cityPromises = [];
        cityData.forEach((city) => {
          cityPromises.push(createCity(knex, city));
        });
        return Promise.all(cityPromises);
      })
      .then(() => {
        let eventPromises = [];
        eventData.forEach((event) => {
          let city = event.city;
          eventPromises.push(createEvent(knex, event, city));
        });
        return Promise.all(eventPromises);
      })
      .then(() => {
        let userPromises = [];
        userData.forEach((user) => {
          userPromises.push(createUser(knex, user));
        });
        return Promise.all(userPromises);
      })
      .then(() => {
        let userCityPromises = [];
        userData.forEach((user) => {
          userCityPromises.push(createUserCity(knex, user));
        });
        return Promise.all(userCityPromises);
      })
  );
};

// Helper Functions to insert the data into the db
const createCity = (knex, city) => {
  let countryName = eventData.find((event) => {
    if (event.city === city) {
      return event.country;
    }
  });
  return knex("city").insert({
    name: city,
    country: countryName,
  });
};

const createEvent = (knex, event, city) => {
  return knex("city")
    .where("name", city)
    .first()
    .then((cityRecord) => {
      return knex("event").insert({
        title: event.title,
        cityId: cityRecord.id,
      });
    });
};

const createUser = (knex, user) => {
  return knex("user").insert({
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
  });
};
const createUserCity = (knex, user) => {
  return knex("user")
    .where("email", user.email)
    .first()
    .then((userRecord) => {
      let userCityPromises = [];
      user.trips.forEach((city) => {
        userCityPromises.push(createUserCityData(knex, city, userRecord.id));
      });
      return Promise.all(userCityPromises);
    });
};

const createUserCityData = (knex, city, userId) => {
  return knex("city")
    .where("name", city)
    .first()
    .then((cityRecord) => {
      return knex("userCity").insert({
        userID: userId,
        cityID: cityRecord.id,
      });
    });
};
