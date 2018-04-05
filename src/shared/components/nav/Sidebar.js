// @flow

import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  z-index: 1;
`

const HamburgerMenu = styled.div`
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #888;
  z-index: 2;
`
const Sidebar = (props) => {
  const isVisible = props.visible
  return (
    <Wrapper visible={isVisible}>
      <HamburgerMenu visible={isVisible}>
        <nav>{props.children}</nav>
      </HamburgerMenu>
    </Wrapper>
  )
}

export default Sidebar
