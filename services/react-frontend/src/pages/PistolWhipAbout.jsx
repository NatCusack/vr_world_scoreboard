import React from 'react'
import PWlogo from '../assets/PistolWhip.png'

export const PistolWhipAbout = () => (
    <table style={{marginLeft: 250, marginRight: 250}} >
        <div>
            <br/>
            <thead>
                <td style={{whiteSpace: "nowrap"}}>
                <h1 ><a href="/pistolwhip">
                    Pistol Whip</a>
                </h1>
                </td> 
            </thead>
            <tbody>
                <tr>
                    <td>
                        <a>Pistol Whip is an unstoppable action-rhythm FPS. Journey through a cinematic bullet hell
             powered by a breakneck soundtrack to become the ultimate action hero legend.</a>
                    </td>
                    <td>
                        <a href="https://store.steampowered.com/app/1079800/Pistol_Whip/">
                        <img src={PWlogo} width="200" alt="Steam - Pistol Whip" />
                    </a>
                </td>
            </tr>
        </tbody>
        </div>
    </table>
  
)
export default PistolWhipAbout