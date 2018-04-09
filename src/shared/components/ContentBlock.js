// @flow

import * as React from 'react'
import styled from 'styled-components'

type Props = {
  children: React.Node,
}

const Content = styled.div`
  width: 960px;
  margin: 1.75em auto;
`

const ContentBlock = ({ children }: Props) => <Content>{children}</Content>

export default ContentBlock
