// @flow

import * as React from 'react'
import styled from 'styled-components'

type Props = {
  top?: number,
  width: ?number,
  children: React.Node,
}

const Panel = styled.section`
  height: 100%;
  padding: 20px;
  display: grid;
  margin-top: ${props => (props.top ? props.top : 0)}px;
  width: ${props => (props.width ? props.width : 100)}%;
`

const PanelWrapper = ({ top, width, children }: Props) => (
  <Panel top={top} width={width}>
    {children}
  </Panel>
)

PanelWrapper.defaultProps = {
  top: 0,
}

export default PanelWrapper
