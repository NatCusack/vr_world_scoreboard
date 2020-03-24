import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar } from '../components';
import { SuperhotScores, HighscoresInsert, HighscoresUpdate, BeatSaber, ArizonaSunshineScores, BeatSaberAbout, SuperhotAbout, ArizonaSunshineAbout, PistolWhipAbout, Instructions } from '../pages';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/highscores/superhotvr" exact component={SuperhotScores} />
        <Route path="/highscores/beatsaber" exact component={BeatSaber} />
        <Route path="/highscores/arizonasunshine" exact component={ArizonaSunshineScores} />
        <Route path="/highscores/create" exact component={HighscoresInsert} />
        <Route path="/highscores/update/:id" exact component={HighscoresUpdate} />
        <Route path="/about/beatsaber" exact component={BeatSaberAbout} />
        <Route path="/about/superhot" exact component={SuperhotAbout}/>
        <Route path="/about/arizonasunshine" exact component={ArizonaSunshineAbout}/>
        <Route path="/about/pistolwhip" exact component={PistolWhipAbout}/>
        <Route path="/instructions" exact component={Instructions}/>
      </Switch>
    </Router>
  );
}

export default App
