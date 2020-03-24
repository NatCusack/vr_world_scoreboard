import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000/api',
})

export const insertHighscore = payload => api.post(`/highscore`, payload)
export const getAllHighscores = () => api.get(`/highscores`)
export const updateHighscoreById = (id, payload) => api.put(`/highscore/${id}`, payload)
export const deleteHighscoreById = id => api.delete(`/highscore/${id}`)
export const getHighscoreById = id => api.get(`/highscore/${id}`)
export const getSuperhotScores = () => api.get(`/superhot`)
export const getBeatSaberScores = () => api.get(`/beatsaber`)
export const getArizonaSunshineScores = () => api.get(`/arizonasunshine`)




const apis = {
    insertHighscore,
    getAllHighscores,
    updateHighscoreById,
    deleteHighscoreById,
    getHighscoreById,
    getSuperhotScores,
    getBeatSaberScores,
    getArizonaSunshineScores,
}

export default apis