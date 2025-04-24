import "./config/dotenv.mjs";
import express from "express";
import connectDB from "./config/db/db.mongodb.mjs";
import setupMiddlewares from "./config/setupMiddlewares.mjs";

const app = express();

connectDB();

setupMiddlewares(app);

const port = process.env.PORT || 5000;
app.listen(port, () => { 
    console.log(`🚀 Server running on port ${port}`);
});
