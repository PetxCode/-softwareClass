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

      let status = 404;
      const response = {
        result: false,
        data: null,
      };

      if (method === "GET" && url === "/") {
        status = 200;
        response.result = true;
        response.data = game;
      }

      if (method === "POST" && url === "/") {
        const { id, name } = JSON.parse(body);

        if (!id || !name) {
          status = 404;
          response.report = false;
          response.mgs = "You should enter both id and name";
          response.data = null;
        } else {
          game.push({ id, name });

          status = 201;
          response.report = true;
          response.data = game;
        }
      }

      res.writeHead(status, { "Content-Type": "Application/json" });
      res.end(JSON.stringify(response));
    });
});

server.listen(port, () => {
  console.log(port);
});

// let peter = [{key:value}]
