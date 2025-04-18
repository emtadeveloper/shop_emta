import express from "express"
import morgan from "morgan"
import passport from "passport"

import swaggerMiddleware from "../common/middleware/swaggerMiddleware.mjs"
import { ErrorHandler, NotFoundError } from "../common/middleware/ErrorMiddleware.mjs"
import setupRoutes from "./setupRoutes.mjs"
import setupPassport from "./setupPassport.mjs"

const setupMiddlewares = (app) => {
    app.use(express.static("public"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(morgan("dev"));
    setupPassport(passport)
    swaggerMiddleware(app);

    setupRoutes(app)

    app.use(ErrorHandler);
    app.use(NotFoundError);
};

export default setupMiddlewares