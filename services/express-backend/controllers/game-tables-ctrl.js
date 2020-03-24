const HighScore = require('../models/game_tables.model.js');

createHighScore = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an entry',
        })
    }

    const highScore = new HighScore(body)

    if (!highScore) {
        return res.status(400).json({ success: false, error: err })
    }

    highScore
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: highScore._id,
                message: 'Entry created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Entry not created!',
            })
        })
}

updateHighScore = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    HighScore.findOne({ _id: req.params.id }, (err, highScore) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Entry not found!',
            })
        }
        highScore.username = body.username
        highScore.game = body.game
        highScore.highscore = body.highscore
        highScore
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: highScore._id,
                    message: 'Highscore updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Highscore not updated!',
                })
            })
    })
}

deleteHighScore = async (req, res) => {
    await HighScore.findOneAndDelete({ _id: req.params.id }, (err, highScore) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!highScore) {
            return res
                .status(404)
                .json({ success: false, error: `Entry not found` })
        }

        return res
                .status(200)
                .json({ success: true, data: highScore, message: 'Successfully deleted'  })
    }).catch(err => console.log(err))
}

getHighScoreByID = async (req, res) => {
    await HighScore.findOne({ _id: req.params.id }, (err, highScore) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!highScore) {
            return res
                .status(404)
                .json({ success: false, error: `Entry not found` })
        }
        return res.status(200).json({ success: true, data: highScore })
    }).catch(err => console.log(err))
}

getHighScores = async (req, res) => {
    await HighScore.find({}, (err, highScores) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!highScores.length) {
            return res
                .status(404)
                .json({ success: false, error: `Entries not found` })
        }
        return res.status(200).json({ success: true, data: highScores })
    }).catch(err => console.log(err))
}

getSuperhotScores = async (req, res) => {
    await HighScore.find( { game: 'Superhot'}, (err, superhotHighScore) => {
        if(err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!superhotHighScore.length) {
            return res
                .status(404)
                .json({ success: false, error: `Game not found` })
        }
        return res.status(200).json({ success: true, data: superhotHighScore })
    }).catch(err => console.log(err))
}
getBeatSaberScores = async (req, res) => {
    await HighScore.find( { game: 'Beat Saber'}, (err, beatSaberHighScore) => {
        if(err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!beatSaberHighScore.length) {
            return res
                .status(404)
                .json({ success: false, error: `Game not found` })
        }
        return res.status(200).json({ success: true, data: beatSaberHighScore })
    }).catch(err => console.log(err))
}
getArizonaSunshineScores = async (req, res) => {
    await HighScore.find( { game: 'Arizona Sunshine'}, (err, arizonaSunshineHighScore) => {
        if(err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!arizonaSunshineHighScore.length) {
            return res
                .status(404)
                .json({ success: false, error: `Game not found` })
        }
        return res.status(200).json({ success: true, data: arizonaSunshineHighScore })
    }).catch(err => console.log(err))
}
getPistolWhipScores = async (req, res) => {
    await HighScore.find( { game: 'Pistol Whip'}, (err, pistolWhipHighScore) => {
        if(err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!pistolWhipHighScore.length) {
            return res
                .status(404)
                .json({ success: false, error: `Game not found` })
        }
        return res.status(200).json({ success: true, data: pistolWhipHighScore })
    }).catch(err => console.log(err))
}

module.exports = {
    createHighScore,
    updateHighScore,
    deleteHighScore,
    getHighScoreByID,
    getHighScores,
    getSuperhotScores,
    getBeatSaberScores,
    getArizonaSunshineScores,
    getPistolWhipScores,
}