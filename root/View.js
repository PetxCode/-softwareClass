const express = require("express");
const Router = express.Router();

const dataSchema = require("./Model");

exports.getAllUser = async (req, res) => {
  const newData = await dataSchema.find();
  res.status(200).json(newData);
};

exports.getSingleUser = async (req, res) => {
  const newData = await dataSchema.findById(req.params.id);
  res.status(200).json(newData);
};

exports.updateSingleUser = async (req, res) => {
  const newData = await dataSchema.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json(newData);
};

exports.deleteSingleUser = async (req, res) => {
  const newData = await dataSchema.findByIdAndDelete(req.params.id, req.body);
  res.status(200).json("done");
};

exports.createUser = async (req, res) => {
  const newData = await dataSchema.create(req.body);
  res.status(201).json(newData);
};

// module.exports = Router;
