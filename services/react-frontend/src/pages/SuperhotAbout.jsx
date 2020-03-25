import React from 'react'
import SHlogo from '../assets/SuperHot.jpg'

export const SuperhotAbout = () => (
    <table style={{marginLeft: 250, marginRight: 250}} >
        <div>
            <br/>
            <thead>
                <td style={{whiteSpace: "nowrap"}}>
                <h1 ><a href="/superhot">
                    Super Hot</a>
                </h1>
                </td> 
            </thead>
            <tbody>
                <tr>
                    <td>
                        <a>SUPERHOT is the first person shooter where time moves only when you move. No regenerating health bars. No conveniently 
            placed ammo drops. It's just you, outnumbered and outgunned,
            grabbing weapons off fallen enemies to shoot, slice, and maneuver through a hurricane of slow-motion bullets.</a>
                    </td>
                    <td>
                        <a href="https://store.steampowered.com/app/322500/SUPERHOT/">
                        <img src={SHlogo} width="200" alt="Steam - Pistol Whip" />
                    </a>
                </td>
            </tr>
        </tbody>
        </div>
    </table>
    
)
export default SuperhotAbout