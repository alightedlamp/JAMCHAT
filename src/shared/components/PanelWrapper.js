// @flow

import * as React from 'react'
import styled from 'styled-components'

const PanelWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${props => (props.top ? props.top : 0)}px;
  width: ${props => (props.width ? props.width : '100%')};
`

export default PanelWrapper
