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
  display: flex;
  justify-content: space-between;
`

const LinkList = styled.ul`
  display: flex;
  list-style-type: none;
`

const MainNav = (user) => {
  const isLoggedIn = user.authenticated
  const loginSection = isLoggedIn ? (
    <LogoutButton />
  ) : (
    <Fragment>
      <NavLink to={LOGIN_PAGE_ROUTE} exact>
        <button>Login</button>
      </NavLink>
      <NavLink to={REGISTER_PAGE_ROUTE} exact>
        <button>Register</button>
      </NavLink>
    </Fragment>
  )
  return (
    <NavContainer>
      <LinkList>
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
      <LinkList>{loginSection}</LinkList>
    </NavContainer>
  )
}

export default MainNav
