const Weather = require("../weather");

module.exports = {
   index
};

function index(req, res) {
  Weather.find({}, function (err, weather) {
    res.render("weather", { title: "weather", weather });
  });
}

