const express = require("express");
const {
  loginController,
  registerController,
  centerController,
} = require("../controllers/userCtrl");
const { newApplicationController } = require("../controllers/appointmentsCtrl");

const router = express.Router();
router.post("/register", registerController);

router.post("/login", loginController);
router.get("/centers", centerController);
router.post("/appointments", newApplicationController);
// router.get("/appointmentsCount", getApplicationCount);

module.exports = router;
