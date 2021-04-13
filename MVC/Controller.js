const express = require("express");
const Router = express.Router();

const {
  getAllEntry,
  getSingleEntry,
  createEntry,
  deleteSingleEntry,
  updateSingleEntry,
} = require("./View");

Router.route("/").get(getAllEntry).post(createEntry);
Router.route("/:id")
  .patch(updateSingleEntry)
  .delete(deleteSingleEntry)
  .get(getSingleEntry);

module.exports = Router;
