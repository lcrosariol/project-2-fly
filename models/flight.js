const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    remarks: { type: String, required: true },
    procedures: { type: String, required: false },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    userName: String,
    userAvatar: String,
  },
  {
    timestamps: true,
  }
);

const flightSchema = new Schema(
  {
    departure: {
      type: String,
      required: true,
    },
    arrival: {
      type: String,
      required: true,
      
    },
    vfrOrIfr: String,
    airport: [
      {
        type: Schema.Types.ObjectId,
        ref: "Enroute",
      },
    ],
    destinationHasFuel: { type: Boolean, default: false },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Flight", flightSchema);
