const express = require('express')

const GameTablesCtrl = require('../controllers/game-tables-ctrl')

const router = express.Router()

router.post('/highscore', GameTablesCtrl.createHighScore)
router.put('/highscore/:id', GameTablesCtrl.updateHighScore)
router.delete('/highscore/:id', GameTablesCtrl.deleteHighScore)
router.get('/highscore/:id', GameTablesCtrl.geHighScoreByID)
router.get('/highscores', GameTablesCtrl.getHighScores)

module.exports = router