// @flow

import React from 'react'
import styled from 'styled-components'

type Props = {
  label: string,
  handleClick?: Function,
}

const MenuButton = styled.button`
  padding: 7px;
  margin: 0 10px;
  width: 100px;
  font-size: 1.15em;
  border: 3px solid ${props => props.theme.primaryButtonColor};
  background: ${props => props.theme.primaryButtonBgColor};
  color: ${props => props.theme.primaryButtonColor};

  &:hover {
    background: blue;
    color: lightblue;
    transition: 0.5s;
  }
`

const Button = ({ label, handleClick }: Props) => (
  <MenuButton onClick={handleClick}>{label}</MenuButton>
)

Button.defaultProps = {
  handleClick: () => {},
}

export default Button
