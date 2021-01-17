const router = require("express").Router();
const main_controller = require("../controllers/main");

router
  .route("/")
  .get(main_controller.getDocument)
  .post(main_controller.putDocument);

module.exports = router;
