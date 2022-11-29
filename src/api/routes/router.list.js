const express = require("express");
const router = express.Router();
const cache = require("../services/cache");
const listController = require("../controllers/controller.list");

router
  .get("/lists", cache(300), listController.getList)
  .post("/lists", cache(300), listController.addItems)
  .patch("/lists", cache(300), listController.updateItems)
  .delete("/lists", cache(300), listController.deleteItem);

module.exports = router;
