import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'
import styled from 'styled-components'
import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateHighscore extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteHighscore extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do you want to delete the score ${this.props.username} permanently?`,
            )
        ) {
            api.deleteHighscoreById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class ArizonaSunshineScores extends Component {
  constructor(props) {
    super(props)
    this.state = {
      highscores: [],
      columns: [],
      isLoading: false,
    }
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true })

    await api.getArizonaSunshineScores().then(highscores => {
      console.log(highscores)
      this.setState({
        highscores: highscores.data.data,
        isLoading: false,
      })
    })
  }

  render() {
    const { highscores, isLoading } = this.state

    const columns = [
      {
        Header: 'Game',
        accessor: 'game',
        filterable: false,
      },
      {
        Header: 'Score',
        accessor: 'highscore',
        filterable: true,
      },
      {
        Header: 'User',
        accessor: 'username',
        filterable: true,
      },
      {
          Header: '',
          accessor: '',
          Cell: function(props) {
              return (
                  <span>
                      <DeleteHighscore id={props.original._id} />
                  </span>
              )
          },
      },
      {
          Header: '',
          accessor: '',
          Cell: function(props) {
              return (
                  <span>
                      <UpdateHighscore id={props.original._id} />
                  </span>
              )
          },
      },
    ]

    let showTable = true
    if (!highscores.length) {
      showTable = false
    }

    return (
      <Wrapper>
        {showTable && (
          <ReactTable
            data={highscores}
            columns={columns}
            loading={isLoading}
            defaultPageSize={10}
            showPageSizeOptions={true}
            minRows={0}
          />
        )}
      </Wrapper>
    )
  }
}

export default ArizonaSunshineScores
