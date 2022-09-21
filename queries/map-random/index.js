const { queryCatcher } = require("../utils");
const { insertCoordinates } = require("./queries");

const saveCoordinates = (db) => async ({ coordinates }) => {
    return await queryCatcher(
        db.query,
        "saveCoordinates"
      )(insertCoordinates({ coordinates }));
};

module.exports = {
    saveCoordinates,
}
