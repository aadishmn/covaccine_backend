const mongoose = require("mongoose");

const centerSchema = new mongoose.Schema(
  {
    centerName: {
      type: String,
      required: [true, "name is require"],
    },
    address: {
      type: String,
      required: [true, "address is require"],
    },

    dose1: { type: Number, required: [true, "Dose 1 required"] },
    dose2: { type: Number, required: [true, "Dose 2 required"] },
    phoneNo: { type: String, required: [true, "phone num required"] },

    timing: {
      type: Object,
      required: [true, "start time and en time required"],
    },
  },
  { timestamps: true }
);

const centerModels = mongoose.model("centers", centerSchema);

module.exports = centerModels;
