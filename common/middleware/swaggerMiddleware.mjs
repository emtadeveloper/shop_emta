import path from "path";
import { fileURLToPath } from "url";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const apiFilesGlob = path.join(__dirname, "../../module/**/*.yml");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Shop & Form Builder API - emtadeveloper.ir",
      version: "1.0.0",
      description:
        "Comprehensive API documentation for the e‑commerce platform and form builder services...",
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
    security: [{ bearerAuth: [] }],
  },
  apis: [apiFilesGlob],
};

const swaggerSpec = swaggerJSDoc(options);

export default (app) => {
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
};
