const mongoose = require('mongoose');
require('dotenv/config');
const Schema = mongoose.Schema

const url = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + process.env.CLUSTER_NAME + "/test"

const GameTablesSchema = new Schema(
  {
    username: { type: String, required: true },
    game: { type: String, required: true },
    highscore: { type: Number,
      min: [0, 'Cannot Be Negative'],
      required: [true, 'Cannot be blank']},
  },
  { timestamps: true},
);

module.exports = mongoose.model('game_tables', GameTablesSchema);