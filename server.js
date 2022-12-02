const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const dbName = "todo-server";
let db;

MongoClient.connect(url, { useUnifiedTopology: true }).then((client) => {
  console.log(`Connected MongoDB: ${url}`);
  console.log(`Database: ${dbName}`);
  db = client.db(dbName);
  const tasksCollection = db.collection("tasks");
  app.use(cors());

  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });

  app.post("/tasks", (req, res) => {
    console.log({ req: req.body });
    // tasksCollection
    //   .insertOne(req.body)
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => console.error(error));
  });

  app.listen(3001, function () {
    console.log("listening on 3001");
  });
});


