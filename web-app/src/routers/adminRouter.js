const express = require("express");
const sessions = require("../data/sessions.json");
const debug = require("debug")("app:adminRouter");
const { MongoClient } = require("mongodb");

const adminRouter = express.Router();

adminRouter.route("/").get((req, res) => {
  const url =
    "mongodb+srv://tetikci41:mypassword@globalmantics.i5huiry.mongodb.net/?retryWrites=true&w=majority&appName=Globalmantics";
  const dbName = "globomantics";

  (async function mongo() {
    let client;
    try {
      client = await MongoClient.connect(url);
      debug("Connected to the mongo DB");
      const db = client.db(dbName);
      const response = await db.collection("sessions").insertMany(sessions);
      res.json(response);
    } catch (error) {
      debug(error.stack);
    }
  })();
});

module.exports = adminRouter;
