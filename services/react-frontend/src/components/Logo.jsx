import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../assets/logo.jpg'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper >
                <a href="/">
                <img src={logo} width="50" height="50" alt="sambarros.com" />
                </a>
            </Wrapper>
        )
    }
}

export default Logo