import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    VR World Scoreboard
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/highscores/superhotvr" className="nav-link">
                                Superhot VR
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/highscores/beatsaber" className="nav-link">
                                Beat Saber
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/highscores/arizonasunshine" className="nav-link">
                                Arizona Sunshine
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/highscores/pistolwhip" className="nav-link">
                                Pistol Whip
                            </Link>
                        </Item>
                    </List>
                    <List>
                        <Item>
                            <Link to="/highscores/create" className="nav-link">
                                Add Highscore
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links