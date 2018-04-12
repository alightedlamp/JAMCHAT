// @flow

import * as React from 'react'
import styled from 'styled-components'

type Props = {
  children: React.Node,
}

const Page = styled.section`
  margin-top: 75px;
  width: 100%;
`

const PageWrapper = ({ children }: Props) => <Page>{children}</Page>

export default PageWrapper
