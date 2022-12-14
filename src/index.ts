import express from "express";

const app = express();
const PING_LISTEN_PORT = 8080;

app.get("/ping", (req, res) => {
  res.send(req.headers);
});

app.get("*/*", (req, res) => {
  res.status(404).send();
});

app.listen(PING_LISTEN_PORT, () => {
  console.log("The application is listening on port " + PING_LISTEN_PORT + "!");
});
