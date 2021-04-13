const {
  getAllUser,
  createUser,
  deleteSingleUser,
  getSingleUser,
} = require("./View");
const express = require("express");
const { updateSingleData } = require("../comp/Controller/Controller");
const Route = express.Router();

Route.route("/").get(getAllUser).post(createUser);

Route.route("/:id")
  .patch(updateSingleData)
  .delete(deleteSingleUser)
  .get(getSingleUser);

module.exports = Route;
