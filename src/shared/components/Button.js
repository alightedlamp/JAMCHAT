// @flow

import React from 'react'

import MenuButton from './MenuButton'

type Props = {
  name?: string,
  value?: string,
  handleClick?: Function,
  children: ?object,
}

const Button = ({
  name, value, handleClick, children,
}: Props) => (
  <MenuButton onClick={handleClick} name={name} value={value}>
    {children}
  </MenuButton>
)

Button.defaultProps = {
  handleClick: () => {},
  name: '',
  value: '',
}

export default Button
