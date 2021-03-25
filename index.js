const http = require("http");
const port = 2400;

const game = [
  { id: 1, name: "Nitendo" },
  { id: 2, name: "Sega" },
  { id: 3, name: "XBox" },
  { id: 4, name: "PS" },
];

const server = http.createServer((req, res) => {
  const { method, url } = req;
  console.log(req.headers.authorization);

  const bodySection = [];

  req
    .on("data", (chunk) => {
      bodySection.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(bodySection).toString();

      res.writeHead(200, { "Content-Type": "Application/json" });

      res.end(
        JSON.stringify({
          message: "success",
          data: game,
        })
      );
    });
});

server.listen(port, () => {
  console.log(port);
});

// let peter = [{key:value}]
