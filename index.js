require("dotenv").config();
const express = require("express");
const db = require("./configs/db");

const app = express();

app.use(express.json());

app.use("/", require("./services")(db));

app.listen(process.env.PORT, () =>
  console.info("> listening at:",  process.env.PORT)
);
