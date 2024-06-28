const express = require("express");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = 3000;

app.use(morgan("tiny"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => debug(`listening on port ${port}`));
