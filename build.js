const express = require("express");
const mongoose = require("mongoose");
const port = 22100;
const app = express();
const LOCAL_DB = "mongodb://localhost/software";
app.use(express.json());

mongoose
  .connect(LOCAL_DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Local databse has connected successfully");
  });

const mySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});
const mydata = mongoose.model("softwares", mySchema);

app.get("/", async (req, res) => {
  const findData = await mydata.find();
  res.json(findData);
});

app.post("/", async (req, res) => {
  const newData = new mydata({
    name: req.body.name,
  });
  const saveData = await newData.save();
  res.status(201).json(saveData);
});

app.listen(port, () => {
  console.log(`${port}`);
});
