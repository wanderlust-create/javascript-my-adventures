const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const appData = require("../../package.json");
const logger = require("./logger");
const config = require("../config");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "My Adventures JS REST API docs",
      version: appData.version,
    },
    servers: [
      {
        url: `http://localhost:${config.PORT}`,
      },
    ],
  },
  apis: ["src/api/routes/*.js"],
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

function swaggerDocs(app, port) {
  // Swagger page in server
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Swagger docs in JSON format
  app.get("/api-docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  logger.info(
    `%%% 💻 🔑 My Adventure JS Swagger API Docs avaliable at http://localhost:${port}/api-docs 🔑 💻 %%%`
  );
}
module.exports = swaggerDocs;
