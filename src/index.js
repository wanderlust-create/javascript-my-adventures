const express = require("express");
const setupDb = require("./utils/db-setup");

// Routes
const api = require("./api");

// .env variables
const config = require("./config");

// set up database with objection and knex
setupDb();

const app = express();
app.use(express.json());
app.use(api);

app.listen(config.PORT, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
    return;
  }
  console.log(`
      %%%% 👍  API REST Server listening on http://localhost:${config.PORT} 👍 %%%%
    `);
});
