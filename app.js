require("dotenv").config();
const express = require("express");
const errors = require("./errors/commons");

const app = express();

module.exports = async () => {
    const db = await require("./configs/db");
    app.use(express.json());
    
    app.use("/", require("./services")(db));
    
    app.use((_, __, next) => {
        next(errors[404]);
    });
    
    app.use(({ statusCode, error }, _, res, __) => {
        res.status(statusCode).json({
            success: false,
            message: error.message,
        });
    });
    return app;
}