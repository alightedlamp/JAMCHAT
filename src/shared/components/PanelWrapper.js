// @flow

import React from 'react'
import styled from 'styled-components'

const Panel = styled.section`
  margin-top: ${props => (props.top ? props.top : 0)};
  width: 100%;
  height: 100%;
  padding: 20px;
  display: grid;
`

const PanelWrapper = props => <Panel top={props.top}>{props.children}</Panel>

export default PanelWrapper
