// @flow

import React from 'react'
import Nav from './Nav'
import { APP_NAME } from '../config'

const Header = () => (
  <header>
    <button>Menu</button>
    <h1>{APP_NAME}</h1>
    <Nav />
    <button>Lobby</button>
  </header>
)

export default Header
