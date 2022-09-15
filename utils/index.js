const hash = require("./hash");
const jwt = require("./jwt");
const cookie = require("./cookie");

const serialize = (res, payload) => {
    const token = jwt.sign(payload);
    cookie.create(res, token);
  };

module.exports = {
    hash,
    serialize,
    jwt,
    cookie,
};