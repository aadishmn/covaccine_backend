const userModel = require("../models/userModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const centerModels = require("../models/centerModels");
const registerController = async (req, res) => {
  try {
    const isUser = await userModel.findOne({ email: req.body.email });
    if (isUser) {
      return res
        .status(200)
        .send({ message: "Already user exists", success: false });
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).send({ message: "Reg success", success: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(200)
        .send({ message: "user not found", success: false });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res
        .status(200)
        .send({ message: "Invlid EMail or Password", success: false });
    }
    const token =
      ({ id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      });
    res.status(200).send({ message: "Login Success", success: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `Error in Login CTRL ${error.message}` });
  }
};

const centerController = async (req, res) => {
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

module.exports = {
  registerController,
  loginController,
  centerController,
};
