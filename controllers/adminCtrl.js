const centerModels = require("../models/centerModels");

const addCenter = async (req, res) => {
  try {
    const center = new centerModels(req.body);
    await center.save();
    res.status(200).send({ message: "Inserted data", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Cant save",
    });
  }
};

const showCenter = async (req, res) => {
  try {
    const center = await centerModels.find({});
    res.status(200).send({
      success: true,
      message: "Centers Lists Fetched Successfully",
      data: center,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error in fetch",
      success: false,
    });
  }
};

const getCenter = async (req, res) => {
  try {
    const _id = req.params.id;

    const center = await centerModels.findOne({ _id });
    res.status(200).send({
      success: true,
      message: "Center fetched",
      data: center,
    });
  } catch (err) {
    console.log(err);
  }
};

const putCenter = async (req, res) => {
  try {
    const update = await centerModels.findByIdAndUpdate(
      { _id: req.body._id },
      req.body
    );
    res.status(201).send("updated");
  } catch (err) {
    console.log(err);
  }
};

const deleteCenter = async (req, res) => {
  const id = req.params.id;
  const del = await centerModels.findByIdAndRemove(id);
  res.status(204).send("deleted");
  try {
  } catch (err) {
    console.log(err);
  }
};

module.exports = { addCenter, showCenter, getCenter, putCenter, deleteCenter };
