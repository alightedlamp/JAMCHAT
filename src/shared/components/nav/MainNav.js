// @flow

import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import Button from '../Button'
import LogoutButton from '../../containers/LogoutButton'
import StartJamModal from '../../containers/StartJamModal'

import {
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
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
`

const LinkListItem = styled.li`
  width: 100px;
`

const NavUser = styled.span`
  font-size: 1.25em;
  margin-right: 17px;
  color: ${props => props.theme.primaryButtonBgColor};
`

const MainNav = (props: Object) => {
  const isLoggedIn = props.user.authenticated

  const loginSection = isLoggedIn ? (
    <Fragment>
      <NavUser>{props.user.username}</NavUser>
      <LogoutButton>Logout</LogoutButton>
    </Fragment>
  ) : (
    <Fragment>
      <NavLink to={LOGIN_PAGE_ROUTE} exact>
        <Button>Login</Button>
      </NavLink>
      <NavLink to={REGISTER_PAGE_ROUTE} exact>
        <Button>Register</Button>
      </NavLink>
    </Fragment>
  )
  const roomLinksContainer = () => (isLoggedIn ? <StartJamModal /> : null)

  return (
    <NavContainer>
      <LinkList>
        {[{ route: LOBBY_PAGE_ROUTE, label: 'Sessions' }].map(link => (
          <LinkListItem key={link.route}>
            <NavLink to={link.route} exact>
              {link.label}
            </NavLink>
          </LinkListItem>
        ))}
      </LinkList>
      <LinkList>
        {loginSection}
        {roomLinksContainer()}
      </LinkList>
    </NavContainer>
  )
}

export default MainNav
