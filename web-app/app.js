const express = require("express");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");
const app = express();
const sessionsRouter = require("./src/routers/sessionsRouter");
const adminRouter = require("./src/routers/adminRouter");
const port = process.env.PORT || 3000;

app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Globomantics", data: ["a", "b", "c"] });
});

app.use("/sessions", sessionsRouter);
app.use("/admin", adminRouter);

app.listen(port, () => debug(`listening on port ${port}`));
