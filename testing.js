const http = require("http");
const port = 2500;

const game = [
  { id: 1, name: "Nitendo" },
  { id: 2, name: "Sega" },
];

const server = http.createServer((req, res) => {
  const { method, url } = req;
  const bodySection = [];

  req
    .on("data", (chunk) => {
      bodySection.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(bodySection).toString();

      let status = 404;
      const response = {
        report: "failed",
        data: null,
      };

      if (method === "GET" && url === "/") {
        status = 200;
        response.report = "good";
        response.data = game;
      }

      if (method === "POST" && url === "/") {
        const { id, name } = JSON.parse(body);

        if (!id || !name) {
          status = 404;
          response.report = "failed";
          response.mgs = "either id or name is missing";
          response.data = null;
        } else {
          game.push({ id, name });

          status = 201;
          response.report = "Created";
          response.data = game;
        }
      }

      res.writeHead(status, { "Content-Type": "Application/json" });
      res.end(JSON.stringify(response));
    });
});

server.listen(port, () => {
  console.log(`${port}`);
});
