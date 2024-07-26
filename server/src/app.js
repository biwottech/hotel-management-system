const express = require("express");
const cors = require("cors");
const routes = require("../routes/index");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);

app.all("*", (req, res) => {
  res
    .status(404)
    .send({ success: false, status: 404, message: "Error Page not found" });
});

module.exports = app;
