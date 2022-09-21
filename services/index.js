const router = require("express").Router();

module.exports = (db) => {
  router.use("/auth", require("./auth")(db));
  router.use("/map-random", require("./map-random")(db));

  return router;
};