const express = require("express");
const router = express.Router();

const myData = require("./Model");

router.get("/", async (req, res) => {
  const newData = await myData.find();
  res.status(200).json(newData);
});

router.get("/:id", async (req, res) => {
  const newData = await myData.findById(req.params.id);
  res.status(200).json(newData);
});

router.patch("/:id", async (req, res) => {
  const newData = await myData.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json(newData);
});

router.delete("/:id", async (req, res) => {
  const newData = await myData.findByIdAndDelete(req.params.id);
  res.status(200).json("Done");
});

router.post("/", async (req, res) => {
  // const newData = new myData({
  //   name: req.body.name,
  // });
  // const saveData = await newData.save();
  // res.status(201).json(saveData);

  const newData = await myData.create(req.body);
  res.status(201).json(newData);
});

module.exports = router;
