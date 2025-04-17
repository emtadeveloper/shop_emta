// middleware/swaggerMiddleware.js
const path = require("path");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Shop & Form Builder API - emtadeveloper.ir",
      version: "1.0.0",
      description: "Comprehensive API documentation for the e-commerce platform and form builder services available on emtadeveloper.ir. Includes endpoints for user authentication, product management, order processing, form creation, and more.",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 5000}`,
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [path.join(__dirname, "../../module/*/*.yml")],
};

const swaggerSpec = swaggerJSDoc(options);

function swaggerMiddleware(app) {
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
  console.log("Swagger documentation available at /api-docs");
}

module.exports = swaggerMiddleware;
