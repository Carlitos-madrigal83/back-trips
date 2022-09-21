const router = require("express").Router();

module.exports = (db) => {
  router.post("/create", require("./create")(db));

  return router;
};
