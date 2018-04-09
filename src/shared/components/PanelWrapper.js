// @flow

import * as React from 'react'
import styled from 'styled-components'

type Props = {
  top?: number,
  children: React.Node,
}

const Panel = styled.section`
  margin-top: ${props => (props.top ? props.top : 0)}px;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: grid;
`

const PanelWrapper = ({ top, children }: Props) => <Panel top={top}>{children}</Panel>

PanelWrapper.defaultProps = {
  top: 0,
}

export default PanelWrapper
