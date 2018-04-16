// @flow

import styled from 'styled-components'

const MenuButton = styled.button`
  padding: 7px;
  margin: 0 10px;
  width: 100px;
  font-size: 1.15em;
  background: ${props => props.theme.primaryButtonBgColor};
  color: ${props => props.theme.primaryButtonColor};
  border: 0;
  text-transform: uppercase;
  font-size: 0.85em;

  &:hover {
    background: blue;
    color: lightblue;
    transition: 0.5s;
  }
`

export default MenuButton
