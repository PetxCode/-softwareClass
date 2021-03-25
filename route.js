const fs = require("fs");
const express = require("express");

const port = 2600;
const app = express();
app.use(express.json());

const data = JSON.parse(fs.readFileSync(`${__dirname}/software.json`));

app.get("/", (req, res) => {
  res.status(200).json({
    report: "success",
    data,
  });
});

app.post("/", (req, res) => {
  const newID = data[data.length - 1].id + 1;
  const newData = Object.assign({ id: newID }, req.body);
  data.push(newData);

  fs.writeFile(`${__dirname}/software`, JSON.stringify(data), (err) => {
    res.status(201).json({
      newData,
    });
  });
});

app.listen(port, () => {
  console.log(`${port}`);
});
