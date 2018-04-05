// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { APP_NAME } from '../config'
import { HOME_PAGE_ROUTE } from '../routes'

import MainNav from './nav/MainNav'

const AppBar = styled.header`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  background-color: tomato;
  width: 100%;
  height: 75px;
`

const Header = () => (
  <AppBar>
    <Link to={HOME_PAGE_ROUTE}>
      <h1>{APP_NAME}</h1>
    </Link>
    <MainNav />
  </AppBar>
)

export default Header
