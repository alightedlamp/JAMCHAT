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
  grid-template-columns: 250px auto;
  top: 0;
  left: 0;
  background-color: tomato;
  width: 100%;
  height: 115px;
  padding: 20px;
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
