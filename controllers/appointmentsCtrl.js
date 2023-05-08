const appointment = require("../models/applicationModels");
const centers = require("../models/centerModels");
const users = require("../models/userModels");
// import moment from "moment";
const newApplicationController = async (req, res) => {
  try {
    // const userInfo = await users.findOne({ mobile: req.body.values });
    const centerInfo = await centers.findOne({ phoneNo: req.body.phoneNo });
    // console.log(req.body.date);
    // console.log(centerInfo._id);

    const countInfo = await appointment
      .find({
        center: centerInfo._id,
        appointment_date: req.body.date,
        appointment_time: req.body.isAppointTime,
      })
      .count();
    console.log(countInfo);
    if (countInfo >= 10) {
      res.status(400).send({ message: "Max count reacher", success: false });
    } else {
      const newAppointment = await appointment({
        //   patient: userInfo._id,
        center: centerInfo._id,
        appointment_date: req.body.date,
        appointment_time: req.body.isAppointTime,
        //   vaccine_name,
        //   dosage_name,
      });
      newAppointment.save();
      res.status(200).send({ message: "Success book", success: true });
    }
  } catch (error) {
    console.log(error);
  }
};

// const getApplicationCount = async (req, res) => {
//   try {
//     const countInfo = await centers
//       .find({
//         center: req.body.center,
//         appointment_date: req.body.appointment_date,
//         appointment_time: req.body.appointment_date,
//       })
//       .count();
//   } catch (err) {
//     console.log(err);
//   }

module.exports = { newApplicationController };
