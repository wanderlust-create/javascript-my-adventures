const express = require("express");
const setupDb = require("./utils/db-setup");

// load winston logger
const logger = require("./utils/logger");

// Routes
const api = require("./api");

// .env variables
const config = require("./config");

// swagger docs
const swaggerDocs = require("./utils/swagger");

// set up database with objection and knex
setupDb();

const app = express();
app.use(express.json());
app.use(api);


app.listen(config.PORT, (err) => {
  if (err) {
    logger.error(err);
    process.exit(1);
    return;
  }
  swaggerDocs(app, config.PORT);
  logger.info(`
      %%%% 👍  My Adventure JS Swagger API REST Server listening on http://localhost:${config.PORT} 👍 %%%%
    `);
});
