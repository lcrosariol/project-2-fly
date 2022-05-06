const res = require("express/lib/response");
const Flight = require("../models/flight");
const Enroute = require("../models/enroute");

module.exports = {
  index,
  show,
  new: newFlight,
  create,
};

function index(req, res) {
  Flight.find({}, function (err, flights) {
    res.render("flights/index", { title: "All Flights", flights });
  });
}

function show(req, res) {
  Flight.findById(req.params.id)
    .populate("airport")
    .exec(function (err, flight) {
      Enroute.find({ _id: { $nin: flight.airport } })
        .sort("enrouteAlternate")
        .exec(function (err, enroutes) {
          res.render("flights/show", {
            title: "Flight Detail",
            flight,
            enroutes,
          });
        });
    });
}

function newFlight(req, res) {
  res.render("flights/new", { title: "Add Flight" });
}

function create(req, res) {
  req.body.destinationHasFuel = !!req.body.destinationHasFuel;
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  const flight = new Flight(req.body);
  flight.save(function (err) {
    if (err) return res.redirect("/flights/new");
    res.redirect(`/flights/${flight._id}`);
  });
}