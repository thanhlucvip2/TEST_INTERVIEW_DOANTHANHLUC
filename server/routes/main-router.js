const express = require("express");
const mainRouter = express.Router();
const jokesRouter = require("./jokes/jokes-router");

mainRouter.use("/jokes", jokesRouter);

module.exports = mainRouter;
