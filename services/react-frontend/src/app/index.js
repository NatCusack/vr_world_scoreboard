import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar } from '../components';
import { SuperhotScores, HighscoresInsert, HighscoresUpdate, BeatSaber, ArizonaSunshineScores, PistolWhipScores } from '../pages';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/highscores/superhotvr" exact component={SuperhotScores} />
        <Route path="/highscores/beatsaber" exact component={BeatSaber} />
        <Route path="/highscores/arizonasunshine" exact component={ArizonaSunshineScores} />
        <Route path="/highscores/pistolwhip" exact component={PistolWhipScores} />
        <Route path="/highscores/create" exact component={HighscoresInsert} />
        <Route path="/highscores/update/:id" exact component={HighscoresUpdate} />
      </Switch>
    </Router>
  );
}

export default App
