// @flow

import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  width: 960px;
  margin: 1.75em auto;
`

const ContentBlock = props => <Content>{props.children}</Content>

export default ContentBlock
