const express = require("express");
const router = express.Router();
const enrouteCtrl = require("../controllers/enroutes");

router.get("/enroutes/new", enrouteCtrl.new);
router.post("/enroutes", enrouteCtrl.create);
router.post("/flights/:flightId/enroutes", enrouteCtrl.addToAirport);

module.exports = router;
