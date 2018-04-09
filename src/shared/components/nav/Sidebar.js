// @flow

import * as React from 'react'
import styled from 'styled-components'

type Props = {
  visible: string,
  children: React.Node,
}

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
const Sidebar = ({ visible, children }: Props) => {
  const isVisible = visible
  return (
    <Wrapper visible={isVisible}>
      <HamburgerMenu visible={isVisible}>
        <nav>{children}</nav>
      </HamburgerMenu>
    </Wrapper>
  )
}

export default Sidebar
