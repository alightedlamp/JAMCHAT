// @flow

import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import LogoutButton from '../../containers/LogoutButton'

import {
  HOME_PAGE_ROUTE,
  ABOUT_PAGE_ROUTE,
  LOBBY_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  REGISTER_PAGE_ROUTE,
} from '../../routes'

const NavContainer = styled.nav`
  display: grid;
  grid-template-areas: 'pagesSubNav . loginSubNav';
  grid-template-columns: 15% auto 10%;
`

const LinkList = styled.ul`
  grid-area: ${props => props.gridAreaName};
  display: flex;
  list-style-type: none;
`

const MenuButton = styled.button`
  padding: 7px;
  margin: 0 10px;
  width: 100px;
  font-size: 1.15em;
  border: 3px solid blue;
  background: lightblue;
  color: blue;
`

const MainNav = (user: Object) => {
  const isLoggedIn = user.authenticated
  const loginSection = isLoggedIn ? (
    <LogoutButton />
  ) : (
    <Fragment>
      <NavLink to={LOGIN_PAGE_ROUTE} exact>
        <MenuButton>Login</MenuButton>
      </NavLink>
      <NavLink to={REGISTER_PAGE_ROUTE} exact>
        <MenuButton>Register</MenuButton>
      </NavLink>
    </Fragment>
  )
  return (
    <NavContainer>
      <LinkList gridAreaName="pagesSubNav">
        {[
          { route: HOME_PAGE_ROUTE, label: 'Home' },
          { route: ABOUT_PAGE_ROUTE, label: 'About' },
          { route: LOBBY_PAGE_ROUTE, label: 'Lobby' },
        ].map(link => (
          <li key={link.route}>
            <NavLink to={link.route} exact>
              {link.label}
            </NavLink>
          </li>
        ))}
      </LinkList>
      <LinkList gridAreaName="loginSubNav">{loginSection}</LinkList>
    </NavContainer>
  )
}

export default MainNav
