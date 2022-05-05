const Flight = require("../models/flight");

module.exports = {
  create,
  delete: deleteReview,
};

function create(req, res) {

  Flight.findById(req.params.id, function (err, flight) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    flight.reviews.push(req.body);
    flight.save(function (err) {
      res.redirect(`/flights/${flight._id}`);
    });
  });
}

function deleteReview(req, res, next) {

  Flight.findOne({ "reviews._id": req.params.id }).then(function (flight) {
    const review = flight.reviews.id(req.params.id);
    if (!review.user.equals(req.user._id))
      return res.redirect(`/flights/${flight._id}`);
    review.remove();
    flight
      .save()
      .then(function () {
        res.redirect(`/flights/${flight._id}`);
      })
      .catch(function (err) {
        return next(err);
      });
  });
}
