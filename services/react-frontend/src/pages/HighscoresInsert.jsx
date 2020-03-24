import React, { Component } from 'react';
import api from '../api';

import styled from 'styled-components'

const Title = styled.h1.attrs({
  className: 'h1',
})``

const Wrapper = styled.div.attrs({
  className: 'form-group',
})`
  margin: 0 30px;
`

const Label = styled.label`
  margin: 5px;
`

const InputText = styled.input.attrs({
  className: 'form-control',
})`
  margin: 5px;
`
const InputDropdown = styled.select.attrs({
  className: 'form-control',
})`
  margin: 5px;
  width: 150ps;
`

const Button = styled.button.attrs({
  className: `btn btn-primary`,
})`
  margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`,
})`
  margin: 15px 15px 15px 5px;
`
class HighscoresInsert extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      game: '',
      highscore: '',
    }
  }

  handleChangeInputName = async event => {
    const username = event.target.value
    this.setState({ username })
  }

  handleChangeInputGame = async event => {
    const game = event.target.value
    this.setState({ game })
  }

  handleChangeInputScore = async event => {
    const highscore = event.target.validity.valid
      ? event.target.value
      : this.state.highscore

    this.setState({ highscore })
  }

  handleIncludeHighscore = async () => {
    const { username, game, highscore } = this.state
    const payload = { username, game, highscore }

    await api.insertHighscore(payload).then(res => {
        window.alert(`High Score inserted successfully`)
        this.setState({
            username: '',
            game: '',
            highscore: '',
        })
    })
}

  render() {
    const { username, game, highscore } = this.setState

    return (
      <Wrapper>
        <Title>Add High Score</Title>

        <Label>Name: </Label>
        <InputText
          type="text"
          value={username}
          onChange={this.handleChangeInputName}
        />
        <Label>Game: </Label>
          <InputDropdown className="form-control"
            value={game}
            onChange={this.handleChangeInputGame}>
              <option value="">Select</option>
              <option value="Beat Saber">Beat Saber</option>
              <option value="Arizona Sunshine">Arizona Sunshine</option>
              <option value="Superhot">Superhot</option>
              <option value="Pistol Whip">Pistol Whip</option>
              <option value="Game4">Game4</option>
              <option value="Game5">Game5</option>
          </InputDropdown>

        <Label>Score: </Label>
        <InputText list="Games"
            type="number"
            lang="en-US"
            min="0"
            pattern="[0-9]"
            value={highscore}
            onChange={this.handleChangeInputScore}
        />

        <Button onClick={this.handleIncludeHighscore}>Add High Score</Button>
        <CancelButton href={'/highscores/list'}>Cancel</CancelButton>
      </Wrapper>
    )
  }
}

export default HighscoresInsert