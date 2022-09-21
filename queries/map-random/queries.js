const { sql } = require("slonik");

const insertCoordinates = ({ coordinates }) => {
  return sql`
    INSERT INTO trips (
      ubication
    ) VALUES (
      ${coordinates}
    );
  `;
};

module.exports = {
    insertCoordinates,
};
