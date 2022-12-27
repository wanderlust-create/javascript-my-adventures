const dotenv = require("dotenv");

// NODE_ENV  default set to 'development'
process.env.NODE_ENV = process.env.NODE_ENV || "development";

// Return error if .env file not found
const envFound = dotenv.config();
if (!envFound) {
  throw new Error("⚠️error loading environment variables, aborting⚠️");
}
// .env variables
module.exports = {
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  LOG_LEVEL: process.env.LOG_LEVEL || "debug",
  PORT: parseInt(process.env.PORT) || 8080,
};
