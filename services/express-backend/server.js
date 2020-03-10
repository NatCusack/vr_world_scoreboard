// const db = require('./queries')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config')
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const PORT = 4000;
require('nodemon')

const url = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + process.env.CLUSTER_NAME + "/test"
var db

app.use(cors());
app.use(bodyParser.json());

MongoClient.connect(url, (err, client) => {
  if(err) return console.log(err)
    db = client.db('Vr_World_Scoreboard')
  app.listen(PORT, () => {
    console.log("Server is running on Port: " + PORT);
  });
})

app.get('/', (req, res) => {
  var cursor = db.collection('Game_Tables').find()
  db.collection('Game_Tables').find().toArray(function(err, results) {
    console.log(results)
  })
})

app.post('/quote', (req, res) => {
  console.log('Hellooooooooooooooooo!')
})