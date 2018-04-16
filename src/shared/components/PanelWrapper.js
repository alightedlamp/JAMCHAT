// @flow

import * as React from 'react'
import styled from 'styled-components'

const PanelWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${props => (props.top ? props.top : 0)}px;
  width: ${props => (props.width ? props.width : '100%')};
  color: ${props => (props.color ? props.color : 'black')};
  padding: ${props => (props.padding ? props.padding : 0)}px;
  background: ${props => (props.background ? props.background : 'whitesmoke')};
`

export default PanelWrapper
