const express = require('express')

const GameTablesCtrl = require('../controllers/game-tables-ctrl')

const router = express.Router()

router.post('/highscore', GameTablesCtrl.createHighScore)
router.put('/highscore/:id', GameTablesCtrl.updateHighScore)
router.delete('/highscore/:id', GameTablesCtrl.deleteHighScore)
router.get('/highscore/:id', GameTablesCtrl.getHighScoreByID)
router.get('/highscores', GameTablesCtrl.getHighScores)
router.get('/superhot', GameTablesCtrl.getSuperhotScores)
router.get('/beatsaber', GameTablesCtrl.getBeatSaberScores)
router.get('/arizonasunshine', GameTablesCtrl.getArizonaSunshineScores)

module.exports = router