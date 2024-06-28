const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Amr Metwaly's REST API endpoint");
});

app.listen(port, () =>
  console.log(`Running the sample app. Listening on port ${port}`)
);
