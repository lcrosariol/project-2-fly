const express = require("express");
const router = express.Router();
const flightsCtrl = require("../controllers/flights");

const isLoggedIn = require("../config/auth");

router.get("/", flightsCtrl.index);
router.get("/new", isLoggedIn, flightsCtrl.new);
router.get("/:id", flightsCtrl.show);
router.post("/", isLoggedIn, flightsCtrl.create);

module.exports = router;
