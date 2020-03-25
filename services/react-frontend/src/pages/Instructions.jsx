import React from 'react'
import Alph from '../assets/TabAlph.PNG'
import RevAlph from '../assets/TabAlphRev.PNG'
import AddScore from '../assets/addingScore1.PNG'
import SavedScore from '../assets/savedscore.PNG'

export const Instructions = () => (
    <div style={{marginLeft: 225, marginRight : 225}}>
        <br/>
        <h1 ><p>
            Website User Guide</p>
        </h1>
        <h3>Welcome to the VR World Leaderboards!</h3>
        <p>This website is designed to display the high score off all games in VR World. For demonstartion purposes we have a catalog of 4 Games:</p>
        <ul>
            <li><a href="/arizonasunshine">Arizona Sunshine</a></li>
            <li><a href="/beatsaber">Beat Saber</a></li>
            <li><a href="/pistolwhip">Pistol Whip</a></li>
            <li><a href="/superhot">Super Hot</a></li>
        </ul>
        <p>Each Game has an independant scoreboard page which you can visit by clicking the game's name in the list above, by visting the homepage and clicking the "View Highscore Table" to the corresponding game or by pressing the game you would like in the Navigation bar.</p>
        <h3>Tables</h3>
        <p>By default, the scoreboard will display the top 10 scores and the accompanying username. This order however, can be changed by click the title of the row you want the data organised in. You can order the data either by score or username. For example clicking "username" will organise the scoreboard alphabetically. By Clicking username again, it will reverse the order.</p>
        <a><img src={Alph} width="1200" alt="Alphabetical Order" /></a>
        <a style={{textAlign: "center"}}>&emsp;&emsp;Scoreboard ordered alphabetically</a>
        <p></p>
        <a><img src={RevAlph} width="1200" alt="Reverse Alphabetical Order" /></a>
        <a style={{textAlign: "center"}}>&emsp;&emsp;Scoreboard ordered reverse alphabetically</a>
        <p></p>
        <p>Underneath the table titles there is also a search bar for searching for usernames or users who have gotten a certain score.</p>
        <p>In the table you will find 2 buttons. The first one is "delete". This allows the user to delete a highscore entry from the table. The second button is the "Update" button. This Allows the user to edit an existing highscore entry.</p>
        <p></p>
        <h3>Adding A Highscore</h3>
        <p>To add a new highscore to the leaderboards you must click on the "Add Highscore" button on the Navigation Bar. This will bring you to a form page where you must enter the Username, Score and select which game from a drop down menu. After the the form is filled out click "Add Highscore" below and the Score, Username and Game Name will be added to the database and will immediately appear in the highscore table of the game selected. </p>
        <a><img src={AddScore} width="1200" alt="Adding Score" /></a>
        <a style={{textAlign: "center"}}>&emsp;&emsp;Successful Insertion into Database</a>
        <p></p>
        <a><img src={SavedScore} width="1200" alt="Saved Score" /></a>
        <a style={{textAlign: "center"}}>&emsp;&emsp;Displayed in Table</a>
        <p></p>
        <p></p>
        <h3>About Pages</h3>
        <p>Each game has its own dedicated "about" page. These pages can be accessed from the home page. Each page has a brief blurb about the game aswell as the games cover art. By clicking the games name you are redirected to the corresponding highscore page. By clicking the games cover art you will be redirected to the Steam Store where you can purchase this game for yourself.</p>
    
    </div>
)
export default Instructions