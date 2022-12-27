const config = require('./src/config')

const { knexSnakeCaseMappers } = require("objection");
module.exports = {
  development: {
    client: "pg",
    connection: {
      database: config.DB_NAME,
      user: config.DB_USER,
      password: config.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./src/db/migrations",
    },
    seeds: {
      directory: "./src/db/seeds",
    },
    // auto convert camelCase to snake case when accessing the Postgresql db
    ...knexSnakeCaseMappers(),
  },
};