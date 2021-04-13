const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 22100;
const LOCAL_DB = "mongodb://localhost/software";

const app = express();

mongoose
  .connect(ONLINE_DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DataBase has been connected, SUCCESSFULLY!");
  });

app.use(cors());
app.use(express.json());

app.use("/", require("./Controller"));

app.listen(port, () => {
  console.log(`${port}`);
});
