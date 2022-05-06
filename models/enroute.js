const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const enrouteSchema = new Schema(
  {
    enrouteAlternate: { type: String, required: true, unique: true },
    eta: Date,  
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Enroute", enrouteSchema);
