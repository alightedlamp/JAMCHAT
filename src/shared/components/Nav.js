// @flow

import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { APP_NAME } from '../config'

import Sidebar from '../components/Sidebar'
import ModalButton from '../components/ModalButton'

import { HOME_PAGE_ROUTE, ABOUT_PAGE_ROUTE, LOBBY_PAGE_ROUTE } from '../routes'
import { registerUser } from '../actions/user'

const SidebarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

class Nav extends Component {
  state = {
    user: '',
    isLoading: false,
    error: false,
  }

  componentDidMount() {
    // see if there is a user logged in and set the object in state
  }

  handleLogin = () => {
    // dispatch login action
  }

  handleRegister = (e) => {
    e.preventDefault()
    // dispatch register action
    const user = e.value.username
    dispatch(registerUser())
  }

  render() {
    const isLoggedIn = this.state.user
    const loginSection = isLoggedIn ? (
      <button>Logout</button>
    ) : (
      <div>
        <ModalButton
          label="Login"
          handleSubmit={this.handleLogin}
          isLoading={this.state.isLoading}
          error={this.state.error}
          modalText="Login to your account:"
        />
        <ModalButton
          label="Register"
          handleSubmit={this.handleRegister}
          isLoading={this.state.isLoading}
          error={this.state.error}
          modalText="Create an account!"
        />
      </div>
    )
    return (
      <nav>
        <SidebarContainer>
          <Sidebar icon="Menu">
            <ul>
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
            </ul>
          </Sidebar>
          <Sidebar icon="Lobby" />
        </SidebarContainer>
        <Link to={HOME_PAGE_ROUTE}>{APP_NAME}</Link>
        <div className="login">{loginSection}</div>
      </nav>
    )
  }
}

export default Nav
