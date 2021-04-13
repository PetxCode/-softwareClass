const express = require("express");
const mongoose = require("mongoose");
const port = 2100;
const app = express();
const LOCAL_DB = "mongodb://localhost/software";
const ONLINE_DB =
  "mongodb+srv://Achievers:Achievers@cluster0.xg4zd.mongodb.net/money?retryWrites=true&w=majority";

const peter = require("../MVC/Controller");

mongoose
  .connect(ONLINE_DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Local database is now connected...!");
  });

app.use(express.json());
app.use("/", peter);

app.listen(port, () => {
  console.log(`${port}`);
});
