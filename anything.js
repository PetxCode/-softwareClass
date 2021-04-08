const fs = require("fs");
const express = require("express");
const port = 2100;

const game = [
  { id: 1, name: "Nitendo" },
  { id: 2, name: "Sega" },
  { id: 3, name: "XBox" },
  { id: 4, name: "PS" },
];

const data = JSON.parse(fs.readFileSync(`${__dirname}/todos.json`));

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({
    data: data,
  });
});

server.get("/:id", (req, res) => {
  const newID = req.params.id * 1;
  const newData = data.find((el) => el.id === newID);

  res.status(200).json({
    data: newData,
  });
});

server.post("/", (req, res) => {
  const newID = data[data.length - 1].id + 1;
  const newData = Object.assign({ id: newID }, req.body);

  data.push(newData);

  fs.writeFile(`${__dirname}/todos.json`, JSON.stringify(data), (err) => {
    res.status(201).json({
      data: newData,
    });
  });
});

server.listen(port, () => {
  console.log(`${port}`);
});
