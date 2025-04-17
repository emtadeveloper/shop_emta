const express = require("express");
const morgan = require("morgan");

const swaggerMiddleware = require("../common/middleware/swaggerMiddleware");
const { ErrorHandler, NotFoundError } = require("../common/middleware/ErrorMiddleware");
const setupRoutes = require("./setupRoutes");

const setupMiddlewares = (app) => {
    app.use(express.static("public"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(morgan("dev"));
    swaggerMiddleware(app);

    setupRoutes(app)

    app.use(NotFoundError);
    app.use(ErrorHandler);
};

module.exports = setupMiddlewares  
