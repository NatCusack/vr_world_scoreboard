import React from 'react'
import ASlogo from '../assets/ArizonaSunshine.JPEG'

export const ArizonaSunshineAbout = () => (
    <table style={{marginLeft: 250, marginRight: 250}} >
        <div>
            <br/>
            <thead>
                <td style={{whiteSpace: "nowrap"}}>
                    <h1 ><a href="/arizonasunshine">
                        Arizona Sunshine</a>
                    </h1>
                </td>
                
            </thead>
            <tbody>
                <tr>
                    <td>
                        <a>Built exclusively for VR, Arizona Sunshine puts you in the midst of a zombie apocalypse.
                            Handle weapons with real-life movements, freely explore a post-apocalyptic world, and put your survival 
                            skills to the test in VR - putting the undead back to rest is more thrilling than ever before.</a>
                    </td>
                    <td>
                        <a href="https://store.steampowered.com/app/342180/Arizona_Sunshine/">
                            <img src={ASlogo} width="200" alt="Steam - Arizona Sunshine" />
                            </a>
                    </td>
                </tr>
            </tbody>
        </div>
    </table>
)
export default ArizonaSunshineAbout