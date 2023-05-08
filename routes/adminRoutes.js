const express = require("express");
const {
  addCenter,
  showCenter,
  getCenter,
  putCenter,
  deleteCenter,
} = require("../controllers/adminCtrl");

const router = express.Router();

router.post("/addCenter", addCenter);
router.get("/showCenter", showCenter);
router.post("/getCenter/:id", getCenter);
router.put("/putCenter", putCenter);
router.delete("/deleteCenter/:id", deleteCenter);

module.exports = router;
