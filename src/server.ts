import express from "express";

const app = express();
const hostname = "127.0.0.1";
const port = 3000;

// default route handler
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// without Express use below code
// import http from "http";

// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
