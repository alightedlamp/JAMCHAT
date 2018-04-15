// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { APP_NAME } from '../config'
import { HOME_PAGE_ROUTE } from '../routes'

import MainNav from '../containers/MainNav'

const AppBar = styled.header`
  position: fixed;
  display: grid;
  grid-template-columns: 150px auto;
  top: 0;
  left: 0;
  background-color: #1b1b1b;
  width: 100%;
  height: 75px;
  padding: 0 20px;
  z-index: 2;
  box-shadow: 1px 2px 17px 0 rgba(0, 0, 0, 0.2);

  a {
    color: ${props => props.theme.primaryButtonBgColor};
  }
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
