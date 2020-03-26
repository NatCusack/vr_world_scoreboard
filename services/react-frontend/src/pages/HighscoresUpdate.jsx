import React, { Component } from 'react'
import api from '../api'
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

class HighscoresUpdate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
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

  handleUpdateHighscore = async () => {
    const { id, username, game, highscore } = this.state
    const payload = { username, game, highscore }

    await api.updateHighscoreById(id, payload).then(res => {
      window.alert(`Entry updated successfully`)
      this.setState({
        username: '',
        game: '',
      })
      window.history.go(-1); return false;
    })
  }

  componentDidMount = async () => {
    const { id } = this.state
    const highscoreEntry = await api.getHighscoreById(id)

    this.setState({
      username: highscoreEntry.data.data.username,
      game: highscoreEntry.data.data.game,
      highscore: highscoreEntry.data.data.highscore,
    })
  }

  render() {
    const { username, game, highscore } = this.state
    const redirect = game.replace(/\s/g, '');

    return (
      <Wrapper>
        <Title>Update Highscore</Title>

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
        </InputDropdown>

        <Label>Score: </Label>
        <InputText
          type="number"
          value={highscore}
          pattern="[0-9]"
          onChange={this.handleChangeInputScore}
        />

        <Button onClick={this.handleUpdateHighscore}>Update Highscore</Button>
        <CancelButton href={"/" + redirect}>Cancel</CancelButton>
      </Wrapper>
    )
  }
}

export default HighscoresUpdate