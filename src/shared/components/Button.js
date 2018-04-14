// @flow

import React from 'react'
import styled from 'styled-components'

type Props = {
  label: string,
  name?: string,
  value?: string,
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

const Button = ({
  label, name, value, handleClick,
}: Props) => (
  <MenuButton onClick={handleClick} name={name} value={value}>
    {label}
  </MenuButton>
)

Button.defaultProps = {
  handleClick: () => {},
  name: '',
  value: '',
}

export default Button
