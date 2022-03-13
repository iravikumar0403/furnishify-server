const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const apiRouter = require("./routes");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use("/api", apiRouter);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connection to db successful");
    app.listen(5000, () => {
      console.log("server is running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
