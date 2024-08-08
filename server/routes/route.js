const express = require("express");
const router = express.Router();

const controller = require("../controllers/controller.js");

router
  .route("/questions")
  .get(controller.getQuestions)
  .post(controller.insertQuestions)
  .delete(controller.dropQuestions);

router
  .route("/result")
  .get(controller.getResult)
  .post(controller.storeResult)
  .delete(controller.dropResult);

module.exports = router;
