const express = require("express");
const port = 2100;
const game = [
  { id: 1, name: "Nitendo" },
  { id: 2, name: "Sega" },
  { id: 3, name: "XBox" },
  { id: 4, name: "PS" },
];
const server = express();

server.get("/", (req, res) => {
  res.status(200).json({
    data: game,
  });
});

server.listen(port, () => {
  console.log(`${port}`);
});
