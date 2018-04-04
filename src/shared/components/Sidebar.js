// @flow

import React, { Component } from 'react'
import styled from 'styled-components'

const HamburgerMenu = styled.div`
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  position: fixed;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #888;
`

const NavIcon = styled.button`
  position: fixed;
  padding: 2em;
  z-index: 2;
`

class Sidebar extends Component {
  state = {
    isOpen: false,
  }

  toggleSidebar = (isOpen) => {
    this.setState({ isOpen: !isOpen })
  }
  render() {
    const isVisible = !!this.state.isOpen
    return (
      <div>
        <NavIcon onClick={() => this.toggleSidebar(this.state.isOpen)}>{this.props.icon}</NavIcon>
        <HamburgerMenu visible={this.state.isOpen}>
          <nav>{this.props.children}</nav>
        </HamburgerMenu>
      </div>
    )
  }
}

export default Sidebar
