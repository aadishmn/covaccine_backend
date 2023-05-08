const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
var cors = require("cors");

dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Headers", "*")
    res.header(
        "Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE"
    )
    res.header(
        "Access-Control-Allow-Headers", "Content-Type, x-requested-with"

    )
    next();
})
app.use(express.json());
app.use(moragan("dev"));

app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
