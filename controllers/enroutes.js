const Enroute = require("../models/enroute");
const Flight = require("../models/flight");

module.exports = {
  new: newEnroute,
  create,
  addToAirport,
};

function addToAirport(req, res) {
  Flight.findById(req.params.flightId, function (err, flight) {
    flight.airport.push(req.body.enrouteId);
    flight.save(function (err) {
      res.redirect(`/flights/${flight._id}`);
    });
  });
}

function create(req, res) {
  Enroute.create(req.body, function (err, enroute) {
    res.redirect("/enroutes/new");
  });
}

function newEnroute(req, res) {
  Enroute.find({})
    .sort("enrouteAlternate")
    .exec(function (err, enroutes) {
      res.render("enroutes/new", {
        title: "Add Enroute",
        enroutes,
      });
    });
}
