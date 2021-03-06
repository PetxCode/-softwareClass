const http = require("http");
const port = 2300;

const game = [
  { id: 1, name: "Nitendo" },
  { id: 2, name: "Sega" },
];

const server = http.createServer((req, res) => {
  const { method, url, headers } = req;
  res.writeHead(200, { "Content-Type": "Application/json" });

  let body = [];
  req
    .on("data", (chunk) => {
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();

      let status = 404;
      const response = {
        result: false,
        data: null,
      };

      //Get method
      if (method === "GET" && url === "/software") {
        status = 200;
        response.result = true;
        response.data = game;
      }

      //Post method
      if (method === "POST" && url === "/software") {
        const { id, name } = JSON.parse(body);
        if (!id || !name) {
          status = 404;
        } else {
          game.push({ id, name });
          status = 200;
          response.result = true;
          response.data = game;
        }
      }

      res.end(JSON.stringify(response));
    });
});

server.listen(port, () => {
  console.log(port);
});
