// require('dotenv/config')
// const db = require('./db/index.js');
// const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// require('nodemon')

const db = require('./db')
const gameTableRouter = require('./routes/game-tables-router')

const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', gameTableRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

// MongoClient.connect(url, (err, client) => {
//   if(err) {
//     return console.log(err)
//   }
//     db = client.db('Vr_World_Scoreboard')
//   app.listen(PORT, () => {
//     console.log("Server is running on Port: " + PORT);
//   });
// })

app.get('/', (req, res) => {
  var cursor = db.collection('Game_Tables').find()
  db.collection('Game_Tables').find().toArray(function(err, results) {
    console.log(results)
  })
})