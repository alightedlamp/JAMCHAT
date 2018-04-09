// @flow

import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import Button from '../Button'
import LogoutButton from '../../containers/LogoutButton'
import ModalContainer from '../../containers/ModalContainer'

import {
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

const Field = styled.div`
  margin: 20px 0;
`

const MainNav = (props: Object) => {
  const isLoggedIn = props.user.authenticated
  const currentRoom = props.currenRoom

  const loginSection = isLoggedIn ? (
    <Fragment>
      <NavUser>{props.user.username}</NavUser>
      <LogoutButton />
    </Fragment>
  ) : (
    <Fragment>
      <NavLink to={LOGIN_PAGE_ROUTE} exact>
        <Button label="Login" />
      </NavLink>
      <NavLink to={REGISTER_PAGE_ROUTE} exact>
        <Button label="Register" />
      </NavLink>
    </Fragment>
  )
  const roomLinksContainer = () => {
    if (isLoggedIn) {
      if (!currentRoom) {
        return (
          <Fragment>
            <ModalContainer openModalText="New Jam" label="New Jam">
              <Field>
                <label htmlFor="title">
                  Title: <input type="text" name="title" />
                </label>
              </Field>
              <Field>
                <label htmlFor="bpm">
                  BPM: <input type="number" name="bpm" />
                </label>
              </Field>
            </ModalContainer>
          </Fragment>
        )
      }
      return <Button label="Leave Jam" />
    }
    return null
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
