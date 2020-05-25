const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

require("dotenv").config();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const uri = process.env.URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 15000,
});

mongoose.connection.on("connected", () => {
  console.log("Connection to DB is up");
});

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is up on port: ${port}`);
});
