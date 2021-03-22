const http = require("http");

const port = 2300;

const server = http.createServer((req, res) => {
  // console.log("Getting the Headers");
  // console.log(req.headers);

  // const { method, headers, url } = req;
  // console.log("Getting the Headers after deconstructing");
  // console.log(headers);
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hello Peter</h1>");

  res.end();
});

server.listen(port, () => {
  console.log(port);
});
