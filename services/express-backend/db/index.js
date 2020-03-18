const mongoose = require('mongoose');
require('dotenv/config')

const url = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + process.env.CLUSTER_NAME + "/test"

mongoose.connect(url, { useNewUrlParser: true })
.catch(e => {
  console.log('Connection error', e.message);
});

const db = mongoose.connection;

module.exports = db;