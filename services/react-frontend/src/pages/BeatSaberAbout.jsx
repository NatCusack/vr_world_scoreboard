import React from 'react'
import BSlogo from '../assets/BeatSaber.JPEG'

export const BeatSaberAbout = () => (
    <table style={{marginLeft: 250, marginRight: 250}} >
        <div>
            <br/>
            <thead>
                <td style={{whiteSpace: "nowrap"}}>
                <h1 ><a href="/beatsaber">
                    Beat Saber</a>
                </h1>
                </td>
                
            </thead>
            <tbody>
                <tr>
                    <td>
                        <a>Beat Saber is a VR rhythm game where you slash the beats of adrenaline-pumping music
                        as they fly towards you, surrounded by a futuristic world.</a>
                    </td>
                    <td>
                        <a href="https://store.steampowered.com/app/620980/Beat_Saber/">
                        <img src={BSlogo} width="200" alt="Steam - Beat Saber" />
                    </a>
                </td>
                </tr>
            </tbody>
        </div>
    </table>
    
)
export default BeatSaberAbout