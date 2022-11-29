const express = require("express");
const app = express();
const listRouter = require("../api/routes/router.list");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", listRouter);

module.exports = app;
