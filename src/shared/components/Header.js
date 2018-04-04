// @flow

import React from 'react'
import styled from 'styled-components'

import Nav from './Nav'
import { APP_NAME } from '../config'

const AppBar = styled.header`
  position: fixed;
  background-color: tomato;
  width: 100%;
  height: 75px;
`

const Header = () => (
  <AppBar>
    <h1>{APP_NAME}</h1>
    <Nav />
  </AppBar>
)

export default Header
