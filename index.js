const http = require("http");

const server = http.createServer((req, res) => {
  handleRequest(req, res);
});

function handleRequest(req, res) {
  let requestData = "";
  req.on("data", (chunk) => {
    requestData += chunk;
  });

  req.on("end", () => {
    if (requestData) {
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(`${req.method} request received\nData: ${requestData}\n`);
      printRequest(req, requestData);
    } else {
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(`${req.method} request received\n`);
      printRequest(req);
    }
  });
}

function printRequest(req, data) {
  console.log(`Received ${req.method} request via HTTP/${req.httpVersion}`);
  console.log(`Path: ${req.url}`);
  console.log("Headers:");
  console.log(req.headers);

  if (data) {
    console.log(`Data:\n${data}`);
  }

  console.log("--");
}

const PORT = process.env.PORT || 1234;
const ADDR = process.env.ADDR || "0.0.0.0";
var addrNote = "address";

if (process.env.DOCKER_CONTAINER === "true") {
  addrNote = "address (inside container)";
}

server.listen(PORT, ADDR, () => {
  console.log(
    `Dummy HTTP server listening on ${addrNote} ${ADDR}:${PORT} is ready`
  );
  console.log("--");
});
