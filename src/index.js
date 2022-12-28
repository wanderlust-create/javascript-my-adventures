const express = require("express");
const setupDb = require("./utils/db-setup");

// load winston logger
const logger = require("./utils/logger");

// Routes
const api = require("./api");

// .env variables
const config = require("./config");
const port = config.PORT || 8080

// swagger error handling
const apiErrorHandler = require("./api/reqBodyValidation/error/api-error-handler");
const swaggerDocs = require("./utils/swagger");

// set up database with objection and knex
setupDb();

const app = express();
app.use(express.json());
app.use(api);
app.use(apiErrorHandler);

app.listen(port, (err) => {
  if (err) {
    logger.error(err);
    process.exit(1);
    return;
  }
  swaggerDocs(app, port);
  logger.info(`
      %%%% 👍  My Adventure JS Swagger API REST Server listening on http://localhost:${port} 👍 %%%%
    `);
});
