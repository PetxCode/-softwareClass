const express = require("express");
const mongoose = require("mongoose");
const port = 22100;
const app = express();
const router = express.Router();
const DB = "mongodb://localhost:foundation";

mongoose
  .connect(DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Mongo has successfully connected to DataBase:foundation");
  });

const softwareSchema = mongoose.Schema({
  name: {
    type: String,
    // required: true,
    default: "Peter",
  },
  age: Number,
});
const software = mongoose.model("software", softwareSchema);

// const softBuild = new software({
//   name: "Ibori",
//   age: 22,
// });
// softBuild.save().then((doc) => console.log(doc));
app.use(express.json());

app.get("/", async (req, res) => {
  const soft = await software.find();
  res.status(200).json(soft);
});

app.post("/", async (req, res) => {
  const newData = new software(req.body);
  const saveData = await newData.save();
  res.json(saveData);
});

app.get("/:id", async (req, res) => {
  const getData = await software.findById(req.params.id);
  res.json(getData);
});

app.patch("/:id", async (req, res) => {
  const updatedData = await software.findByIdAndUpdate(req.params.id, req.body);

  // const saveData = updatedData.save();
  // res.json(saveData);

  res.json(updatedData);
});

app.delete("/:id", async (req, res) => {
  const delData = await software.findByIdAndDelete(req.params.id);
  res.json("done");
});

app.listen(port, () => {
  console.log(`${port}`);
});
