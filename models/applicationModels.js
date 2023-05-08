const mongoose = require("mongoose");

const constants = require("../constant");
const Schema = require("mongoose");
const applicationSchema = new mongoose.Schema({
  patient: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  center: {
    type: Schema.Types.ObjectId,
    ref: "centers",
  },
  vaccine_name: {
    type: String,
    enum: constants.vaccine_names,
  },
  dosage_name: {
    type: String,
    enum: constants.dosage_names,
  },
  appointment_date: {
    type: String,
  },
  appointment_time: {
    type: String,
  },
});

module.exports = mongoose.model("Applications", applicationSchema);
