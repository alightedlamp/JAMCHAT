// @flow

import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import LogoutButton from '../../containers/LogoutButton'
import ModalContainer from '../../containers/ModalContainer'

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
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
`

const LinkListItem = styled.li`
  width: 100px;
`

const NavUser = styled.span`
  font-size: 1.25em;
`

const MenuButton = styled.button`
  padding: 7px;
  margin: 0 10px;
  width: 100px;
  font-size: 1.15em;
  border: 3px solid blue;
  background: lightblue;
  color: blue;

  &:hover {
    background: blue;
    color: lightblue;
    transition: 0.5s;
  }
`

const MainNav = (props: Object) => {
  const isLoggedIn = props.user.authenticated
  const loginSection = isLoggedIn ? (
    <Fragment>
      <NavUser>{props.user.username}</NavUser>
      <LogoutButton />
    </Fragment>
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
  const roomLinksContainer = () => {
    if (isLoggedIn) {
      if (!props.jam) {
        return (
          <Fragment>
            <ModalContainer openModalText="Start Jam" label="Start Jam">
              <label htmlFor="title">Title:</label> <input type="text" name="title" />
              <label htmlFor="bpm">BPM:</label> <input type="number" name="bpm" />
            </ModalContainer>
          </Fragment>
        )
      }
      return <button>Leave Jam</button>
    }
  }

  return (
    <NavContainer>
      <LinkList>
        {[
          { route: ABOUT_PAGE_ROUTE, label: 'About' },
          { route: LOBBY_PAGE_ROUTE, label: 'Lobby' },
        ].map(link => (
          <LinkListItem key={link.route}>
            <NavLink to={link.route} exact>
              {link.label}
            </NavLink>
          </LinkListItem>
        ))}
      </LinkList>
      <LinkList>{roomLinksContainer()}</LinkList>
      <LinkList>{loginSection}</LinkList>
    </NavContainer>
  )
}

export default MainNav
