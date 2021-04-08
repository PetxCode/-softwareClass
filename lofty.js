const express = require("express");
const mongoose = require("mongoose");
const port = 22100;
const LOCAL_DB = "mongodb://localhost/lofty";
const app = express();
app.use(express.json());

mongoose
  .connect(LOCAL_DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection successful...!");
  });


app.listen(port, () => {
  console.log(`${port}`);
});
