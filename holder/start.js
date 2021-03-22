const http = require("http");
const port = 2200;

const name = [
  { id: 1, name: "Vicky" },
  { id: 2, name: "Peter" },
  { id: 3, name: "Jide" },
];

const start = http.createServer((req, res) => {
  // res.statusCode = 200;
  // res.setHeader("Content-Type", "application/json");

  res.writeHead(200, { "Content-Type": "application/json" });

  console.log(req.headers.authorization);
  const { method, url } = req;
  let body = [];

  let status = 404;
  let response = {
    success: false,
    data: null,
  };

  if (method === "GET" && url === "/name") {
    (status = 200), (response.success = true), (response.data = name);
  }

  req
    .on("data", (chunk) => {
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();

      res.end(JSON.stringify(response));
    });
});

start.listen(port, () => {
  console.log(`port: ${port}`);
});
