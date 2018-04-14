// @flow

import * as React from 'react'
import styled from 'styled-components'

type Props = {
  children: React.Node,
}

const Page = styled.section`
  top: 75px;
  position: fixed;
  height: calc(100% - 75px);
  width: 100%;
  overflow-y: scroll;
  background: whitesmoke;
`

const PageWrapper = ({ children }: Props) => <Page>{children}</Page>

export default PageWrapper
